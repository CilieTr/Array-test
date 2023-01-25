const productInput = document.querySelector("#productInput");
const productSubmitBtn = document.querySelector("#productSubmit");
const productList = document.querySelector("#productList");

const products = ["melk", "skinke", "ost", "kaffe"];

productSubmitBtn.addEventListener("click", addProduct);

function addProduct() {
    products.push(productInput.value);
    showProduct();
}