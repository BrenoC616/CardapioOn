import { addMenuCategory, addMenuItem } from "./js/main.js";

// Aqui você adiciona as Categorias de opções
//exemplo: addCategoria(Título da categoria, identificação da categoria);
addMenuCategory("X-Burgers", "xBurgersCategory", "category");
addMenuCategory("Diet Burgers", "dietBurgersCategory", "category");

// Aqui você adiciona as opções ao Cardápio
// exemplo: addItem(nome da opção, valor da opção, ingredientes, imagem da opção, identificação da categoria);
addMenuItem(
  "X-Tudo",
  "19",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, incidunt?",
  "./src/img/xSalada.jpeg",
  "xBurgersCategory"
);
addMenuItem(
  "X-Salada",
  "15",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, incidunt?",
  "./src/img/xSalada.jpeg",
  "xBurgersCategory"
);
addMenuItem(
  "X-Bacon",
  "14",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, incidunt?",
  "./src/img/xSalada.jpeg",
  "xBurgersCategory"
);
addMenuItem(
  "X-Diet",
  "20",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, incidunt?",
  "./src/img/xSalada.jpeg",
  "dietBurgersCategory"
);
