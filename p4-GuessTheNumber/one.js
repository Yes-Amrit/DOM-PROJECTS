let randomNumber = parseINT(Math.random()*100 + 1)

const submit = document.getElementById('subt')
const userInput = document.getElementById('guessField')
const guessSlot= document.getElementById('guess')
const remaining = document.getElementsByClassName('lastResult')
const HiOrLow = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value) 
        console.log(guess);
        validateGuess(guess);

    });
}

function validateGuess(guess){
    if(isNan(guess)){
        alert("Please Enter a Valid Number")
    }
    else if(guess < 1){
        alert("Please enter a number which is greater than 0")
    }else if(guess >100){
        alert("Please enter a number which is lower than 101")
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game End. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("You guessed it right");
        endGame();
    }else if(guess < randomNumer - 15){
        displayMessage(`Number is TOOO low`);
    }else if(guess > randomNumer + 15){
        displayMessage(`Number is TOOO high`);
    }else if(guess < randomNumer && guess > randomNumber-15){
        displayMessage(`Your Guess is close to Number but a bit low`);
    }else if(guess > randomNumer && guess < randomNumber+15){
        displayMessage(`Your Guess is close to Number but a bit high`);
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `11-${numGuess} `

}

function displayMessage(message){
    HiOrLow.innerHTML = `<h2> ${message} </h2>`
}

function endGame(){
    userInput = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>` 
    startOver.appendChild(p)
    playGame = false
    newGame()

}

function newGame(){
    const newButton = document.getElementById('newGame');
    newButton.addEventListener('click',function(e){
        randomNumber = parseINT(Math.random()*100 + 1)
        prevGues = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled')
        startOver.appendChild('p')
        playGame = true;
    });

}