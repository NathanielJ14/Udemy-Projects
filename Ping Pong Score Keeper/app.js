const playerOne = document.querySelector("#playerOne");
const playerTwo = document.querySelector("#playerTwo");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const reset = document.querySelector("#reset");
const roundsAmnt = document.querySelector("#round");

let winningScore = 3;
let isGameOver = false;

let p1Score = 0;
let p2Score = 0;

playerOne.addEventListener("click", function() {
    if(!isGameOver) {
        p1Score += 1;
        if(p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("winningColor");
            p2Display.classList.add("lossingColor");
        }
        p1Display.textContent = p1Score;
    }
})

playerTwo.addEventListener("click", function() {
    if(!isGameOver) {
        p2Score += 1;
        if(p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add("winningColor");
            p1Display.classList.add("lossingColor");
        }
        p2Display.textContent = p2Score;
    }
})

function resetBtn() {
        p1Score = 0;
        p2Score = 0;
        p2Display.textContent = p2Score;
        p1Display.textContent = p1Score;
        p1Display.classList.remove("winningColor");
        p1Display.classList.remove("lossingColor");
        p2Display.classList.remove("winningColor");
        p2Display.classList.remove("lossingColor");
        
        isGameOver = false;
}

reset.addEventListener("click", resetBtn);


roundsAmnt.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    resetBtn();
})