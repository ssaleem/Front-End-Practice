
const inputPicker =  document.getElementById('inputPicker');

const playerImage =  document.getElementById('p-img');
const playerText =  document.getElementById('p-text');
const pScore = document.getElementById('p-score');

const computerImage =  document.getElementById('c-img');
const computerText =  document.getElementById('c-text');
const cScore = document.getElementById('c-score');

let playerInput;
let computerInput;
let computerScore = 0;
let playerScore = 0;
const resultText = document.getElementById('result');
const logicText = document.getElementById('logic');

const resetButton = document.getElementById('reset');

inputPicker.addEventListener('click',function(event){
  console.log(event.target.id);
  switch(event.target.id){
    case 'rock':
      console.log('its a rock');
      playerImage.src = "images/rock.png";
      playerText.textContent = "rock";
      playerInput = 0;
      break;
    case 'paper':
      console.log('its a paper');
      playerImage.src = "images/paper.png";
      playerText.textContent = "paper";
      playerInput = 2;
      break;
    case 'scissors':
      console.log('its a scissors');
      playerImage.src = "images/scissors.png";
      playerText.textContent = "scissors";
      playerInput = 1;
      break;
  }
  computerInput = getRandomInt(3);
  switch(computerInput){
    case 0:
      console.log('its a rock');
      computerImage.src = "images/rock.png";
      computerText.textContent = "rock";
      break;
    case 2:
      console.log('its a paper');
      computerImage.src = "images/paper.png";
      computerText.textContent = "paper";
      break;
    case 1:
      console.log('its a scissors');
      computerImage.src = "images/scissors.png";
      computerText.textContent = "scissors";
      break;
  }
  if(computerInput == playerInput){
    //tie
    resultText.textContent = "Its a tie!";
    logicText.textContent = "";
  }
  else {
    let diff = computerInput - playerInput;
    if(diff == 1 || diff == -2){
      //win
      resultText.textContent = "You Won!";
      logicText.textContent = playerText.textContent + " beats " + computerText.textContent;
      playerScore++;
      pScore.textContent = playerScore;
    }
    else{
      //lose
      resultText.textContent = "You Lost!";
      logicText.textContent = computerText.textContent + " beats " + playerText.textContent;
      computerScore++;
      cScore.textContent = computerScore;
    }

  }

});

resetButton.addEventListener('click', function(event){
  playerScore = 0;
  computerScore = 0;
  pScore.textContent = "-";
  cScore.textContent = "-";
  resultText.textContent = "";
  logicText.textContent = "";
  playerImage.src = "images/rock.png";
  playerText.textContent = "rock";
  computerImage.src = "images/rock.png";
  computerText.textContent = "rock";
})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}