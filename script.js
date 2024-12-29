const startEl = document.querySelector(".start");
const stopEl = document.querySelector(".stop");
const boxEl = document.querySelector(".box");

const colorChnager = () => {
  let hex = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(colorChnager());

let colorInterval;

startEl.addEventListener("click", () => {
  colorInterval = setInterval(() => {
    boxEl.style.backgroundColor = colorChnager();
  }, 1000);
});

stopEl.addEventListener("click", () => {
  clearInterval(colorInterval);
});
