const updateValueDisplay = (id, productCountValue) => {
  let productTotalRequestElement = document.getElementById(`total${id}`);

  let productTotalPriceElement = document.getElementById(`productPrice${id}`);
  let productTotalPriceValue = Number(productTotalPriceElement.innerText);

  productTotalRequestElement.innerText = `${
    productCountValue * productTotalPriceValue
  }`;
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
