let productArray = [];

const addProductData = (product) => {
  productArray.push(product);
  localStorage.setItem("productArray", JSON.stringify(productArray));
};

const productName = document.querySelector("h1.title.is-heading").innerText;
const productIMG = document.querySelector("img.is-loaded").src;
const productURL = location.href;
const priceWhole = document.querySelector("span.whole").innerText;
const priceCents = document.querySelector("span.cents")?.innerText;
const productPrice = priceWhole + (priceCents ?? '')

const product = {
  productName,
  productIMG,
  productURL,
  productPrice,
};

addProductData(product);

const getProductListFromLS = () => {
  return JSON.parse(localStorage.getItem("productArray"));
};

productArray = getProductListFromLS();
