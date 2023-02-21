/*TODO: SCRIPT
1 - funçao para comparar playerSelection com computerSelection, increase their score (playerScore++) and roundWinner = player

2 - func getRandomChoice let randomNumber = Math.floor(Math.random() * 3) e depois usar switch

3 - func game over if playerscore ou computer score === 5

4 - puxar todos os botoes etc do html () - scoreInfo, scoreMessage, playerScore, computerScore, playerSign, computerSign, rockBtn, paperBtn, scissorsBtn, endGameModal, endgameMsg, overlay, restartBtn

5 - 3 botoes (r, p, s) e adicionar handleClick ("rock ou paper ou scissors"), botao de restart (todos os scores para 0, trocar os textos e voltar os pontos de interrogaçao)

6 - a func handleClick(playerSelection) if isGameOver() da openEndGameModal()

7 - const computerSelection = func getRandomChoice, puxar a func do passo 1(playerSelection, computerSelection), a func updateChoices(playerSelection, computerSelection) que leva switch (playerSelection) caso Rock (tal emoji) etc..., por fim leva a updateScore()

8 - if isGameOver() openEndGameModal e setFinalMessage() que da return caso o score seja maior ou menor, you won, you lost

9 - criar a funct updateChoices(passo 7)

10 - criar a func updateScore() if roundWinner === 'tie' { scoreInfo.textContent = "it's a tie"} e por ai adiante (you won / you lost) depois leva playerScorePara.textContent = `Player: ${playerScore} e mostra o computer em baixo da mesma maneira

11 - func updteScoreMsg(winner, playerSelection, computerSelection) if winner === 'player' {
    scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${computerSelection.toLowerCase()} / if winner === computer mesma coisa
    return
    se nenhum dos dois, mesma coisa mas mostra o player ties with computer

12- func capitalize(string) return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

13 - func endGameModal() { o modal leva endgame msg e restart btn com play again
    endGameModal.classList.remove('active')
    overlay.classList.remove('active')

14 - func restartGame()
}


TODO: HTML

1 - main

2 - div scoreboard - score info h2(choose your weapon)

3 - h3 first 5 points

4 - mesmo que o de baixo 

5 - div scores-container - score-box - div computerSing - p computerScore

6 - div buttons - button rock btn div (emoji) - paperbtn - scissorsBtn

7 - fecha main e assim

8 - footer copyright

9 - div engameModal - p endgameMsg - button restartBtn

10 - div overlay
*/

let playerScore = 0
let computerScore = 0
let winner = ''

// GAME

// DATA

// FUNCS
