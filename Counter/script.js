const btnDecrease = document.querySelector(".btn--decrease");
const btnReset = document.querySelector(".btn--reset");
const btnIncrease = document.querySelector(".btn--increase");
const numberEl = document.querySelector(".number");
const boxShadow = document.querySelector(".box--shadow");

numberEl.textContent = 0;
let number = 0;

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "-") {
    decreaseValue();
  }
  if (e.key === "Delete") {
    resetValue();
  }
  if (e.key === "+") {
    increaseValue();
  }
});

const updateNumberDisplay = function () {
  if (number < 0) {
    numberEl.style.color = "#e03131";
  } else if (number === 0) {
    numberEl.style.color = "#343a40";
  } else if (number > 0) {
    numberEl.style.color = "#2f9e44";
  }
};

const toggleBoxShadow = function (element) {
  element.classList.toggle("box--shadow");
};

const decreaseValue = function () {
  number--;
  numberEl.textContent = number;
  updateNumberDisplay();
  btnDecrease.classList.add("box--shadow");
  btnReset.classList.remove("box--shadow");
  btnIncrease.classList.remove("box--shadow");
};

const resetValue = function () {
  number = 0;
  numberEl.textContent = number;
  updateNumberDisplay();
  btnDecrease.classList.remove("box--shadow");
  btnReset.classList.add("box--shadow");
  btnIncrease.classList.remove("box--shadow");
};

const increaseValue = function () {
  number++;
  numberEl.textContent = number;
  updateNumberDisplay();
  btnDecrease.classList.remove("box--shadow");
  btnReset.classList.remove("box--shadow");
  btnIncrease.classList.add("box--shadow");
};

btnDecrease.addEventListener("click", decreaseValue);
btnReset.addEventListener("click", resetValue);
btnIncrease.addEventListener("click", increaseValue);
