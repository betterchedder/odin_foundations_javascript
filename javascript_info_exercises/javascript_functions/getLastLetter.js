let lastLetter = document.querySelector("#extractLastLetterOutput");
let getLastLetterInputButton = document.querySelector('.extractLastLetterBoxButton');

function getLastLetter() {
    inputText = document.querySelector(".extractLastLetterBox").value
    lastLetter.textContent = inputText.charAt(inputText.length - 1);
    return lastLetter.textContent
}

getLastLetterInputButton.addEventListener('click', getLastLetter);