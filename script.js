let playerScore = 0
let computerScore = 0
let winner = ''


// GAME
function roundWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        winner = 'tie'
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection ===  'ROCK') {
        playerScore++;
        winner = 'player';
    } else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS' || computerSelection === 'SCISSORS' && playerSelection === 'PAPER' || computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        computerScore++;
        winner = 'computer';
    }
    updateScoreMsg(winner, playerSelection, computerSelection)
}

function randomChoice() {
    let randomNum = Math.floor(Math.random() * 3)
    switch (randomNum) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

function gameOver() {
    return (playerScore === 5 || computerScore === 5)
}



// DATA
const choice = document.getElementById("choice")
const pointsMsg = document.getElementById("points-msg")
const playerScore2 = document.getElementById("playerScore")
const computerScore2 = document.getElementById("computerScore")
const playerSign = document.getElementById("p-sign")
const computerSign = document.getElementById("c-sign")
const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorsBtn = document.getElementById("scissorsBtn")
const endModal = document.getElementById("endModal")
const endMsg = document.getElementById("endMsg")
const overlay = document.getElementById("overlay")
const restartBtn = document.getElementById("restartBtn")

rockBtn.addEventListener("click", () => hClick('ROCK'))
paperBtn.addEventListener("click", () => hClick('PAPER'))
scissorsBtn.addEventListener("click", () => hClick("SCISSORS"))
overlay.addEventListener("click", closeEndgameModal)
restartBtn.addEventListener("click", restartGame)

function hClick(playerSelection) {
    if(gameOver()) {
        openEndModal()
        return
    }

    const computerSelection = randomChoice()
    roundWinner(playerSelection, computerSelection)
    choicesUpdate(playerSelection, computerSelection)
    updateScore()

    if(gameOver()) {
    openEndModal()
    setFinalMessage()
    }
}

function choicesUpdate(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'ROCK':
            playerSign.textContent = "✊🏾"
            break
        case 'PAPER':
            playerSign.textContent = "✋🏾"
            break
        case 'SCISSORS':
            playerSign.textContent = "✌🏾"
            break
    }

    switch(computerSelection) {
        case 'ROCK':
            computerSign.textContent = "✊🏾"
            break
        case 'PAPER':
            computerSign.textContent = "✋🏾"
            break
        case 'SCISSORS':
            computerSign.textContent = "✌🏾"
            break
    }
}

function updateScore() {
    if (winner === 'tie') {
        choice.textContent = "It's a tie"
    } else if (winner === 'player') {
        choice.textContent = "You won!"
    } else if (winner === 'computer') {
        choice.textContent = "You lost!"
    }
    playerScore2.textContent = `Player: ${playerScore}`
    computerScore2.textContent = `Computer: ${computerScore}`
}

function updateScoreMsg(winner, playerSelection, computerSelection) {
    if (winner === 'tie') {
        pointsMsg.textContent = `${playerSelection} ties with ${computerSelection}`
    } else if (winner === 'player') {
        pointsMsg.textContent = `${playerSelection} wins over ${computerSelection}`
        return
    } else if (winner === 'computer') {
        pointsMsg.textContent = `${playerSelection} loses over ${computerSelection}`
        return
    }
}

function capitalize(string) {
    return string.toString().charAt(0).toUpperCase() + string.toString().slice(1).toLowerCase()
}

function openEndModal() {
    endModal.classList.add('active') // adds the class styled in the css file
    overlay.classList.add('active')
}

function closeEndgameModal() {
    endModal.classList.remove('active') // removes the class styled in the css file
    overlay.classList.remove('active')
  }

function setFinalMessage() {
    return playerScore > computerScore
    ? (endMsg.textContent = 'You won!')
    : (endMsg.textContent = 'You lost...') 
}

function restartGame() {
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    choice.textContent = 'Make your choice: '
    pointsMsg.textContent = 'First to make 5 points wins the game!'
    playerScore = 0
    computerScore = 0
    playerScore2.textContent = "Player: 0"
    computerScore2.textContent = "Computer: 0"
    endModal.classList.remove('active')
    overlay.classList.remove('active')
}


