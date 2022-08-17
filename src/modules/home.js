import { createParagraph } from "./pageload";
import { clearPage } from "../index.js";
import { createMenu } from "./menu";

function homeMainContent() {
  const mainCard = document.createElement("div");
  const main = document.getElementById("main");
  mainCard.id = "main-card";
  main.appendChild(
    createParagraph(`We have the best Mexican cuisine in town!`)
  );
  mainCard.appendChild(createParagraph(`Check out our menu`));
  main.appendChild(mainCard);

  mainCard.addEventListener("click", function () {
    clearPage();
    createMenu();
  });

  return mainCard;
}

export { homeMainContent };
