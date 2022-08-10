const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

/*
const
Constants are block-scoped, much like variables declared using the let keyword. 
The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), 
and it can't be redeclared (i.e. through a variable declaration). 
However, if a constant is an object or array its properties or items can be updated or removed.


document.getElementById(parametro):
The Document method getElementById() returns an Element object representing the element 
whose id property matches the specified string. 
Since element IDs are required to be unique if specified, they're a useful way to get access 
to a specific element quickly.

document.querySelectorAll(parametro): 
The Document method querySelectorAll() returns a static (not live) NodeList 
representing a list of the document's elements that match the specified group of selectors.
*/

let userChoice
let computerChoice
let result

/*
let
The let statement declares a block-scoped local variable, optionally initializing it to a value.
*/

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    /*
    Array.prototype.forEach()
    The forEach() method executes a provided function once for each array element.

    EventTarget.addEventListener
    The addEventListener() method of the EventTarget interface sets up a function that will be called 
    whenever the specified event is delivered to the target.
    */
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice
    /*
    Element.innerHTML
    The Element property innerHTML gets or sets the HTML or XML markup contained within the element.
    */ 
    generateComputerChoice()
    getResult()
}))

/*
=> / Arroy Function
An arrow function expression is a compact alternative to a traditional function expression, 
but is limited and can't be used in all situations.
*/

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1 //or you can use possibleChoices.length

    /*
    Math.random()
    The Math.random() function returns a floating-point, pseudo-random number 
    in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately 
    uniform distribution over that range — which you can then scale to your desired range.
    
    Math.floor()
    The Math.floor() function returns the largest integer less than or equal to a given number.
    */

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'scissors'
    }
    if(randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
    /*
    Strict Equality (===)
    The strict equality operator (===) checks whether its two operands are equal, 
    returning a Boolean result. 
    Unlike the equality operator (==), the strict equality operator always considers 
    operands of different types to be different.
    */
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'itś a Draw!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You win!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You lost!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You win!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You lost!'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You win!'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'You lost!'
    }
    resultDisplay.innerHTML = result
}