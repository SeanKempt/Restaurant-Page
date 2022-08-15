import { createParagraph } from "./pageload";

function homeMainContent() {
  const mainCard = document.createElement("div");
  const main = document.getElementById("main");
  mainCard.id = "main-card";
  main.appendChild(
    createParagraph(`We have the best Mexican cuisine in town!`)
  );
  mainCard.appendChild(createParagraph(`Check out our menu`));
  main.appendChild(mainCard);
  return mainCard;
}

export { homeMainContent };
