let numberToOutput = document.querySelector('#multipleBoxOutput');
const multipleBoxButton = document.querySelector('.multipleBoxButton');

function multiplyVariables() {
    let firstNumber = document.querySelector('#numOne').value;
    let secondNumber = document.querySelector('#numTwo').value;
    numberToOutput.textContent = parseInt(firstNumber) * parseInt(secondNumber);
    return numberToOutput
}

multipleBoxButton.addEventListener('click', multiplyVariables)