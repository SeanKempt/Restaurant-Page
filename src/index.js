import { intializePage } from "./modules/pageload.js";
import { homeMainContent } from "./modules/home.js";
import { createMenu } from "./modules/menu";

intializePage();
homeMainContent();

//write tab switching logic here ie event listeners
const menuNav = document.getElementById("menu-nav");
menuNav.addEventListener("click", function () {
  clearPage();
  createMenu();
});

const homeNav = document.getElementById("home-nav");
homeNav.addEventListener("click", function () {
  clearPage();
  homeMainContent();
});

const clearPage = () => {
  const main = document.querySelector("#main");
  main.innerHTML = " ";
};
