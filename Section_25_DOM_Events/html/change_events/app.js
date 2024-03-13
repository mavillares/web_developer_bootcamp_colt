const input = document.querySelector('input');
const h1 = document.querySelector('h1');

/*input.addEventListener('change',function (e) {
    console.log("dfdsfdfdsf");
});*/

input.addEventListener('input',function (e){
    //console.log('INPUT EVENT!');
    h1.innerText = input.value;
});