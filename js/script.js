const productInput = document.querySelector("#productInput");
const productSubmitBtn = document.querySelector("#productSubmit");
const productList = document.querySelector("#productList");

const products = ["melk", "skinke", "ost", "kaffe"];

productSubmitBtn.addEventListener("click", addProduct);

function addProduct() {
  products.push(productInput.value);
  showProduct();
}

function removeProduct(i) {
  products.splice(i, 1);
  showProduct();
}

function showProduct() {
  productList.innerHTML = "";
  productInput.value = "";
}

for (let i = 0; i < products.length; i++) {
  productList.innerHTML += `<li onclick ="removeProduct(${[i]})">${
    products[i]
  } </li>`;
}

showProduct();
