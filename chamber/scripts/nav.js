// scripts/nav.js
const menuButton = document.getElementById("menuButton");
const menuItems = document.getElementById("menuItems");

menuButton.addEventListener("click", () => {
  menuItems.classList.toggle("open");
});
