const sidebar = document.getElementById("sidebar");
const btnMenu = document.getElementById("button-open");
const btnClose = document.getElementById("button-close");

btnMenu.addEventListener("click", () => {
  sidebar.classList.add("nav-show");
});
btnClose.addEventListener("click", () => {
  sidebar.classList.remove("nav-show");
});
