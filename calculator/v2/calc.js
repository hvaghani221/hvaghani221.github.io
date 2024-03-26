function expandValueComparison(valueString) {
    // Use a regular expression to find all uppercase letters and their corresponding values in the string
    // (e.g., ["A=5", "B=6", "C=7", "D=5"])
    var itemValues = valueString.match(/[A-Z]=\d+/g);

    // Create an object to store the values for each item
    var values = {};
    // Loop through the itemValues array and add each item and its value to the object
    for (var i = 0; i < itemValues.length; i++) {
        var item = itemValues[i].charAt(0);
        var value = parseInt(itemValues[i].slice(2));
        // Check if the item already exists in the values object (i.e., if a value has already been assigned to this item)
        if (values.hasOwnProperty(item)) {
            throw new Error("Value assigned to the same item more than once");
        }
        values[item] = value;
    }
    //return JSON.stringify(values);
    // Get the items from the values object and sort them in alphabetical order
    var items = Object.keys(values).sort();

    var relationships = [];
    // Loop through all pairs of items in alphabetical order and compare their values
    for (var i = 0; i < items.length; i++) {
        for (var j = i + 1; j < items.length; j++) {
            // If the values are equal, add the relationship to the array (e.g., "A=D")
            if (values[items[i]] == values[items[j]]) {
                relationships.push(items[i] + "=" + items[j]);
                // If the value of the first item is less than the value of the second item, add the relationship to the array (e.g., "A<B")
            } else if (values[items[i]] < values[items[j]]) {
                relationships.push(items[i] + "<" + items[j]);
                // Otherwise, the relationship is ">" (e.g., "A>B")
            } else {
                relationships.push(items[i] + ">" + items[j]);
            }
        }
    }
    return relationships;
}

// Function to compute the percentage of comparisons that two cells have in common
function AGREEMENT_RATE(cell1, cell2) {
    var relationships1 = expandValueComparison(cell1);
    var relationships2 = expandValueComparison(cell2);

    // Check if the two cells have the same number of comparisons
    if (relationships1.length != relationships2.length) {
        throw new Error("Cells do not have the same number of comparisons");
    }

    var numInCommon = 0;
    // Loop through the comparisons in the first cell and check if they are also present in the second cell
    for (var i = 0; i < relationships1.length; i++) {
        if (relationships2.includes(relationships1[i])) {
            numInCommon++;
        } else if (relationships1[i].indexOf("=") !== -1) {
            numInCommon += 0.5;
        } else if (relationships2.includes(relationships1[i].replace(/[<>]/, "="))) {
            numInCommon += 0.5;
        }
    }
    return numInCommon / relationships1.length;
}

function calculateAgreement() {
    const trainer = {
        A: parseInt(document.getElementById('trainerA').value) || 0,
        B: parseInt(document.getElementById('trainerB').value) || 0,
        C: parseInt(document.getElementById('trainerC').value) || 0,
        D: parseInt(document.getElementById('trainerD').value) || 0
    };

    const reviewer = {
        A: parseInt(document.getElementById('reviewerA').value) || 0,
        B: parseInt(document.getElementById('reviewerB').value) || 0,
        C: parseInt(document.getElementById('reviewerC').value) || 0,
        D: parseInt(document.getElementById('reviewerD').value) || 0
    };

    const cell1 = `A=${trainer.A} B=${trainer.B} C=${trainer.C} D=${trainer.D}`;
    const cell2 = `A=${reviewer.A} B=${reviewer.B} C=${reviewer.C} D=${reviewer.D}`;

    const rating = AGREEMENT_RATE(cell1, cell2);
    // Calculate agreement rate
    const agreementRate = rating * 100;
    document.getElementById('results').innerText = 'Agreement Rate: ' + agreementRate.toFixed(2) + '%';

    // Calculate alignment (1-7 scale) based on agreement rate
    const alignment = agreementRate * (7 - 1) / 100 + 1;
    document.getElementById('alignment').innerText = 'Alignment(1-7): ' + alignment.toFixed(2);
}
