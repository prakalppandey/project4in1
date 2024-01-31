# Project 1st of 4
## project Link
[click here](https://stackblitz.com/~/github.com/prakalppandey/project4in1)
# Solution code 

## Javascript
```javascript
// random number generate -----------------------------
let randomnum = parseInt(Math.random()  * 100 + 1)
// ----------------------------------------------------------
// Select all elements--------------------------------------
const submit =  document.querySelector("#submit")
const takenumber = document.querySelector("#takenum")
const guessdone = document.querySelector(".guessdone")
const guessleft = document.querySelector(".guessleft")
const startover = document.querySelector(".box4")
const mainmessageprint = document.querySelector(".box1")
const p = document.createElement('p');

let prevguess =[]
let numberofguess = 1
let playGame = true
// ----------------------------------------------------------
// Start of GAME (Check if user is playing the game)-----
if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess = parseInt(takenumber.value)
       console.log(guess);
       validateGuess(guess) 
    })
}
// -------------------------------------------------------
// Check weather Number is b/w 1 to 100-------------------

function validateGuess(guess){
   if(isNaN(guess)){
    alert('Please Enter a valid number')
   } else if (guess < 1){
    alert('Please Enter a valid number')
   } else if(guess > 100){
    alert('Please Enter a valid number')
   } else {
    prevguess.push(guess)
    if(numberofguess ===10 ){
        displayGuess(guess)
        displayMessage(`Last Chance`)
    }
    else if (numberofguess === 11){
        displayGuess(guess)
        displayMessage(`GAME OVER , YOU LOST . The random number was ${randomnum}`)
        endGame()
    } else{
        displayGuess(guess)
        checkGuess(guess)
    }
   }
}
// -------------------------------------------------------------------
// -Check weather Number is equal to random number-------------------
function checkGuess(guess){
 if(guess === randomnum){
    displayMessage(`YES YOU WON `)
    endGame()
 }
 else if(guess < randomnum){
    displayMessage(`The number is TOOOOOOOOO..... LOW `)
 }
 else if(guess > randomnum){
    displayMessage(`The number is TOOOOOOOOO......High `)
 } 
 
}
// -------------------------------------------------------------------
// Display the Guess-------------------


function displayGuess(guess){
    // Clean UP the value 
    takenumber.value = ''
    guessdone.innerHTML += `${guess} `
    numberofguess++
    guessleft.innerHTML = `${11 - numberofguess}`
}
// -------------------------------------------------------------------
// Display the Guess-------------------------------
function displayMessage(message){
    mainmessageprint.innerHTML = `<h5>${message}</h5>`
}
// ------------------------------------------------------------
 

// ------------------------------------------------------------
 
// END of new game------------------------------------------
function endGame(){
takenumber.value = ''
takenumber.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h2 id="newgame" style="background-color: #04AA6D; 
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: large; ">NEW game</h2>`;
startover.appendChild(p)
playGame = false;
newGame()
}

// Start of new game------------------------------------------
function newGame(){
const newGamebutt=document.querySelector('#newgame')
newGamebutt.addEventListener('click',function(e){
    randomnum = parseInt(Math.random()  * 100 + 1)
    prevguess =[]
    numberofguess = 1
    guessdone.innerHTML =''
    guessleft.innerHTML = `${11 - numberofguess}`
    takenumber.removeAttribute('disabled')
    startover.removeChild(p)
    displayMessage('Lets go again')
    playGame=true
})
}

```