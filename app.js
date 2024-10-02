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

function changeMainImage(imageSrc, thumbId) {
  const mainProductImg = document.getElementById("main-product-img");
  mainProductImg.src = imageSrc;

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

let cart = [];
let cartQuantity = 0;
function updateCartDisplay() {
  const cartDisplayItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart-message");
  const checkoutButton = document.getElementById("checkout-button");

  cartDisplayItems.innerHTML = "";

  if (cart.length === 0) {
    emptyCartMessage.classList.remove("hidden");
  } else {
    emptyCartMessage.classList.add("hidden");
    checkoutButton.classList.remove("hidden");

    cart.forEach((item, index) => {
      const itemBlock = document.createElement("div");
      itemBlock.className =
        "flex items-center justify-between border-b border-gray-300 py-2";

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;
      img.className = "h-12 w-12 object-cover mr-4 rounded-xl";
      itemBlock.appendChild(img);

      const infoBlock = document.createElement("div");
      infoBlock.className = "flex flex-col mr-2";
      const nameQuantity = document.createElement("span");
      nameQuantity.textContent = `${item.name} x ${item.quantity} = $${(
        item.price * item.quantity
      ).toFixed(2)}`;
      infoBlock.appendChild(nameQuantity);
      itemBlock.appendChild(infoBlock);

      const removeButton = document.createElement("button");
      removeButton.className = "focus:outline-none";
      removeButton.innerHTML = `<svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" fill="#C3CAD9"></path></svg>`;
      removeButton.addEventListener("click", function () {
        cartQuantity -= item.quantity;
        cart.splice(index, 1);
        cartQty.textContent = cartQuantity;
        updateCartDisplay();
      });

      itemBlock.appendChild(removeButton);
      cartDisplayItems.appendChild(itemBlock);
    });
  }
}

addToCartButton.addEventListener("click", () => {
  const productName = document.getElementById("main-product-img").alt;
  const productPrice = 125.0;
  const quantity = parseInt(quantityDisplay.textContent);
  const imageSrc = document.getElementById("main-product-img").src;

  const existingItem = cart.find((item) => item.name === productName);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      name: productName,
      price: productPrice,
      quantity,
      image: imageSrc,
    });
  }

  cartQuantity += quantity;
  cartQty.textContent = cartQuantity;
  updateCartDisplay();
});

cartButton.addEventListener("mouseenter", () => {
  cartDropdown.classList.remove("hidden");
});

cartDropdown.addEventListener("mouseenter", () => {
  cartDropdown.classList.remove("hidden");
});

cartButton.addEventListener("mouseleave", () => {
  cartDropdown.classList.add("hidden");
});

cartDropdown.addEventListener("mouseleave", () => {
  cartDropdown.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  updateCartDisplay();
});
