let requestItens = {};
let phoneNumber = 16993179630;
let requestText = ``;

const requestNow = (phoneNumber, requestText) => {
  phoneNumber != false
    ? open(
        `https://api.whatsapp.com/send?phone=55${phoneNumber}&text=${encodeURIComponent(
          `${requestText} Endereço: ${addressInput.value}`
        )}`
      )
    : false;
};

const showRequestListPopup = () => {
  backgroundPopupStyle = document.querySelector(".background-popup").style;
  headerStyle = document.querySelector(".header").style;
  productsCategoryStyle = document.querySelector(".products-category").style;
  footerStyle = document.querySelector(".footer").style;

  backgroundPopupStyle.backgroundColor = "rgba(0, 0, 0, 0.95)";
  headerStyle.position = "relative";
  headerStyle.zIndex = "-1";
  productsCategoryStyle.position = "relative";
  productsCategoryStyle.zIndex = "-2";
  footerStyle.position = "relative";
  footerStyle.zIndex = "-3";
  document.body.style.overflowY = "hidden";

  document
    .querySelector(".background-popup")
    .insertAdjacentHTML("afterbegin", popupElement());

  let itensTotalValue = 0;

  for (let i = 0; i < Object.keys(requestItens).length; i++) {
    if (
      requestItens[i].itemName != undefined &&
      requestItens[i].itensQuantity != 0
    ) {
      requestItensListContent.innerHTML += `${requestItens[i].itemName} R$${requestItens[i].totalValue} - Qtd: ${requestItens[i].itensQuantity}<br>`;
      itensTotalValue += Number(requestItens[i].totalValue);

      requestText += `${requestItens[i].itemName} R$${requestItens[i].totalValue} - Qtd: ${requestItens[i].itensQuantity}
      `;
    }
  }

  requestTotalValue.innerHTML = `R$${itensTotalValue}`;
  requestText += `Total: R$${itensTotalValue}`;

  requestNowButton.addEventListener("click", () => {
    requestNow(phoneNumber, requestText);
  });
};

const updateRequestList = (
  id,
  itemName,
  productTotalRequestElement,
  productCountValue
) => {
  requestItens[`${id}`] = {
    itemName: `${itemName}`,
    totalValue: `${productTotalRequestElement}`,
    itensQuantity: `${productCountValue}`,
  };
};

const updateValueDisplay = (id, productCountValue) => {
  let productTotalRequestElement = document.getElementById(`total${id}`);

  let productTotalPriceElement = document.getElementById(`productPrice${id}`);
  let productTotalPriceValue = Number(productTotalPriceElement.innerText);

  productTotalRequestElement.innerText = `${
    productCountValue * productTotalPriceValue
  }`;

  let itemName = document.getElementById(`item${id}`).children[1].children[0]
    .innerText;

  updateRequestList(
    id,
    itemName,
    productTotalRequestElement.innerText,
    productCountValue
  );
};

const plusOne = (id) => {
  let productToolbarElement = document.getElementById(`productToolbar${id}`);
  let productCountValue = Number(
    productToolbarElement.children[`valueItem${id}`].value
  );
  productToolbarElement.children[`valueItem${id}`].value =
    productCountValue += 1;

  updateValueDisplay(id, productCountValue);
};

const minusOne = (id) => {
  let productToolbarElement = document.getElementById(`productToolbar${id}`);
  let productCountValue = Number(
    productToolbarElement.children[`valueItem${id}`].value
  );

  if (productCountValue > 0) {
    productToolbarElement.children[`valueItem${id}`].value =
      productCountValue -= 1;
  }

  updateValueDisplay(id, productCountValue);
};

requestButton.addEventListener("click", showRequestListPopup);
