let fizzBuzzResult = document.querySelector('.fizzBuzzOutput');
const fizzBuzzButton = document.querySelector('.fizzBuzzButton');

function currNumberResult (numberToGetResult) {
    let currentResult;
    if ((parseInt(numberToGetResult) % 5 === 0) & (parseInt(numberToGetResult) % 3 === 0)) {
        currentResult = 'fizzbuzz';
    } else if ((parseInt(numberToGetResult) % 3 === 0)) {
        currentResult = 'fizz';
    } else if ((parseInt(numberToGetResult) % 5 === 0)) {
        currentResult = 'buzz';
    } else {
        currentResult = numberToGetResult;
    }

    return currentResult
}

function fizzBuzz () {
    inputNumber = document.querySelector('.fizzBuzzInput').value;
    for (currNumber=1; currNumber <= inputNumber; currNumber++) {
        fizzBuzzResult.innerHTML = fizzBuzzResult.textContent + currNumberResult(currNumber) + ' ';
    }

    return fizzBuzzResult
}

fizzBuzzButton.addEventListener('click', fizzBuzz)