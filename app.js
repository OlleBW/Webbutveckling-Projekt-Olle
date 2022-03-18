let donuts = 0;
let clickPower = 1;
let clickPowerCost = 10;
let autoClickerCost = 10;
let gambleCost = 26;

let negativeReturn = 0;
let positiveReturn = 1;
let Jackpot = 4;


let button = document.querySelector(".donut-btn");
let div = document.querySelector(".points");
button.addEventListener("click", handleClick);
function handleClick() {
  donuts += clickPower;
  div.innerHTML = donuts;
}

let autoBtn = document.querySelector(".autoClicker");
autoBtn.addEventListener("click", donutTimer);
function donutTimer() {
  if (donuts >= autoClickerCost) {
    donuts -= autoClickerCost;
    div.innerHTML = donuts;
    autoClickerCost = autoClickerCost * 2;
    autoBtn.innerHTML = `Auto-Clicker (Cost: ${autoClickerCost})`;
    setInterval(giveAutoclick, 500);
  }
}
function giveAutoclick() {
  donuts++;
  div.innerHTML = donuts;
}

let pwrBtn = document.querySelector(".clickPowerup");
pwrBtn.addEventListener("click", pwrUp);
function pwrUp() {
  if (donuts >= clickPowerCost) {
    clickPower += 2;
    donuts -= clickPowerCost;
    div.innerHTML = donuts;
    clickPowerCost = clickPowerCost * 3;
    pwrBtn.innerHTML = `Click-Powerup (Cost: ${clickPowerCost})`;
  }
}

let gambleBtn = document.querySelector(".gambleBtn");
gambleBtn.addEventListener("click", gamble);
function gamble() {
  if (donuts >= gambleCost) {
    // donuts -= gambleCost;
    // div.innerHTML = donuts;
    let gambleNumber = Math.floor(Math.random() * 4);
  }
}
