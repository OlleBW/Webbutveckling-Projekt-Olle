let click = 0;

let pointsText = document.querySelector("pointsText");

let button = document.querySelector(".donut-btn");
button.addEventListener("click", handleClick);
function handleClick() {
  click++;
  pointsText.innerHTML = click;
}
