"use strict";

const viewsEl = document.getElementById("views");
const priceEl = document.getElementById("price");
const slider = document.getElementById("range");
const checkbox = document.getElementById("checkbox");
const monthlyPrices = [8, 12, 16, 24, 36];
const viewsArr = [
    "10K pageviews",
    "50K pageviews",
    "100K pageviews",
    "500k pageviews",
    "1M pageviews",
];
const yearlyDiscount = 0.25;

slider.addEventListener("input", (event) => calculatePrice(event));

const calculatePrice = (event) => {
    //Change background color for slider
    console.log(+slider.value);
    if (+slider.value === 0) {
        slider.style.backgroundSize = "0% 100%";
    }
    if (+slider.value === 1) {
        slider.style.backgroundSize = "25% 100%";
    }
    if (+slider.value === 2) {
        slider.style.backgroundSize = "50% 100%";
    }
    if (+slider.value === 3) {
        slider.style.backgroundSize = "75% 100%";
    }
    if (+slider.value === 4) {
        slider.style.backgroundSize = "100% 100%";
    }

    viewsEl.textContent = viewsArr[event.target.value];
    if (!checkbox.checked) {
        priceEl.textContent = "$" + monthlyPrices[event.target.value];
    } else {
        let amount = Math.abs(
            monthlyPrices[event.target.value] * 12 * 0.25 -
            monthlyPrices[event.target.value] * 12
        );
        priceEl.textContent = "$" + amount;
    }
};
checkbox.addEventListener("change", togglePriceCalculte);

function togglePriceCalculte() {
    viewsEl.textContent = viewsArr[slider.value];
    if (!checkbox.checked) {
        priceEl.textContent = "$" + monthlyPrices[slider.value];
    } else {
        let amount = Math.abs(
            monthlyPrices[slider.value] * 12 * 0.25 - monthlyPrices[slider.value] * 12
        );
        priceEl.textContent = "$" + amount;
    }
}