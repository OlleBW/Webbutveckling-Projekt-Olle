let click = 0;
let clickPower = 1;

let button = document.querySelector(".donut-btn");
let div = document.querySelector(".points");
button.addEventListener("click", handleClick);
function handleClick() {
  click++;
  div.innerHTML = click;
}

let button1 = document.querySelector(".autoClicker");
button1.addEventListener("click", donutTimer);
function donutTimer (){
  setInterval(giveAutoclick, 700);
}
function giveAutoclick() {
  click++;
  div.innerHTML = click;
}
