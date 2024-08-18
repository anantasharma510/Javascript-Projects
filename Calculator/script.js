// Reference to the display element where the numbers and result are shown
let display = document.getElementById('display');

// Stores the number currently being entered by the user
let currentInput = '';

// Stores the selected operator for the calculation (+, -, *, /)
let operator = null;

// Stores the number entered before the operator was pressed
let previousInput = '';

// Function to append a number to the current input and update the display
function appendNumber(number) {
    // Concatenate the pressed number to the current input
    currentInput += number;
    // Update the display with the new value of currentInput
    display.value = currentInput;
}

// Function to handle the operator input and prepare for calculation
function appendOperation(op) {
    // If there is no current input, exit the function
    if (currentInput === '') return;

    // If an operator was already selected, perform the calculation
    if (operator) {
        calculateResult();
    }

    // Store the selected operator
    operator = op;
    // Move the current input to previousInput
    previousInput = currentInput;
    // Clear currentInput for the next number input
    currentInput = '';
}

// Function to calculate the result based on the stored operator and inputs
function calculateResult() {
    // If there is no current or previous input, exit the function
    if (currentInput === '' || previousInput === '') return;

    let result;
    // Perform the calculation based on the stored operator
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }

    // Update the display with the result
    display.value = result;
    // Update currentInput to the result for further operations
    currentInput = result.toString();
    // Reset operator and previousInput for the next calculation
    operator = null;
    previousInput = '';
}

// Function to clear the display and reset all inputs and operator
function clearDisplay() {
    // Reset currentInput, operator, and previousInput
    currentInput = '';
    operator = null;
    previousInput = '';
    // Clear the display
    display.value = '';
}
