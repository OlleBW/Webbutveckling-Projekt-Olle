let click = 0;

let button = document.querySelector(".donut-btn");
let div = document.querySelector(".points");
button.addEventListener("click", handleClick);
function handleClick() {
  click++;
  div.innerHTML = click;
}