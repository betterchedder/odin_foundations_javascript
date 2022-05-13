
let playResultOption = {
  'ROCK-PAPER': 'Lose',
  'ROCK-SCISSOR': 'Win',
  'ROCK-ROCK': 'Tie',
  'PAPER-ROCK': 'Win',
  'PAPER-SCISSOR': 'Lose',
  'PAPER-PAPER': 'Tie',
  'SCISSOR-ROCK': 'Lose',
  'SCISSOR-PAPER': 'Win',
  'SCISSOR-SCISSOR': 'Tie'
}

function computerPlay () {
    
  var possibleValue = [
      "Rock",
      "Paper",
      "Scissor"
    ]
    
  let randomPlay = possibleValue[Math.floor(Math.random() * possibleValue.length)];

  console.log(randomPlay)
  return randomPlay
}

function rps (userOption, computerOption) {
  jointPlay = userOption.toUpperCase() + '-' + computerOption.toUpperCase()
  console.log(jointPlay)
  result = playResultOption[jointPlay]
  return result
}

function game () {
  for (let round = 0; round <= 5; round++) {
    getUserInput = window.prompt('Rock, paper, or scissors?');
    console.log(rps(userOption=getUserInput, computerOption = computerPlay()))
  }
}

game()