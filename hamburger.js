const menu = document.querySelector(".navTest");
const webMenu = document.querySelector(".menu-website");

function menuDisplay() {
  console.log("xxxxxx");
  /*menu.classList.toggle("appear");
  menu.classList.contains("appear");*/
  webMenu.classList.toggle("appear");
  webMenu.classList.contains("appear");
}

menu.addEventListener("click", menuDisplay);
