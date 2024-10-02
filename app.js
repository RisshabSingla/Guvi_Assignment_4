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

// Change Main Product Image
function changeMainImage(imageSrc, thumbId) {
  const mainProductImg = document.getElementById("main-product-img");
  mainProductImg.src = imageSrc;

  // Update Thumbnail Borders
  for (let i = 1; i <= 4; i++) {
    const thumb = document.getElementById(`thumb-${i}`);
    if (i === thumbId) {
      thumb.classList.add("border-2", "border-orange-500", "opacity-50");
    } else {
      thumb.classList.remove("border-2", "border-orange-500", "opacity-50");
    }
  }
}

let quantity = 1;
const quantityDisplay = document.getElementById("quantity");
const decreaseQtyButton = document.getElementById("decrease-qty");
const increaseQtyButton = document.getElementById("increase-qty");

decreaseQtyButton.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

increaseQtyButton.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

const addToCartButton = document.getElementById("add-to-cart");
const cartQty = document.getElementById("cart-qty");

addToCartButton.addEventListener("click", () => {
  cartQty.textContent = quantity;
});
