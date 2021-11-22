export const prodCardElement = (name, value, description, image, id) =>  {
  let prodCard = `
  <div class="product-card" id="item${id}">
    <div class="product-image">
      <img src="${image}" alt="Imagem de um ${name}" width="100%"/>
    </div>
    <div class="product-name">
      <span>${name}</span>
    </div>
    <div class="product-description">
      <span>${description}</span>
    </div>
    <div class="product-price">
      <span>R$ <span id="productPrice${id}">${value}</span></span>
    </div>
    <div class="total-request">
      <span>Total: R$<span id="total${id}">0</span></span>
    </div>
    <div class="product-toolbar" id="productToolbar${id}">
      <button onClick="minusOne(${id})">-</button>
      <input disabled type="text" value="0" id="valueItem${id}" aria-hidden="true"/>
      <button onClick="plusOne(${id})">+</button>
    </div>
  </div>
`;
  return prodCard;
}
