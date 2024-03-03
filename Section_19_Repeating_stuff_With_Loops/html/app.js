
let maximun = parseInt(prompt("Enter the maximum number!!"));
console.log(maximun);
while (!maximun){
    let maximun = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random()*maximun)+1;


let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum){
    
    if( guess === 'q')break;
    guess = parseInt(guess);
    if(guess > targetNum){
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    }else if (guess < targetNum){
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    }else {
        guess = prompt("Invalid guess. Please enter a numer o 'q' to quit");
    }
}
if( guess === 'q'){
    console.log("OK,YOU QUIT!!");
}else {
    console.log("CONGRATS YOU WIN!!");
    console.log(`You got it! It took you ${attempts} guesses`);
}
