const numberButtons = document.querySelectorAll('.button--numbers');
const calculator = document.querySelector('.form')
const inputNumber = document.getElementById('input--result');
const inputNumberTwo = document.getElementById('input--result--two');

const calculate = (n1, operator, n2) => {
    let result = ''

    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
    }

    return result
}

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', (numberButtonClick))
});

function numberButtonClick(e) {
    const button = e.target;
    const action = button.dataset.action;
    const keyContent = button.textContent;
    const displayedNum = inputNumber.textContent;
    const displayedNumTwo = inputNumberTwo.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action) {
        if (displayedNum === '0' || previousKeyType === 'operator') {
            inputNumberTwo.textContent = displayedNumTwo + keyContent;
        } else {
            inputNumber.textContent = displayedNum + keyContent;
        }
    }

    if (action === 'decimal' && !displayedNum.includes('.') && !displayedNumTwo) {
        inputNumber.textContent = displayedNum + '.';
    } else if (action === 'decimal' && !displayedNumTwo.includes('.')) {
        inputNumberTwo.textContent = displayedNumTwo + '.';
    }

    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'divide' ||
        action === 'multiply'
    ) {
        button.classList.add('button--numbers--active');
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;
    }

    if (action === 'delete' && displayedNum && !displayedNumTwo) {
        inputNumber.textContent = inputNumber.textContent.slice(0, -1);
    } else if (action === 'delete' && displayedNumTwo) {
        inputNumberTwo.textContent = inputNumberTwo.textContent.slice(0, -1);
    }

    if (action === 'clear') {
        inputNumber.textContent = '';
        inputNumberTwo.textContent = '';
        calculator.dataset.previousKeyType = 'clear'
    }

    if (action === 'calculate') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const operatorTwo = calculator.dataset.previousKeyType;
        const secondValue = displayedNumTwo;
        inputNumberTwo.textContent = '';
        inputNumber.textContent = calculate(firstValue, operator, secondValue);

        Array.from(button.parentNode.children)
            .forEach(k => k.classList.remove('button--numbers--active'));
    }

    if (isNaN(inputNumber.textContent) || inputNumber.textContent === "Infinity") {
        inputNumber.textContent = '';
        inputNumberTwo.textContent = '';
        calculator.dataset.previousKeyType = 'clear'
    }

    if (inputNumber.textContent.length > 9 || inputNumberTwo.textContent.length) {
        inputNumber.textContent = inputNumber.textContent.slice(0, 9);
        inputNumberTwo.textContent = inputNumberTwo.textContent.slice(0, 9);
    }
}
