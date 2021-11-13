import { prodCardElement } from "./components/prodCardElement.js";
import { menuCategoryElement } from "./components/menuCategoryElement.js";

let idCount = 0;

export const addMenuItem = (addname, value, description, image, category) => {
  menuCategory.children[category].insertAdjacentHTML(
    "afterbegin",
    prodCardElement(addname, value, description, image, idCount)
  );
  idCount++;
};

export const addMenuCategory = (categoryTitle, categoryId, className) => {
  menuCategory.insertAdjacentHTML(
    "beforeend",
    menuCategoryElement(categoryTitle, categoryId, className)
  );
};  
