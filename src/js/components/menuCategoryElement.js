export const menuCategoryElement = (categoryTitle, categoryId, className="category") => {
  let menuCategory = `
    <div>
      <h2>${categoryTitle}</h2>
    </div>
    <div class="${className}" id="${categoryId}"></div>`;
  return menuCategory;
}
