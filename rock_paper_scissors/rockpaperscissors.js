
let playResultOption = {
  'ROCK-PAPER': 'Lose',
  'ROCK-SCISSORS': 'Win',
  'ROCK-ROCK': 'Tie',
  'PAPER-ROCK': 'Win',
  'PAPER-SCISSORS': 'Lose',
  'PAPER-PAPER': 'Tie',
  'SCISSORS-ROCK': 'Lose',
  'SCISSORS-PAPER': 'Win',
  'SCISSORS-SCISSORS': 'Tie'
};

const computerPlay = function () {
    
  var possibleValue = [
      "Rock",
      "Paper",
      "Scissors"
    ]
    
  let randomPlay = possibleValue[Math.floor(Math.random() * possibleValue.length)];

  console.log(randomPlay)
  return randomPlay
};

const rps = function (userOption, computerOption) {
  jointPlay = userOption.toUpperCase() + '-' + computerOption.toUpperCase()
  console.log(jointPlay)
  result = playResultOption[jointPlay]
  return result
};

const displayResults = function (result) {
  resultContainer = document.querySelector('#resultContainer');
  const resultContainerOutput = document.createElement('div');
  resultContainerOutput.classList.add('resultOutput');

  resultContainerOutput.textContent = "You " + result;

  resultContainerOutput.style.cssText = 'display: flex; justify-content: center; font-size: 55px';
  
  resultContainer.append(resultContainerOutput);

}

const game = function (playerOption) {
  result = rps(userOption=playerOption, computerOption = computerPlay());
  displayResults(result);
};

const buttonContainer = document.getElementById('optionsContainer');

buttonContainer.addEventListener('click', (event) => {
  const eventIsButton = event.target.nodeName === 'BUTTON';

  if (eventIsButton) {
    game(event.target.innerText)
  }
})