let price;
let discount;
const rangeInput = document.querySelector("input[type='range']");
const priceOutput = document.querySelector("output");
const discountBadge = document.getElementById("discountBadge");
const discountBox = document.getElementById("discountBox");
const discountValue = document.getElementById("discountValue");

rangeInput.addEventListener("input", e => priceOutput.textContent = e.target.value);
discountBadge.addEventListener("click", e => {
    discountBox.style = "display: flex";
    e.target.style = "display: none";
});
discountValue.addEventListener('input', e => e.target.value > 100 ? e.target.value = 100 : e.target.value < 0 ? e.target.value = 0 : setDiscount(e.target))

function setDiscount(element){
    discount = element
}