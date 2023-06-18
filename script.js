// Add event listeners to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".addToCart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

// Add item to the cart
function addToCart() {
  // Increase the quantity indicator
  const quantityIndicator = document.querySelector(".quantity");
  let quantity = parseInt(quantityIndicator.textContent);
  quantity++;
  quantityIndicator.textContent = quantity;

  // Add the item to the cart list
  const itemName = this.getAttribute("data-item");
  const itemPrice = this.getAttribute("data-price");

  const listCard = document.querySelector(".listCard");
  const listItem = document.createElement("li");
  listItem.textContent = itemName + " - $" + itemPrice;
  listCard.appendChild(listItem);

  // Update the total price
  const totalPrice = document.querySelector(".total");
  const currentTotal = parseFloat(totalPrice.textContent);
  const newItemPrice = parseFloat(itemPrice);
  const newTotal = currentTotal + newItemPrice;
  totalPrice.textContent = newTotal.toFixed(2);

  // Open the cart section
  const cartSection = document.querySelector(".card");
  cartSection.classList.add("open");
}

// Close the cart section
const closeShoppingButton = document.querySelector(".closeShopping");
closeShoppingButton.addEventListener("click", closeShoppingCart);

function closeShoppingCart() {
  const cartSection = document.querySelector(".card");
  cartSection.classList.remove("open");
}
