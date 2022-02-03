const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEL = document.querySelector("ul");

const makeElementList = (names) => {
  return names.map(name => {
    const navitemEl = document.createElement("li");
    navitemEl.classList.add("item");
    navitemEl.textContent = name;

    return navitemEl;
  });
};
const elements = makeElementList(ingredients);
ingredientsEL.append(...elements);
