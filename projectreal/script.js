// Cart functionality
let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    document.querySelector('.cart-icon button').innerText = `Cart (${cart.length})`;
    updateCartDetails();
}

function updateCartDetails() {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
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
// Login functionality
const validCredentials = {
    username: 'admin',
    password: 'password123'
};

function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === validCredentials.username && passwordInput === validCredentials.password) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to the index page
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function filterProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productText = product.innerText.toLowerCase();
        if (productText.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function filterByCategory() {
    const category = document.getElementById('category').value;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
document.getElementById('category').addEventListener('change', filterByCategory);
// Set total price in checkout page
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('checkout-total-price').innerText = localStorage.getItem('totalCost') || '0';
});
// Checkout functionality
function handleCheckout(event) {
    event.preventDefault();
    alert('Transaction Successful!');
    window.location.href = 'index.html';
}