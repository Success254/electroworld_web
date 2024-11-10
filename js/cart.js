// cart.js
document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartIcon = document.querySelector('.cart-icon');
    const cartCount = document.querySelector('.cart-count');
    const cartContents = document.querySelector('.cart-contents'); // Where you show cart items

    // Add to cart function
    function addToCart(productId, quantity = 1) {
        const productIndex = cart.findIndex(item => item.id === productId);
        if (productIndex === -1) {
            cart.push({ id: productId, quantity });
        } else {
            cart[productIndex].quantity += quantity;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    // Remove item from cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    // Update cart display
    function updateCartDisplay() {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCount.textContent = totalItems;
        displayCartContents();
    }

    // Display cart contents
    function displayCartContents() {
        cartContents.innerHTML = ''; // Clear current cart items
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>Product ID: ${item.id}</p>
                <p>Quantity: ${item.quantity}</p>
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            `;
            cartContents.appendChild(cartItem);
        });
    }

    // Event listener for removing items from cart
    cartContents.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-from-cart')) {
            const productId = e.target.getAttribute('data-id');
            removeFromCart(productId);
        }
    });

    // Add event listener for cart button to view cart
    cartIcon.addEventListener('click', () => {
        cartContents.classList.toggle('visible'); // Show/hide cart contents
    });

    updateCartDisplay(); // Initial update
});
