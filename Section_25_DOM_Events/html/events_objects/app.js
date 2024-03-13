document.querySelector("button").addEventListener('click',function (event){
    //alert("Click!!");
    console.log(event);
});;
//const input = document.querySelector("input");
window.addEventListener('keydown',function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNORED!");
    }
});

/*document.querySelector("input").addEventListener('keyup',function(){
    console.log("KEY UP!");
});*/