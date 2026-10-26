(function(){

document.getElementById("myHeading").innerHTML = "James' Website";
document.querySelector("li").setAttribute("class", "currentPage");
document.querySelector("nav ul li a").setAttribute("href", "https://www.google.com");
const myBtn = document.getElementById("myTestBtn");
myBtn.addEventListener('click', (ev) => {
    console.dir(ev);

})

let redBtn = document.querySelector(".red");
redBtn.addEventListener('click', function(){
    document.body.setAttribute("class", "redBack");
})

let greenBtn = document.querySelector(".green");
greenBtn.addEventListener('click', function(){
    document.body.setAttribute("class", "greenBack");
})

let blueBtn = document.querySelector(".blue");
blueBtn.addEventListener('click', function(){
    document.body.setAttribute("class", "blueBack");
})

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener('click', function(){
    document.body.setAttribute("class", "defaultBack");
})

})();