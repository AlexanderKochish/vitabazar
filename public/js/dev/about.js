import "./app.min.js";
import "./oneproduct.min2.js";
/* empty css          */
const priceFilterSlider = document.querySelector(".price-slider");
const priceValue = document.querySelector(".price-filter__value");
const valueInpStart = document.querySelector(".price-filter__start");
const valueInpEnd = document.querySelector(".price-filter__end");
noUiSlider.create(priceFilterSlider, {
  start: [250, 700],
  step: 1,
  connect: true,
  tooltips: [
    { to: (value) => Math.round(value) },
    { to: (value) => Math.round(value) }
  ],
  range: {
    "min": 0,
    "max": 1500
  }
});
priceFilterSlider.noUiSlider.on("update", function(values, handle) {
  const formatted = values.map((v) => Math.round(v).toLocaleString("en-US"));
  priceValue.textContent = formatted.join(" — ");
  valueInpStart.value = Math.round(values[0]);
  valueInpEnd.value = Math.round(values[1]);
});
