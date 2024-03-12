
const button = document.querySelector("#v2");

button.onclick = function (){
    console.log("You click me!!");
    console.log("I hope it works!!");
}
function scream (){
    console.log("AHHHH");
    console.log("STOP TOUCHING ME");
}

button.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('You clicked the h1');
}
const btn3 = document.querySelector("#v3");
btn3.addEventListener('mouseup',function (){
    alert("CLICKED!");
});

function twist (){
    console.log("TWIST!");
}
function shout (){
    console.log("SHOUT!");
}
const tasButton = document.querySelector("#tas");
tasButton.addEventListener('click',twist, {once:true});
tasButton.addEventListener('click',shout);