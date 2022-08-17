import { createParagraph } from "./pageload";

function createAboutUs() {
  const main = document.getElementById("main");
  const aboutUsTitle = document.createElement("h1");
  const aboutUsContent = document.createElement("div");

  aboutUsContent.id = "about-us-content";

  aboutUsTitle.innerHTML = `About Rocket's Cantina <hr>`;
  aboutUsContent.appendChild(
    createParagraph(
      `Established in 1976, Rocket's cantina was built by its orignal owner Johnny "Rocket" Doe. Rocket had a vision for the cantina to be the preferred 
      Mexican resturaunt in all of town and have the highest standard of quality. Today Rocket's Cantina still stands and is the towns number one go to for Mexican cuisine.
      The team at Rocket's Cantina is proud to continue to serve the town of nowhere providing an authentic Mexican food experience for years to come.`
    )
  );

  main.appendChild(aboutUsTitle);
  main.appendChild(aboutUsContent);

  return main;
}

export { createAboutUs };
