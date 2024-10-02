const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuButton = document.getElementById("close-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("-translate-x-full");
});

closeMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
});

const cartButton = document.getElementById("cart-button");
const cartDropdown = document.getElementById("cart-dropdown");

cartButton.addEventListener("click", () => {
  cartDropdown.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  if (
    !cartButton.contains(event.target) &&
    !cartDropdown.contains(event.target)
  ) {
    cartDropdown.classList.add("hidden");
  }
});
