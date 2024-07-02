const log = console.log;

const heightLabel = document.getElementById("height-label");
const weightLabel = document.getElementById("weight-label");

// Didn't include functionality for suggested BMI as there is so
// many combos based off of weight & height
// (don't have much time rn)

// Set system labels based on chosen system type
document.getElementById("metric-radio").addEventListener("click", () => {
    heightLabel.innerText = "cm"
    weightLabel.innerText = "kg"
})

document.getElementById("us-radio").addEventListener("click", () => {
    heightLabel.innerText = "in"
    weightLabel.innerText = "lbs"
})

// Makes sure both fields are filled with valid info
function requiredInfo() {
    const height = document.getElementById("height-input").value;
    const weight = document.getElementById("weight-input").value;

    if (height && height > 0 
        && weight && weight > 0) {
        return true;
    }
}

function calcBmi(system) {
    if (system === "metric") {
        const height = parseFloat(document.getElementById("height-input").value);
        const weight = parseFloat(document.getElementById("weight-input").value);

        const heightMeters = height / 100;
        const bmi = weight / (heightMeters * heightMeters)

        return bmi;
    } else if (system === "us") {
        const height = parseFloat(document.getElementById("height-input").value);
        const weight = parseFloat(document.getElementById("weight-input").value);

        const bmi = (weight / (height * height)) * 703

        return bmi;
    }
}

function calc() {
    const bmiResultsLabel = document.getElementById("bmi-results");

    requiredInfo()

    if (document.getElementById("metric-radio").checked) {
        // Metric System
        if (requiredInfo) {
            const bmi = calcBmi("metric").toFixed(1);
            bmiResultsLabel.innerText = bmi;
        }
    } else if (document.getElementById("us-radio").checked) {
        // US System
        if (requiredInfo) {
            const bmi = calcBmi("us").toFixed(1);
            bmiResultsLabel.innerText = bmi;
        }
    }
}

document.getElementById("height-input").addEventListener("focusout", e => {
    calc();
})

document.getElementById("weight-input").addEventListener("focusout", e => {
    calc();
})