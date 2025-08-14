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

// Checkout function - Opens payment modal
function checkout() {
    const checkoutData = cart.getCheckoutData();
    
    if (checkoutData.items.length === 0) {
        cart.showNotification('Your cart is empty!', 'error');
        return;
    }

    // Close cart and open payment modal
    closeCart();
    openPaymentModal(checkoutData);
}

// Payment Modal Functions
function openPaymentModal(checkoutData) {
    // Create payment modal if it doesn't exist
    if (!document.getElementById('paymentModal')) {
        createPaymentModal();
    }
    
    const modal = document.getElementById('paymentModal');
    const overlay = document.getElementById('overlay');
    
    // Update order summary in modal
    updateOrderSummary(checkoutData);
    
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePaymentModal() {
    const modal = document.getElementById('paymentModal');
    const overlay = document.getElementById('overlay');
    
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function createPaymentModal() {
    const modal = document.createElement('div');
    modal.id = 'paymentModal';
    modal.className = 'payment-modal';
    
    modal.innerHTML = `
        <div class="payment-content">
            <div class="payment-header">
                <h2><i class="fas fa-credit-card"></i> Secure Checkout</h2>
                <button class="payment-close" onclick="closePaymentModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="payment-body">
                <div class="payment-left">
                    <div class="payment-section">
                        <h3><i class="fas fa-user"></i> Contact Information</h3>
                        <div class="form-group">
                            <input type="email" id="customerEmail" placeholder="Email address" required>
                        </div>
                    </div>
                    
                    <div class="payment-section">
                        <h3><i class="fas fa-truck"></i> Shipping Address</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <input type="text" id="firstName" placeholder="First name" required>
                            </div>
                            <div class="form-group">
                                <input type="text" id="lastName" placeholder="Last name" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" id="address" placeholder="Address" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <input type="text" id="city" placeholder="City" required>
                            </div>
                            <div class="form-group">
                                <input type="text" id="postalCode" placeholder="Postal code" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <select id="country" required>
                                <option value="">Select country</option>
                                <option value="IN">India</option>
                                <option value="US">United States</option>
                                <option value="GB">United Kingdom</option>
                                <option value="CA">Canada</option>
                                <option value="AU">Australia</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="payment-section">
                        <h3><i class="fas fa-credit-card"></i> Payment Method</h3>
                        <div class="payment-methods">
                            <label class="payment-method active" onclick="selectPaymentMethod('card')">
                                <input type="radio" name="paymentMethod" value="card" checked>
                                <div class="method-info">
                                    <i class="fas fa-credit-card"></i>
                                    <span>Credit/Debit Card</span>
                                </div>
                                <div class="card-logos">
                                    <i class="fab fa-cc-visa"></i>
                                    <i class="fab fa-cc-mastercard"></i>
                                    <i class="fab fa-cc-amex"></i>
                                </div>
                            </label>
                            
                            <label class="payment-method" onclick="selectPaymentMethod('upi')">
                                <input type="radio" name="paymentMethod" value="upi">
                                <div class="method-info">
                                    <i class="fas fa-mobile-alt"></i>
                                    <span>UPI Payment</span>
                                </div>
                            </label>
                            
                            <label class="payment-method" onclick="selectPaymentMethod('wallet')">
                                <input type="radio" name="paymentMethod" value="wallet">
                                <div class="method-info">
                                    <i class="fas fa-wallet"></i>
                                    <span>Digital Wallet</span>
                                </div>
                            </label>
                        </div>
                        
                        <div id="cardForm" class="payment-form">
                            <div class="form-group">
                                <input type="text" id="cardNumber" placeholder="Card number" maxlength="19" oninput="formatCardNumber(this)">
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <input type="text" id="expiryDate" placeholder="MM/YY" maxlength="5" oninput="formatExpiry(this)">
                                </div>
                                <div class="form-group">
                                    <input type="text" id="cvv" placeholder="CVV" maxlength="3">
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="text" id="cardHolder" placeholder="Name on card">
                            </div>
                        </div>
                        
                        <div id="upiForm" class="payment-form" style="display: none;">
                            <div class="form-group">
                                <input type="text" id="upiId" placeholder="Enter UPI ID (e.g., user@paytm)">
                            </div>
                            <div class="upi-apps">
                                <button type="button" class="upi-app" onclick="selectUPIApp('paytm')">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzAwQkNENCIgcng9IjQiLz4KPHN2ZyB4PSI0IiB5PSI0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIj4KPHA+UGF5VE08L3A+Cjwvc3ZnPgo8L3N2Zz4K" alt="PayTM">
                                    PayTM
                                </button>
                                <button type="button" class="upi-app" onclick="selectUPIApp('gpay')">
                                    <i class="fab fa-google-pay"></i>
                                    GPay
                                </button>
                                <button type="button" class="upi-app" onclick="selectUPIApp('phonepe')">
                                    <i class="fas fa-mobile-alt"></i>
                                    PhonePe
                                </button>
                            </div>
                        </div>
                        
                        <div id="walletForm" class="payment-form" style="display: none;">
                            <div class="wallet-options">
                                <button type="button" class="wallet-option" onclick="selectWallet('paypal')">
                                    <i class="fab fa-paypal"></i>
                                    PayPal
                                </button>
                                <button type="button" class="wallet-option" onclick="selectWallet('amazon')">
                                    <i class="fab fa-amazon-pay"></i>
                                    Amazon Pay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="payment-right">
                    <div class="order-summary">
                        <h3><i class="fas fa-shopping-bag"></i> Order Summary</h3>
                        <div id="orderItems" class="order-items"></div>
                        
                        <div class="order-totals">
                            <div class="total-line">
                                <span>Subtotal:</span>
                                <span id="subtotal">₹0.00</span>
                            </div>
                            <div class="total-line">
                                <span>Shipping:</span>
                                <span id="shipping">Free</span>
                            </div>
                            <div class="total-line">
                                <span>Tax:</span>
                                <span id="tax">₹0.00</span>
                            </div>
                            <div class="total-line total">
                                <span>Total:</span>
                                <span id="finalTotal">₹0.00</span>
                            </div>
                        </div>
                        
                        <div class="security-badges">
                            <div class="security-badge">
                                <i class="fas fa-lock"></i>
                                <span>Secure Payment</span>
                            </div>
                            <div class="security-badge">
                                <i class="fas fa-shield-alt"></i>
                                <span>SSL Encrypted</span>
                            </div>
                        </div>
                        
                        <button class="complete-order-btn" onclick="processPayment()">
                            <i class="fas fa-credit-card"></i>
                            Complete Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add payment modal styles
    addPaymentStyles();
}

function updateOrderSummary(checkoutData) {
    const orderItems = document.getElementById('orderItems');
    const subtotal = document.getElementById('subtotal');
    const tax = document.getElementById('tax');
    const finalTotal = document.getElementById('finalTotal');
    
    // Update items
    orderItems.innerHTML = checkoutData.items.map(item => `
        <div class="order-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-quantity">Qty: ${item.quantity}</div>
            </div>
            <div class="item-price">₹${(item.price * item.quantity).toLocaleString()}</div>
        </div>
    `).join('');
    
    // Calculate totals
    const subtotalAmount = checkoutData.total;
    const taxAmount = Math.round(subtotalAmount * 0.18); // 18% GST
    const finalAmount = subtotalAmount + taxAmount;
    
    subtotal.textContent = `₹${subtotalAmount.toLocaleString()}`;
    tax.textContent = `₹${taxAmount.toLocaleString()}`;
    finalTotal.textContent = `₹${finalAmount.toLocaleString()}`;
}

function selectPaymentMethod(method) {
    // Update active payment method
    document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    // Show/hide payment forms
    document.getElementById('cardForm').style.display = method === 'card' ? 'block' : 'none';
    document.getElementById('upiForm').style.display = method === 'upi' ? 'block' : 'none';
    document.getElementById('walletForm').style.display = method === 'wallet' ? 'block' : 'none';
}

function formatCardNumber(input) {
    let value = input.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    input.value = formattedValue;
}

function formatExpiry(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    input.value = value;
}

function selectUPIApp(app) {
    document.querySelectorAll('.upi-app').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

function selectWallet(wallet) {
    document.querySelectorAll('.wallet-option').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

function processPayment() {
    // Validate form
    if (!validatePaymentForm()) {
        return;
    }
    
    // Show processing animation
    const btn = document.querySelector('.complete-order-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;
    
    // Simulate payment processing
    setTimeout(() => {
        // Generate order number
        const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
        
        // Store order in localStorage
        const orders = JSON.parse(localStorage.getItem('anufaOrders') || '[]');
        const checkoutData = cart.getCheckoutData();
        
        orders.push({
            id: orderNumber,
            date: new Date().toISOString(),
            items: checkoutData.items,
            total: checkoutData.total + Math.round(checkoutData.total * 0.18),
            status: 'Processing',
            paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
            customerEmail: document.getElementById('customerEmail').value,
            shippingAddress: {
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                postalCode: document.getElementById('postalCode').value,
                country: document.getElementById('country').value
            }
        });
        localStorage.setItem('anufaOrders', JSON.stringify(orders));
        
        // Clear cart
        cart.clearCart();
        
        // Close modal
        closePaymentModal();
        
        // Show success message
        showOrderSuccess(orderNumber);
        
    }, 3000); // 3 second delay to simulate processing
}

function validatePaymentForm() {
    const requiredFields = [
        'customerEmail', 'firstName', 'lastName', 'address', 'city', 'postalCode', 'country'
    ];
    
    for (const fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            field.focus();
            cart.showNotification('Please fill in all required fields!', 'error');
            return false;
        }
    }
    
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    if (paymentMethod === 'card') {
        const cardFields = ['cardNumber', 'expiryDate', 'cvv', 'cardHolder'];
        for (const fieldId of cardFields) {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                field.focus();
                cart.showNotification('Please fill in all card details!', 'error');
                return false;
            }
        }
    } else if (paymentMethod === 'upi') {
        const upiField = document.getElementById('upiId');
        if (!upiField.value.trim()) {
            upiField.focus();
            cart.showNotification('Please enter your UPI ID!', 'error');
            return false;
        }
    }
    
    return true;
}

function showOrderSuccess(orderNumber) {
    const successModal = document.createElement('div');
    successModal.className = 'success-modal';
    successModal.innerHTML = `
        <div class="success-content">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your order. Your order number is:</p>
            <div class="order-number">#${orderNumber}</div>
            <p>You will receive a confirmation email shortly.</p>
            <button class="btn btn-primary" onclick="closeSuccessModal()">Continue Shopping</button>
        </div>
    `;
    
    document.body.appendChild(successModal);
    
    // Auto close after 5 seconds
    setTimeout(() => {
        closeSuccessModal();
    }, 5000);
}

function closeSuccessModal() {
    const modal = document.querySelector('.success-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

function addPaymentStyles() {
    if (document.getElementById('paymentStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'paymentStyles';
    style.textContent = `
        .payment-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            padding: 20px;
            overflow-y: auto;
        }
        
        .payment-modal.active {
            opacity: 1;
            visibility: visible;
        }
        
        .payment-content {
            background: white;
            border-radius: 20px;
            width: 100%;
            max-width: 1000px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .payment-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem;
            border-bottom: 1px solid #eee;
        }
        
        .payment-header h2 {
            color: var(--primary-color);
            margin: 0;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .payment-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--text-light);
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .payment-close:hover {
            background: var(--bg-light);
            color: var(--secondary-color);
        }
        
        .payment-body {
            display: flex;
            gap: 2rem;
            padding: 2rem;
        }
        
        .payment-left {
            flex: 2;
        }
        
        .payment-right {
            flex: 1;
        }
        
        .payment-section {
            margin-bottom: 2rem;
        }
        
        .payment-section h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .form-group {
            margin-bottom: 1rem;
        }
        
        .form-row {
            display: flex;
            gap: 1rem;
        }
        
        .form-group input,
        .form-group select {
            width: 100%;
            padding: 1rem;
            border: 2px solid var(--border-color);
            border-radius: 10px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: var(--secondary-color);
            box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
        }
        
        .payment-methods {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .payment-method {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            border: 2px solid var(--border-color);
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .payment-method.active {
            border-color: var(--secondary-color);
            background: rgba(231, 76, 60, 0.05);
        }
        
        .payment-method input {
            margin-right: 1rem;
        }
        
        .method-info {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .card-logos {
            display: flex;
            gap: 0.5rem;
            font-size: 1.5rem;
        }
        
        .payment-form {
            margin-top: 1rem;
            padding: 1rem;
            background: var(--bg-light);
            border-radius: 10px;
        }
        
        .upi-apps {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .upi-app {
            flex: 1;
            padding: 1rem;
            background: white;
            border: 2px solid var(--border-color);
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
        
        .upi-app.active {
            border-color: var(--secondary-color);
            background: rgba(231, 76, 60, 0.1);
        }
        
        .wallet-options {
            display: flex;
            gap: 1rem;
        }
        
        .wallet-option {
            flex: 1;
            padding: 1rem;
            background: white;
            border: 2px solid var(--border-color);
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
        
        .wallet-option.active {
            border-color: var(--secondary-color);
            background: rgba(231, 76, 60, 0.1);
        }
        
        .order-summary {
            background: var(--bg-light);
            padding: 1.5rem;
            border-radius: 15px;
            position: sticky;
            top: 2rem;
        }
        
        .order-summary h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .order-items {
            max-height: 200px;
            overflow-y: auto;
            margin-bottom: 1rem;
        }
        
        .order-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--border-color);
        }
        
        .order-item img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 8px;
        }
        
        .item-details {
            flex: 1;
        }
        
        .item-name {
            font-weight: 600;
            font-size: 0.9rem;
            margin-bottom: 0.25rem;
        }
        
        .item-quantity {
            font-size: 0.8rem;
            color: var(--text-light);
        }
        
        .item-price {
            font-weight: 600;
            color: var(--secondary-color);
        }
        
        .order-totals {
            border-top: 1px solid var(--border-color);
            padding-top: 1rem;
            margin-bottom: 1rem;
        }
        
        .total-line {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }
        
        .total-line.total {
            font-weight: 700;
            font-size: 1.1rem;
            border-top: 1px solid var(--border-color);
            padding-top: 0.5rem;
            margin-top: 0.5rem;
            color: var(--secondary-color);
        }
        
        .security-badges {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .security-badge {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--text-light);
            font-size: 0.9rem;
        }
        
        .complete-order-btn {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(135deg, var(--secondary-color), #c0392b);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
        }
        
        .complete-order-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(231, 76, 60, 0.4);
        }
        
        .complete-order-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
        }
        
        .success-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 4000;
        }
        
        .success-content {
            background: white;
            padding: 3rem;
            border-radius: 20px;
            text-align: center;
            max-width: 500px;
        }
        
        .success-icon {
            font-size: 4rem;
            color: #27ae60;
            margin-bottom: 1rem;
        }
        
        .order-number {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--secondary-color);
            padding: 1rem;
            background: var(--bg-light);
            border-radius: 10px;
            margin: 1rem 0;
        }
        
        @media (max-width: 768px) {
            .payment-body {
                flex-direction: column;
                padding: 1rem;
            }
            
            .form-row {
                flex-direction: column;
            }
            
            .upi-apps,
            .wallet-options {
                flex-direction: column;
            }
            
            .payment-methods {
                gap: 0.5rem;
            }
            
            .payment-method {
                flex-direction: column;
                text-align: center;
            }
        }
    `;
    
    document.head.appendChild(style);
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
