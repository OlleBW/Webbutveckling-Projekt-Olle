let donuts = 0;
let clickPower = 1;
let clickPowerCost = 10;
let pwrBtn = document.querySelector(".clickPowerup")
let autoClickerCost = 10;
let autoBtn = document.querySelector(".autoClicker")

let button = document.querySelector(".donut-btn");
let div = document.querySelector(".points");
button.addEventListener("click", handleClick);
function handleClick() {
  donuts += clickPower;
  div.innerHTML = donuts;
}

let button1 = document.querySelector(".autoClicker");
button1.addEventListener("click", donutTimer);
function donutTimer() {
  if (donuts >= autoClickerCost) {
    donuts -= autoClickerCost;
    div.innerHTML = donuts;
    autoClickerCost = autoClickerCost*2;
    autoBtn.innerHTML = `Auto-Clicker (Cost: ${autoClickerCost})`
    setInterval(giveAutoclick, 500);
  }
}
function giveAutoclick() {
  donuts++;
  div.innerHTML = donuts;
}

let button2 = document.querySelector(".clickPowerup");
button2.addEventListener("click", pwrUp);
function pwrUp() {
  if(donuts >= clickPowerCost){
    clickPower += 2;
    donuts -= clickPowerCost;
    div.innerHTML = donuts;
    clickPowerCost = clickPowerCost*3;
    pwrBtn.innerHTML = `Click-Powerup (Cost: ${clickPowerCost})`
  }
}
