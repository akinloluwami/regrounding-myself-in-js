const num = document.querySelector(".number");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
let count = 0;

btn1.addEventListener("click", (e) => {
  count -= 1;
  num.innerHTML = count;
});
btn2.addEventListener("click", (e) => {
  count += 1;
  num.innerHTML = count;
});
