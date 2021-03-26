const row = document.querySelector(".container");

row.addEventListener("click", (e) => {
  if (!e.target.classList.contains("row")) {
    console.log(parseInt(e.target.innerHTML));
  }
});
