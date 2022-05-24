
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

function computerPlay () {
    
  var possibleValue = [
      "Rock",
      "Paper",
      "Scissors"
    ]
    
  let randomPlay = possibleValue[Math.floor(Math.random() * possibleValue.length)];

  console.log(randomPlay)
  return randomPlay
};

function rps (userOption, computerOption) {
  jointPlay = userOption.toUpperCase() + '-' + computerOption.toUpperCase()
  console.log(jointPlay)
  result = playResultOption[jointPlay]
  return result
};

function game (playerOption) {
  console.log(playerOption)
  console.log(rps(userOption=playerOption, computerOption = computerPlay()))

};

const buttonContainer = document.getElementById('optionsContainer');

buttonContainer.addEventListener('click', (event) => {
  const eventIsButton = event.target.nodeName === 'BUTTON';

  if (eventIsButton) {
    game(event.target.innerText)
  }
})