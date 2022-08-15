const menuItems = [
  {
    name: "Tacos",
    price: `$10.99`,
    disc: "Home made tortillas with beef, lettuce, and guacamole.",
  },
  {
    name: "Enchiladas",
    price: "$12.99",
    disc: "Corn tortillas stuffed with chicken and cheese with sauce.",
  },
  {
    name: "Nachos",
    price: "$9.99",
    disc: "Platter of corn tortilla chips topped with melted cheese, steak bits, guacamole, and sour cream.",
  },
  {
    name: "Flautas",
    price: "$15.99",
    disc: "Platter of crispy corn tortillas stuffed with shredded chicken.",
  },
];

function createMenu() {
  const menuContainer = document.createElement("div");
  const main = document.getElementById("main");
  const menuTitle = document.createElement("h2");

  main.appendChild(menuTitle);
  const createMenuList = function () {
    for (let i = 0; i < menuItems.length; i++) {
      const menuListItemSquares = document.createElement("div");
      const menuListItemName = document.createElement("h2");
      const menuListItemDescription = document.createElement("p");
      const menuListItemPrice = document.createElement("p");

      menuContainer.appendChild(menuListItemSquares);
      menuListItemSquares.appendChild(menuListItemName);
      menuListItemSquares.appendChild(menuListItemDescription);
      menuListItemSquares.appendChild(menuListItemPrice);

      menuListItemName.textContent = `${menuItems[i].name}`;
      menuListItemDescription.textContent = `${menuItems[i].disc}`;
      menuListItemPrice.textContent = `${menuItems[i].price}`;

      menuListItemSquares.classList.add("menu-item-container");
      menuListItemName.classList.add("menu-items-names"); // might delete this its probably not needed
    }
  };

  menuContainer.id = "menu-container";
  main.appendChild(menuContainer);

  menuTitle.innerHTML = `Rocket's Cantina Menu <hr>`;
  menuTitle.id = "menu-title";

  createMenuList();

  return menuContainer;
}

export { createMenu };
