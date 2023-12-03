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
    const displayedNumTwo = inputNumberTwo.dataset.lastValue;
    const previousKeyType = calculator.dataset.previousKeyType;
    const number = button.closest('.button--numbers--container');
    // let numberValue = number.querySelector('.button--numbers');
    // let numberValueInt = parseInt(numberValue.textContent);
    // console.log(inputNumber);

    // inputNumber.value = numberValueInt;

    if (!action) {
        const lastValue = calculator.dataset.lastValue;
        // if (displayedNum === '0') {
        //     inputNumber.textContent = keyContent;
        // } else 
        if (displayedNum === '0' || previousKeyType === 'operator') {
            inputNumber.textContent = keyContent;
        } else {
            inputNumber.textContent = displayedNum + keyContent;
        }
        // if (displayedNum === '0' || previousKeyType === 'operator') {
        //     inputNumber.textContent = keyContent;
        // } else {
        //     inputNumber.textContent = displayedNum + keyContent;
        // }
    }

    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'divide'
    ) {
        button.classList.add('button--numbers--active');
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;
    }

    if (action === 'clear') {
        console.log('clear key!')
    }

    if (action === 'calculate') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;
        button.classList.add('button');
        console.log(firstValue);
        console.log(secondValue);
        inputNumber.textContent = calculate(firstValue, operator, secondValue)
    }

};
