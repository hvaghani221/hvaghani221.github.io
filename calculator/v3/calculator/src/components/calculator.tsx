'use client'

import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface Config {
  completions: number
  hasIdealCompletion: boolean
  hasGradingRubrics: boolean
  penalizeMismatchedSeven: boolean
}

const defaultConfig: Config = {
  completions: 4,
  hasIdealCompletion: false,
  hasGradingRubrics: false,
  penalizeMismatchedSeven: false
}

export default function RatingCalculator() {
  const [config, setConfig] = useState<Config>(defaultConfig)
  const [originalRatings, setOriginalRatings] = useState<number[]>([])
  const [suggestedRatings, setSuggestedRatings] = useState<number[]>([])
  const [idealCompletion, setIdealCompletion] = useState(1)
  const [gradingRubrics, setGradingRubrics] = useState(1)

  // Load config from localStorage on initial render
  useEffect(() => {
    const savedConfig = localStorage.getItem('ratingCalculatorConfig')
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig))
    }
  }, [])

  // Update localStorage when config changes
  useEffect(() => {
    localStorage.setItem('ratingCalculatorConfig', JSON.stringify(config))
  }, [config])

  // Update ratings arrays when number of completions changes
  useEffect(() => {
    setOriginalRatings(prev => {
      const newArray = Array(config.completions).fill(0)
      return prev.slice(0, config.completions).concat(newArray.slice(prev.length))
    })
    setSuggestedRatings(prev => {
      const newArray = Array(config.completions).fill(0)
      return prev.slice(0, config.completions).concat(newArray.slice(prev.length))
    })
  }, [config.completions])

  const comparisions = (ratings: number[]) => {
    const result: string[] = [];
    for (let i = 0; i < ratings.length - 1; i++) {
      for (let j = i + 1; j < ratings.length; j++) {
        if (ratings[i] === ratings[j]) {
          result.push(`${i}=${j}`);
        } else if (ratings[i] < ratings[j]) {
          result.push(`${i}<${j}`);
        } else {
          result.push(`${i}>${j}`);
        }
      }
    }
    return result
  }

  const relativeRatingsAgreement = () => {
    const originalComparision = comparisions(originalRatings)
    const suggestedComparision = comparisions(suggestedRatings)

    if (originalComparision.length !== suggestedComparision.length) {
      throw new Error("Comparisons do not have the same number of comparisons")
    }

    let numInCommon = 0;
    for (let i = 0; i < originalComparision.length; i++) {
      if (suggestedComparision.includes(originalComparision[i])) {
        numInCommon++;
      } else if (originalComparision[i].includes("=")) {
        numInCommon += 0.5;
      } else if (suggestedComparision.includes(originalComparision[i].replace(/[<>]/, "="))) {
        numInCommon += 0.5;
      }
    }
    console.log(originalComparision.length, originalComparision)
    console.log(suggestedComparision.length, suggestedComparision)
    console.log(numInCommon)

    const agreementRate = numInCommon / originalComparision.length;
    let relativeRatings = 1 + (agreementRate * 6)

    if (config.penalizeMismatchedSeven) {
      for (let i = 0; i < originalRatings.length; i++) {
        if ((originalRatings[i] === 7 && suggestedRatings[i] != 7) || (originalRatings[i] != 7 && suggestedRatings[i] === 7)) {
          relativeRatings -= 0.3
        }
      }
    }
    return relativeRatings
  }

  // Calculate agreement scores
  const calculateAgreement = () => {
    const relativeAgreement = relativeRatingsAgreement()

    const scores: number[] = [relativeAgreement]

    if (config.hasIdealCompletion) {
      scores.push(idealCompletion)
    }
    if (config.hasGradingRubrics) {
      scores.push(gradingRubrics)
    }

    const score = Math.pow( scores.map(Math.sqrt).reduce((sum, num) => sum + num, 0) ,2)
    const maxScore = Math.pow(Math.sqrt(7)*scores.length, 2)

    const overallAgreement = 7 * score / maxScore

    return {
      relative: relativeAgreement.toFixed(2),
      overall: overallAgreement.toFixed(2),
    }
  }

  const scores = calculateAgreement()

  // Validate input to ensure it's an integer between 1 and 7
  const validateRating = (value: string): number => {
    const intValue = parseInt(value.trim().slice(-1))
    if (isNaN(intValue)) return 1
    return Math.max(1, Math.min(7, intValue))
  }

  const updateConfig = (key: keyof Config, value: number | boolean) => {
    setConfig(prev => ({ ...prev, [key]: value }))
  }

  // Generate placeholder letters (A, B, C, D, ...)
  const getPlaceholderLetter = (index: number) => {
    return String.fromCharCode(65 + index)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Rating Agreement Calculator</h1>

      {/* Configuration Section */}
      <Card className="p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="completions">Number of completions</Label>
            <Input
              id="completions"
              type="number"
              min="1"
              value={config.completions}
              onChange={(e) => updateConfig('completions', Math.max(1, parseInt(e.target.value) || 1))}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="idealCompletion"
              checked={config.hasIdealCompletion}
              onCheckedChange={(checked) => updateConfig('hasIdealCompletion', checked === true)}
            />
            <Label htmlFor="idealCompletion">Has ideal completion</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="gradingRubrics"
              checked={config.hasGradingRubrics}
              onCheckedChange={(checked) => updateConfig('hasGradingRubrics', checked === true)}
            />
            <Label htmlFor="gradingRubrics">Has grading rubrics</Label>
          </div>
          <div className="flex items-center space-x-2"></div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="penalizeMismatchedSeven"
              checked={config.penalizeMismatchedSeven}
              onCheckedChange={(checked) => updateConfig('penalizeMismatchedSeven', checked === true)}
            />
            <Label htmlFor="penalizeMismatchedSeven">Penalty for Mismatched 7 Ratings</Label>
          </div>
        </div>
      </Card>

      {/* Calculator Section */}
      <Card className="p-6 space-y-6">
        {/* Original Ratings */}
        <div className="space-y-2">
          <div className="grid grid-cols-[120px_1fr] gap-4">
            <Label className="text-lg">Original Rating</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {originalRatings.map((rating, idx) => (
                <Input
                  key={`original-${idx}`}
                  type="number"
                  min="1"
                  max="7"
                  value={rating || ''}
                  onChange={(e) => {
                    const newRatings = [...originalRatings]
                    newRatings[idx] = validateRating(e.target.value)
                    setOriginalRatings(newRatings)
                  }}
                  className="text-center"
                  placeholder={getPlaceholderLetter(idx)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Suggested Ratings */}
        <div className="space-y-2">
          <div className="grid grid-cols-[120px_1fr] gap-4">
            <Label className="text-lg">Suggested Rating</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {suggestedRatings.map((rating, idx) => (
                <Input
                  key={`suggested-${idx}`}
                  type="number"
                  min="1"
                  max="7"
                  value={rating || ''}
                  onChange={(e) => {
                    const newRatings = [...suggestedRatings]
                    newRatings[idx] = validateRating(e.target.value)
                    setSuggestedRatings(newRatings)
                  }}
                  className="text-center"
                  placeholder={getPlaceholderLetter(idx)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0">
          {config.hasIdealCompletion && (
            <div className="space-y-2">
              <Label className="text-lg">Ideal completion</Label>
              <Input
                value={idealCompletion}
                onChange={(e) => setIdealCompletion(validateRating(e.target.value))}
                placeholder="Enter Ideal Completion rating"
                type="number"
                min="1"
                max="7"
              />
            </div>
          )}
          {config.hasGradingRubrics && (
            <div className="space-y-2">
              <Label className="text-lg">Grading rubrics</Label>
              <Input
                value={gradingRubrics}
                onChange={(e) => setGradingRubrics(validateRating(e.target.value))}
                placeholder="Enter grading rubrics rating"
                type="number"
                min="1"
                max="7"
              />
            </div>
          )}
        </div>


        {/* Results Section */}
        <div className="mt-6 bg-blue-50 p-4 rounded-lg space-y-2">
          <p className="text-blue-900">Relative Ratings Agreement(1-7): {scores.relative}</p>
          <p className="text-blue-900">Overall(1-7): {scores.overall}</p>
        </div>
      </Card>
    </div>
  )
}

