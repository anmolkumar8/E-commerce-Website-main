// Shopping Cart Management
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartUI();
    }

    // Load cart from localStorage
    loadCart() {
        const saved = localStorage.getItem('anufaCart');
        return saved ? JSON.parse(saved) : [];
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('anufaCart', JSON.stringify(this.items));
    }

    // Add item to cart
    addItem(productId, quantity = 1) {
        const product = getProductById(productId);
        if (!product) return false;

        const existingItem = this.items.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
                quantity: quantity
            });
        }

        this.saveCart();
        this.updateCartUI();
        this.showNotification(`${product.name} added to cart!`, 'success');
        return true;
    }

    // Remove item from cart
    removeItem(productId) {
        const itemIndex = this.items.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            const item = this.items[itemIndex];
            this.items.splice(itemIndex, 1);
            this.saveCart();
            this.updateCartUI();
            this.showNotification(`${item.name} removed from cart!`, 'info');
        }
    }

    // Update item quantity
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartUI();
            }
        }
    }

    // Clear cart
    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartUI();
        this.showNotification('Cart cleared!', 'info');
    }

    // Get cart total
    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Get total items count
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    // Update cart UI
    updateCartUI() {
        this.updateCartCount();
        this.updateCartSidebar();
    }

    // Update cart count badge
    updateCartCount() {
        const cartCountElements = document.querySelectorAll('.cart-count');
        const count = this.getItemCount();
        
        cartCountElements.forEach(element => {
            element.textContent = count;
            element.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    // Update cart sidebar
    updateCartSidebar() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (!cartItemsContainer || !cartTotal) return;

        // Clear existing items
        cartItemsContainer.innerHTML = '';

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart" style="font-size: 3rem; color: #ddd; margin-bottom: 1rem;"></i>
                    <p style="color: #999;">Your cart is empty</p>
                </div>
            `;
        } else {
            this.items.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                        <div class="quantity-controls">
                            <button onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})" class="qty-btn">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})" class="qty-btn">+</button>
                        </div>
                    </div>
                    <button onclick="cart.removeItem(${item.id})" class="cart-item-remove">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
        }

        // Update total
        cartTotal.textContent = `₹${this.getTotal().toLocaleString()}`;
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Get cart items for checkout
    getCheckoutData() {
        return {
            items: this.items,
            total: this.getTotal(),
            itemCount: this.getItemCount()
        };
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Cart UI functions
function openCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    if (cartSidebar && overlay) {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    if (cartSidebar && overlay) {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Add to cart function for product cards
function addToCart(productId, quantity = 1) {
    cart.addItem(productId, quantity);
}

// Checkout function
function checkout() {
    const checkoutData = cart.getCheckoutData();
    
    if (checkoutData.items.length === 0) {
        cart.showNotification('Your cart is empty!', 'error');
        return;
    }

    // In a real application, this would redirect to a payment gateway
    // For now, we'll simulate a successful order
    const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
    
    cart.showNotification(`Order placed successfully! Order #${orderNumber}`, 'success');
    
    // Clear cart after successful checkout
    setTimeout(() => {
        cart.clearCart();
        closeCart();
    }, 2000);
    
    // Store order in localStorage for order history
    const orders = JSON.parse(localStorage.getItem('anufaOrders') || '[]');
    orders.push({
        id: orderNumber,
        date: new Date().toISOString(),
        items: checkoutData.items,
        total: checkoutData.total,
        status: 'Processing'
    });
    localStorage.setItem('anufaOrders', JSON.stringify(orders));
}

// Wishlist functionality
class Wishlist {
    constructor() {
        this.items = this.loadWishlist();
    }

    loadWishlist() {
        const saved = localStorage.getItem('anufaWishlist');
        return saved ? JSON.parse(saved) : [];
    }

    saveWishlist() {
        localStorage.setItem('anufaWishlist', JSON.stringify(this.items));
    }

    addItem(productId) {
        const product = getProductById(productId);
        if (!product) return false;

        const exists = this.items.find(item => item.id === productId);
        if (!exists) {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
                dateAdded: new Date().toISOString()
            });
            this.saveWishlist();
            cart.showNotification(`${product.name} added to wishlist!`, 'success');
            return true;
        } else {
            cart.showNotification(`${product.name} is already in your wishlist!`, 'info');
            return false;
        }
    }

    removeItem(productId) {
        const itemIndex = this.items.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            const item = this.items[itemIndex];
            this.items.splice(itemIndex, 1);
            this.saveWishlist();
            cart.showNotification(`${item.name} removed from wishlist!`, 'info');
        }
    }

    isInWishlist(productId) {
        return this.items.some(item => item.id === productId);
    }

    getItems() {
        return this.items;
    }
}

// Initialize wishlist
const wishlist = new Wishlist();

// Wishlist functions
function addToWishlist(productId) {
    wishlist.addItem(productId);
}

function removeFromWishlist(productId) {
    wishlist.removeItem(productId);
}

// Close overlays when clicking outside
document.addEventListener('click', function(e) {
    const overlay = document.getElementById('overlay');
    if (e.target === overlay) {
        closeCart();
    }
});

// Close cart with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCart();
    }
});

// Add quantity control styles
const style = document.createElement('style');
style.textContent = `
    .quantity-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
    
    .qty-btn {
        background: var(--secondary-color);
        color: white;
        border: none;
        width: 24px;
        height: 24px;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .qty-btn:hover {
        background: #c0392b;
    }
    
    .quantity {
        min-width: 30px;
        text-align: center;
        font-weight: 600;
    }
    
    .empty-cart {
        text-align: center;
        padding: 3rem 1rem;
    }
    
    .notification {
        font-family: var(--font-family);
    }
`;
document.head.appendChild(style);
