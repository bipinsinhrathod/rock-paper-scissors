let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".img")

const msg = document.querySelector("#msg");

const uScore = document.querySelector("#youS");
const cScore = document.querySelector("#compS");

const genCompChoice = () =>{
    const options = ["rock" , "paper" , "scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = ()=>{
    msg.innerText = "Game Draw , Play again"
    msg.style.backgroundColor = "black"
}

const showWinner = (userWin , userChoice ,compChoice) =>{
    if(userWin) {
        userScore++;
        uScore.innerText = userScore;

        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} ` 
        msg.style.backgroundColor = "Green"
    }else {
        compScore++;
        cScore.innerText = compScore;
        msg.innerText = `You Lost .${compChoice} beats ${userChoice} `
        msg.style.backgroundColor = "Red"
    }
}

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true ;
        }else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner (userWin , userChoice ,compChoice);
    }
}

choices.forEach((img)=>{
    img.addEventListener("click",() =>{
        const userChoice = img.getAttribute("id");
        playGame(userChoice);

    })
})