let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const loading = document.getElementById("loading");
window.addEventListener("load", () => {
  loading.classList.add('loading-none');
});