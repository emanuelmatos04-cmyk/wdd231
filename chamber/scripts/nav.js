// scripts/nav.js
const menuButton = document.getElementById("menuButton");
const menuItems = document.getElementById("menuItems");

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", !expanded);
  menuItems.classList.toggle("show");
});
