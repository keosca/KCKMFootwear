// Cart functionality
let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    document.querySelector('.cart-icon button').innerText = Cart (${cart.length});
    updateCartDetails();
}

function updateCartDetails() {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = ${item.name} - $${item.price.toFixed(2)};
        cartList.appendChild(li);
    });
    totalPrice.innerText = total.toFixed(2);
}

function viewCart() {
    document.getElementById('cart-modal').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Save total cost to local storage
function saveTotalToLocalStorage() {
    localStorage.setItem('totalCost', total);
}
// Checkout functionality
function handleCheckout(event) {
    event.preventDefault();
    alert('Transaction Successful!');
    window.location.href = 'index.html';
}