const plusOne = (id) => {
  let productToolbarElement = document.getElementById(`productToolbar${id}`);
  let productCountValue = Number(
    productToolbarElement.children[`valueItem${id}`].value
  );
  productToolbarElement.children[`valueItem${id}`].value =
    productCountValue += 1;
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
};
