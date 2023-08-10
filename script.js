const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
const negativeButton = document.getElementById('negative');
const percentButton = document.getElementById('percent');
const buttons = document.getElementsByClassName('button');
const decimalButton = document.getElementById('decimal');
const equalsButton = document.getElementById('equals');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', updateDisplay)
}
clearButton.addEventListener('click', clearDisplay);
negativeButton.addEventListener('click', makeNegative);
percentButton.addEventListener('click', calculatePercent);
equalsButton.addEventListener('click', performCalculation);
decimalButton.addEventListener('click', addDecimal);

function updateDisplay(event) {
    const button = event.target;
    const value = button.textContent;
    display.value += value;
}

function clearDisplay(event) {
    display.value = '';
}

function makeNegative(event) {
    display.value *= -1;
}

function calculatePercent(event) {
    display.value /= 100;
}

function performCalculation(event) {
    const result = eval(display.value);
    display.value = result;
}

function addDecimal() {
    if (!display.value.includes('.')) {
        display.value += '.';
}
}