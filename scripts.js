/****************** YOUR NAME: Yadwinder Singh

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

let modelName = "Model XYZ";
let duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
function recalculate() {
  // Getting  the span elements
  let costLabel = document.getElementById("calculated-cost");

  let newTotalCost;
  if (modelName === "Model XYZ") {
      newTotalCost = duration * 100;
  } else if (modelName === "Model CPRG") {
      newTotalCost = duration * 213;
  } else {
      // Handle other model names if needed
      newTotalCost = 0; // Default to 0
  }

  // Set the innerHTML of the calculated-cost element to the new total cost
  costLabel.innerHTML = newTotalCost.toFixed(2); // Round to 2 decimal places
}
/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE
let modelButton = document.getElementById("model-button");

function changeModel() {
    // Getting the model-text span element
    let modelTextSpan = document.getElementById("model-text");

    // Changing  the model name and updating  the span text
    if (modelName === "Model XYZ") {
        modelName = "Model CPRG";
        modelTextSpan.innerHTML = "Model CPRG";
    } else if (modelName === "Model CPRG") {
        modelName = "Model XYZ";
        modelTextSpan.innerHTML = "Model XYZ";
    }

    // Recalculateing the total cost
    recalculate();
}

// Attach the changeModel function to the model button click event
modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE
let durationButton = document.getElementById("duration-button");

function changeDuration() {
    // Getting  the duration-text span 
    let durationTextSpan = document.getElementById("duration-text");

    // Prompt(input) the user for a new duration
    let newDuration = parseInt(prompt("Enter new duration (in days):"));

    // Update the duration and the span text
    duration = newDuration;
    durationTextSpan.innerHTML = duration;

    // Recalculate the total cost
    recalculate();
}

// changeDuration function to the duration button click event
durationButton.addEventListener("click", changeDuration);
