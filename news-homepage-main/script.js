const sidebar = document.getElementById("sidebar");
const btnMenu = document.getElementById("button-open");
const btnClose = document.getElementById("button-close");
const overlay = document.getElementById("overlay");

btnMenu.addEventListener("click", () => {
  sidebar.classList.add("nav-show");
  overlay.style.display = "block";
});
btnClose.addEventListener("click", () => {
  sidebar.classList.remove("nav-show");
  overlay.style.display = "none";
});
