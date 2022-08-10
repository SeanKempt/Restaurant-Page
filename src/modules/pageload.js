const content = document.getElementById("content");

function createHeader() {
  const header = document.createElement("div");
  header.id = "header";
  //creates restaraunt name
  const title = document.createElement("h1");
  title.textContent = "Rocket Enchiladas";
  header.appendChild(title);

  //create navigation for various pages
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  li.textContent = "Home";
  li1.textContent = "About Us";
  li2.textContent = "Menu";
  header.appendChild(ul);
  ul.appendChild(li);
  ul.appendChild(li1);
  ul.appendChild(li2);
  return header;
}

function createMain() {
  const main = document.createElement("div");
  main.id = "main";
  main.appendChild(
    createParagraph(
      `We have the best enchiladas in town! So good you'll blast out of your seat!`
    )
  );
  return main;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.id = "footer";
  footer.appendChild(createParagraph(`Made by Sean Kempt`));
  return footer;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function intializePage() {
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

export { intializePage };
