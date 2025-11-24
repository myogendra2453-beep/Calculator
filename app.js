const numKeys = document.querySelectorAll(
  ".key-7, .key-8, .key-9, .key-4, .key-5, .key-6, .key-1, .key-2, .key-3, .key-0"
);
const operatorKeys = document.querySelectorAll(
  ".key-plus, .key-minus, .key-dott, .key-divide, .key-multiplyy"
);
const delKey = document.querySelector(".key-del");
const resetKey = document.querySelector(".key-reset");
const equalKey = document.querySelector(".key-equal");
const display = document.querySelector(".display-screen");
const inputBox = document.getElementById("numInput");
inputBox.value = "0";
let keyCount = {
  plusCount: 0,
  minusCount: 0,
  dotCount: 0,
  divideCount: 0,
  multiplyCount: 0,
};

numKeys.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (inputBox.value === "0") {
      if (btn.textContent !== "0") {
        inputBox.value = btn.textContent;
      }
    } else {
      inputBox.value += btn.textContent;
    }
  });
});
operatorKeys.forEach((btn) => {
  btn.addEventListener("click", () => {
    inputBox.value += btn.textContent;
    inputBox.value = inputBox.value.replace(/([+\-*/.x]){2,}/gi, "$1");
    inputBox.value = inputBox.value.replace(/x/gi, "*");
  });
});

resetKey.addEventListener("click", () => {
  inputBox.value = "";
  display.innerHTML = 0;
});
delKey.addEventListener("click", () => {
  inputBox.value = inputBox.value.slice(0, -1);
});

equalKey.addEventListener("click", () => {
  inputBox.value = inputBox.value.replace(/x/gi, "*");
  calculation(inputBox.value);
});

function calculation(value) {
  display.innerHTML = eval(value);
}
//========================================================================================

const calculator = document.querySelector(".calculator");
const popup = document.querySelector(".about-popup");
const icon = document.querySelector(".fa-user-secret");

icon.addEventListener("click", () => {
  popup.classList.toggle("show");
  calculator.classList.toggle("hide");
});

//========================================================================================

const radioButtons = document.querySelectorAll(".radio-button");
radioButtons.forEach((rbtn, theme) => {
  rbtn.addEventListener("click", () => {
    if (theme === 0) {
      document.documentElement.style.setProperty(
        "--color-background",
        "#3b4664"
      );
      document.documentElement.style.setProperty("--color-numpad", "#252d44");
      document.documentElement.style.setProperty("--color-display", "#181f32");
      document.documentElement.style.setProperty("--color-keys", "#eae3db");
      document.documentElement.style.setProperty("--color-sideKeys", "#647299");
      document.documentElement.style.setProperty("--color-enter", "#d13f30");
      document.documentElement.style.setProperty("--color-toggle", "#252c45");
      document.documentElement.style.setProperty(
        "--color-keys-outline",
        "#b2a295"
      );
    }
    if (theme === 1) {
      // 🌸 fourth theme (sakura)
      document.documentElement.style.setProperty(
        "--color-background",
        "#875C77"
      );
      document.documentElement.style.setProperty("--color-numpad", "#66485B");
      document.documentElement.style.setProperty("--color-display", "#3D1F2F");
      document.documentElement.style.setProperty("--color-keys", "#EAE3DB");
      document.documentElement.style.setProperty("--color-sideKeys", "#647299");
      document.documentElement.style.setProperty("--color-enter", "#D13F30");
      document.documentElement.style.setProperty("--color-toggle", "#563448");
    }
    if (theme === 2) {
      // 💚 second theme (green)
      document.documentElement.style.setProperty(
        "--color-background",
        "#305A3B"
      );
      document.documentElement.style.setProperty("--color-numpad", "#1E4125");
      document.documentElement.style.setProperty("--color-display", "#122418");
      document.documentElement.style.setProperty("--color-keys", "#EAE3DB");
      document.documentElement.style.setProperty("--color-sideKeys", "#647299");
      document.documentElement.style.setProperty("--color-enter", "#D13F30");
      document.documentElement.style.setProperty("--color-toggle", "#1E3A1E");
    }
  });
});

//========================================================================================
document.getElementById("aboutBtn").onclick = () => {
  document.querySelector(".about-popup").classList.toggle("active");
};
