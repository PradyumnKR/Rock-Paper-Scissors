let btnplayagain = document.querySelector("#playAgain");
let choicerock = document.querySelector("#rock");
let choicepaper = document.querySelector("#paper");
let choicescissors = document.querySelector("#scissors");
let userchoice = "";
let cmpchoice = "";
let resultcontainer = document.querySelector(".result");
let resulttext = document.querySelector("#resultText");
let secondcontainer = document.querySelector(".secondContainer");
let mainimage = document.querySelector(".mainImage");
let resultmaindiv = document.querySelector(".resultMainDiv");
let userCHOICE = document.querySelector("#userCHOICE");
let compCHOICE = document.querySelector("#compCHOICE");

const compchoices = ["rock", "paper", "scissors"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let compchoice = getRandomInt(3);
console.log(compchoice);

function init() {
    secondcontainer.classList.remove("hide");
    mainimage.classList.remove("hide");
    resultcontainer.classList.add("hide");
    resultmaindiv.classList.add("hide");
    compchoice = getRandomInt(3);
}

function choosingwinner(uscho, cmpcho) {

    if (uscho === "rock") {
        if (cmpcho === "rock") {
            compCHOICE.src = "assets/fist.png";
            resulttext.innerText = "Its a Draw!!";
        } else if (cmpcho === "scissors") {
            compCHOICE.src = "assets/peace.png";
            resulttext.innerText = "Congratulations! You won!!";
        }
        else {
            compCHOICE.src = "assets/hand-palm.png";
            resulttext.innerText = "Oh no! You lost! Try again?";
        }
    }
    else if (uscho === "paper") {
        if (cmpcho === "rock") {
            compCHOICE.src = "assets/fist.png";
            resulttext.innerText = "Congratulations! You won!!";
        } else if (cmpcho === "scissors") {
            compCHOICE.src = "assets/peace.png";
            resulttext.innerText = "Oh no! You lost! Try again?";
        }
        else {
            compCHOICE.src = "assets/hand-palm.png";
            resulttext.innerText = "Its a Draw!!";
        }
    }
    else {
        if (cmpcho === "rock") {
            compCHOICE.src = "assets/fist.png";
            resulttext.innerText = "Oh no! You lost! Try again?";
        } else if (cmpcho === "scissors") {
            compCHOICE.src = "assets/peace.png";
            resulttext.innerText = "Its a Draw!!";
        }
        else {
            compCHOICE.src = "assets/hand-palm.png";
            resulttext.innerText = "Congratulations! You won!!";
        }
    }
}

choicerock.addEventListener("click", () => {
    userchoice = "rock";
    cmpchoice = compchoices[compchoice];
    console.log(cmpchoice);
    userCHOICE.src = "assets/fist.png";

    secondcontainer.classList.add("hide");
    mainimage.classList.add("hide");
    resultcontainer.classList.remove("hide");
    resultmaindiv.classList.remove("hide");
    choosingwinner(userchoice, cmpchoice);
})

choicepaper.addEventListener("click", () => {
    userchoice = "paper";
    cmpchoice = compchoices[compchoice];
    userCHOICE.src = "assets/hand-palm.png";

    secondcontainer.classList.add("hide");
    mainimage.classList.add("hide");
    resultcontainer.classList.remove("hide");
    resultmaindiv.classList.remove("hide");
    choosingwinner(userchoice, cmpchoice);
})

choicescissors.addEventListener("click", () => {
    userchoice = "scissors";
    cmpchoice = compchoices[compchoice];
    userCHOICE.src = "assets/peace.png";

    secondcontainer.classList.add("hide");
    mainimage.classList.add("hide");
    resultcontainer.classList.remove("hide");
    resultmaindiv.classList.remove("hide");
    choosingwinner(userchoice, cmpchoice);
})

btnplayagain.addEventListener("click", () => {
    init();
})