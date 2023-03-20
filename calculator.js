const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const output = document.getElementById("output");

for (let button of buttons) {
    button.addEventListener("click", handleButton);
}

let currentValue = '';
let operator = '';
let result = 0;
let displayValue = '' ;

function handleButton(event) {
    const buttonValue = event.target.value;
    if (!isNaN(buttonValue)) {
        currentValue += buttonValue;
        displayValue += buttonValue;
        display.value = displayValue;
    }
    else {
        switch (buttonValue) {
            case '+':
                if (currentValue !== '') {
                    operator = buttonValue;
                    displayValue += " " + operator + " ";
                    result = parseFloat(currentValue);
                    currentValue = '';
                    display.value = displayValue;
                }
            break;
            case '-':
                if (currentValue !== '') {
                    operator = buttonValue;
                    displayValue += " " + operator + " ";
                    result = parseFloat(currentValue);
                    currentValue = '';
                    display.value = displayValue;
                }
            break;
            case '*':
                if (currentValue !== '') {
                    operator = buttonValue;
                    displayValue += " " + operator + " ";
                    result = parseFloat(currentValue);
                    currentValue = '';
                    display.value = displayValue;
                }
            break;
            case '/':
                if (currentValue !== '') {
                    operator = buttonValue;
                    displayValue += " " + operator + " ";
                    result = parseFloat(currentValue);
                    currentValue = '';
                    display.value = displayValue;
                }
            break;
            case 'C':
                currentValue = '';
                displayValue = '';
                operator = '';
                result = 0;
                display.value = displayValue;
            break;
            case '=':
                if (currentValue !== ''){
                    calculate();
                }
                currentValue = result;
            break;
            default:
                output.textContent = "Invalid button" + buttonValue;

        }
    }
}
function calculate () {
    switch (operator) {
        case "+":
            result += parseFloat(currentValue);
        break;
        case "-":
            result -= parseFloat(currentValue);
        break;
        case "*":
            result *= parseFloat(currentValue);
        break;
        case "/":
            result /= parseFloat(currentValue);
        break;
        default:
            output.textContent = "Please enter a valid operator";
        break;
    }
    currentValue = '';
    operator = '';
    display.value = result; 
}