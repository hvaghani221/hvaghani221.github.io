function absWithGrace(value) {
  const abs = Math.abs(value);
  if(abs > 1) {
    return abs
  } else {
    return 0
  }
}

function sign(value) {
  if(value > 0) {
    return 1
  } else if(value < 0) {
    return -1
  } else {
    return 0
  }
}

function rmse(a, b) {
  return Math.sqrt(a*a + b*b)
}

function calculateAgreement() {
  const trainer = {
    A: parseInt(document.getElementById('trainerA').value) ,
    B: parseInt(document.getElementById('trainerB').value) ,
  };

  const reviewer = {
    A: parseInt(document.getElementById('reviewerA').value) ,
    B: parseInt(document.getElementById('reviewerB').value) ,
  };

  const trainerOrder = sign(trainer.A - trainer.B);
  const reviewerOrder = sign(reviewer.A - reviewer.B);

  let relativeOrderScore = 0;
  if (trainerOrder == reviewerOrder) {
    relativeOrderScore = 4
  } else if(trainerOrder === 0 || reviewerOrder === 0) {
    relativeOrderScore = 2
  }
  relativeOrderScore = relativeOrderScore * 3.5 / 4

  const abs_a = absWithGrace(trainer.A - reviewer.A)
  const abs_b = absWithGrace(trainer.B - reviewer.B)

  const abs_score = (1 - rmse(abs_a, abs_b)/rmse(6,6)) * 2.5
  let incorrect_7 = 1;

  if ([trainer.A, reviewer.A].filter(value => value === 7).length === 1) {
      incorrect_7 -= 0.5;
  }
  
  if ([trainer.B, reviewer.B].filter(value => value === 7).length === 1) {
      incorrect_7 -= 0.5;
  }

  const relativeRatings = 1 + (relativeOrderScore + abs_score + incorrect_7) * 6 / 7

  const rubrics = parseFloat(document.getElementById('rubrics').value) || 0.0;

  const score = Math.pow(Math.sqrt(relativeRatings) + Math.sqrt(rubrics), 2);
  const max_score = Math.pow(Math.sqrt(7) + Math.sqrt(7), 2);

  const alignment = (score / max_score) * 7;

  document.getElementById('rating').innerText = 'Relative Ratings Agreement(1-7): ' + relativeRatings.toFixed(2);
  document.getElementById('alignment').innerText = 'Overall(1-7): ' + alignment.toFixed(2);
}
