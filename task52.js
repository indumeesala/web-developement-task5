let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Add some products before checkout.");
  } else {
    alert("✅ Thank you for shopping with ShopEase! Your order has been placed.");
    cart = [];
    updateCart();
    toggleCart();
  }
}

window.onclick = function(event) {
  const modal = document.getElementById("cart-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Add some products before checkout.");
  } else {
    // Prepare order details
    let orderDetails = "✅ Thank you for shopping with ShopEase!\n\nYour Order Details:\n";
    let total = 0;
    cart.forEach(item => {
      orderDetails += `${item.product} - $${item.price.toFixed(2)}\n`;
      total += item.price;
    });
    orderDetails += `\nTotal: $${total.toFixed(2)}`;
    
    alert(orderDetails); // Show detailed order
    cart = [];
    updateCart();
    toggleCart();
  }
}
