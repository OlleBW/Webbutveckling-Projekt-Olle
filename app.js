let click = 0;
let clickPower = 1;
let clickPowerCost = 10;
let autoClickerCost = 10;

let button = document.querySelector(".donut-btn");
let div = document.querySelector(".points");
button.addEventListener("click", handleClick);
function handleClick() {
  click += clickPower;
  div.innerHTML = click;
}

let button1 = document.querySelector(".autoClicker");
button1.addEventListener("click", donutTimer);
function donutTimer() {
  if (click >= autoClickerCost) {
    click -= autoClickerCost;
    div.innerHTML = click;
    autoClickerCost = autoClickerCost*2;
    autoClicker.innerHTML = "Auto-Clicker (Cost: 10)"
    setInterval(giveAutoclick, 500);
  }
}
function giveAutoclick() {
  click++;
  div.innerHTML = click;
}

let button2 = document.querySelector(".clickPowerup");
button2.addEventListener("click", pwrUp);
function pwrUp() {
  if(click >= clickPowerCost){
    clickPower += 2;
    click -= clickPowerCost;
    div.innerHTML = click;
  }
}
