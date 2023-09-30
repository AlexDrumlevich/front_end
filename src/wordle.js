
const word = "apple"
const N_LETTERS = 5;
const ATTEMPTS = 6;
let attemptsLeft = ATTEMPTS
const letterElements = document.querySelectorAll(".letter-guess")
const resultLabel = document.querySelector(".result-label")
const wordGuessSection = document.querySelector(".word-guess")
const input = document.getElementById("input")

function onChange(event) {
    const wordGuess = event.target.value;

    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`)
    } else if(wordGuess == word) {
        gameOver(true)
    } else {
        const wordAr = Array.from(wordGuess);
        
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)
        
        const colors = wordAr.map((l, i) => {
            let res = 'red';
            if(word.includes(l)) {
                res = l == word[i] ? 'green' : 'yellow'
            }
            return res;
        })
        colors.forEach((c, i) =>
         letterElements[i].style.color=c)
    }

     
    if(--attemptsLeft == 0) {
        gameOver(false)
    }
   
}

function gameOver(victory) {
    resultLabel.classList.add("game-over")
    wordGuessSection.classList.add("game-over")
    if(victory) {
        resultLabel.innerHTML = `You won for ${ATTEMPTS - attemptsLeft + 1} attempts!!!`
    } else {
        resultLabel.innerHTML = "You lose!!!"  
    }
}

function restart() {
    attemptsLeft = ATTEMPTS
    resultLabel.innerHTML = ""
    resultLabel.classList.remove("game-over")
    letterElements.forEach(e => e.innerHTML = "")
    input.value = ""
    wordGuessSection.classList.remove("game-over")
}