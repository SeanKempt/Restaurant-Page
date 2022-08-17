import { intializePage } from "./modules/pageload.js";
import { homeMainContent } from "./modules/home.js";
import { createMenu } from "./modules/menu";
import { createAboutUs } from "./modules/about.js";

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

const aboutNav = document.getElementById("about-us-nav");
aboutNav.addEventListener("click", function () {
  clearPage();
  createAboutUs();
});

const clearPage = () => {
  const main = document.querySelector("#main");
  main.innerHTML = " ";
};

export { clearPage };
