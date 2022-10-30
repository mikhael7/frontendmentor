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

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
  /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform)
) {
  console.log("mobile device");
} else {
  console.log("desktop device");
}
