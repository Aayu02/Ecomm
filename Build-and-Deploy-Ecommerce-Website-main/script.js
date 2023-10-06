// Script for navigation bar
let cart1 = [];

function addToCart(name, price) {
    const product = { name, price };
    cart1.push(product);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let total = 0;
    cart1.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        cartList.appendChild(li);
        total += product.price;
    });
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

function clearCart() {
    cart1 = [];
    updateCart();
}


// Initialize an empty array for the cart
var cart = [];

// Add to Cart function
function addToCart(product) {
  cart.push(product);
  alert('Product added to cart!');
}



// Display the cart items
function showCart() {
    var cartModal = document.getElementById('cartModal');
    var cartItems = document.getElementById('cartItems');
    
    // Clear the cart items list
    cartItems.innerHTML = 'cart1';
    
    // Add each cart item to the list
    cart.forEach(function(product) {
      var listItem = document.createElement('li');
      listItem.textContent = product.name + ' - $' + product.price;
      cartItems.appendChild(listItem);
    });
    
    // Show the cart modal
    cartModal.style.display = 'block';
  }
  
  // Hide the cart modal
  function hideCart() {
    var cartModal = document.getElementById('cartModal');
    cartModal.style.display = 'none';
  }
  
