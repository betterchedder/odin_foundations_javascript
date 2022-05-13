let fizzBuzzResult = document.querySelector('.fizzBuzzOutput');
const fizzBuzzButton = document.querySelector('.fizzBuzzButton');

function fizzBuzz () {
    let numberInput = document.querySelector('.fizzBuzzInput').value;
    console.log(numberInput)
    console.log(parseInt(numberInput) % 3)
    if ((parseInt(numberInput) % 5 === 0) & (parseInt(numberInput) % 3 === 0)) {
        fizzBuzzResult.textContent = 'fizzbuzz'
    } else if ((parseInt(numberInput) % 3 === 0)) {
        fizzBuzzResult.textContent = 'fizz'
    } else if ((parseInt(numberInput) % 5 === 0)) {
        fizzBuzzResult.textContent = 'buzz'
    } else {
        fizzBuzzResult.textContent = numberInput
    }

    return fizzBuzzResult
}

fizzBuzzButton.addEventListener('click', fizzBuzz)