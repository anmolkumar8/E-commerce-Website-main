// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize featured products on homepage
    if (document.getElementById('featuredProducts')) {
        loadFeaturedProducts();
    }

    // Initialize newsletter form
    initializeNewsletter();

    // Initialize scroll effects
    initializeScrollEffects();

    // Initialize lazy loading
    initializeLazyLoading();
});

// Load featured products
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    const featuredProducts = getFeaturedProducts();
    
    container.innerHTML = featuredProducts.map(product => `
        <div class="product-card animate-fade-up">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">₹${product.price.toLocaleString()}</div>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.rating})</span>
                </div>
                <div class="product-actions">
                    <button class="btn-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn-wishlist" onclick="addToWishlist(${product.id})">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Search functionality
function toggleSearch() {
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    
    if (searchOverlay.classList.contains('active')) {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => searchInput.focus(), 100);
    }
}

// User menu functionality
function toggleUserMenu() {
    const userMenu = document.getElementById('userMenu');
    userMenu.classList.toggle('active');
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.user-btn') && !e.target.closest('.user-menu')) {
            userMenu.classList.remove('active');
        }
    });
}

// Filter by category (for homepage categories)
function filterByCategory(category) {
    // Redirect to shop page with category filter
    window.location.href = `shop.html?category=${category}`;
}

// Newsletter form
function initializeNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;

    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.newsletter-input').value;
        
        if (validateEmail(email)) {
            // Simulate newsletter subscription
            cart.showNotification('Successfully subscribed to newsletter!', 'success');
            this.reset();
            
            // Store email in localStorage (in real app, this would go to server)
            const subscribers = JSON.parse(localStorage.getItem('anufaSubscribers') || '[]');
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem('anufaSubscribers', JSON.stringify(subscribers));
            }
        } else {
            cart.showNotification('Please enter a valid email address!', 'error');
        }
    });
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Scroll effects
function initializeScrollEffects() {
    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = 'none';
            }
            
            lastScroll = currentScroll;
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.feature-card, .category-card, .product-card').forEach(el => {
        observer.observe(el);
    });
}

// Lazy loading for images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Search functionality for the search overlay
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            
            if (query.length > 2) {
                searchTimeout = setTimeout(() => {
                    performSearch(query);
                }, 300);
            } else {
                clearSearchResults();
            }
        });

        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = this.value.trim();
                if (query) {
                    window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }
});

// Perform search and show suggestions
function performSearch(query) {
    const results = searchProducts(query).slice(0, 5); // Show top 5 results
    
    // Create search suggestions dropdown
    let dropdown = document.getElementById('searchDropdown');
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = 'searchDropdown';
        dropdown.className = 'search-dropdown';
        dropdown.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            max-height: 300px;
            overflow-y: auto;
            z-index: 1000;
        `;
        document.querySelector('.search-container').appendChild(dropdown);
    }

    if (results.length > 0) {
        dropdown.innerHTML = results.map(product => `
            <div class="search-result-item" onclick="selectSearchResult(${product.id})" style="
                padding: 12px;
                border-bottom: 1px solid #eee;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 12px;
                transition: background-color 0.2s;
            " onmouseover="this.style.backgroundColor='#f8f9fa'" onmouseout="this.style.backgroundColor='white'">
                <img src="${product.image}" alt="${product.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px;">
                <div>
                    <div style="font-weight: 500; color: #2c3e50;">${product.name}</div>
                    <div style="font-size: 14px; color: #7f8c8d;">₹${product.price.toLocaleString()}</div>
                </div>
            </div>
        `).join('') + `
            <div class="search-see-all" onclick="seeAllResults('${query}')" style="
                padding: 12px;
                text-align: center;
                color: #e74c3c;
                font-weight: 500;
                cursor: pointer;
                border-top: 2px solid #eee;
            " onmouseover="this.style.backgroundColor='#f8f9fa'" onmouseout="this.style.backgroundColor='white'">
                See all results for "${query}"
            </div>
        `;
        dropdown.style.display = 'block';
    } else {
        dropdown.innerHTML = `
            <div style="padding: 20px; text-align: center; color: #7f8c8d;">
                No products found for "${query}"
            </div>
        `;
        dropdown.style.display = 'block';
    }
}

// Select search result
function selectSearchResult(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// See all search results
function seeAllResults(query) {
    window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
}

// Clear search results
function clearSearchResults() {
    const dropdown = document.getElementById('searchDropdown');
    if (dropdown) {
        dropdown.style.display = 'none';
    }
}

// Mobile menu functionality (for responsive design)
function initializeMobileMenu() {
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: var(--text-color);
        cursor: pointer;
        padding: 0.5rem;
    `;

    // Add mobile styles
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block !important;
            }
            .navbar {
                display: none !important;
            }
        }
    `;
    document.head.appendChild(mobileStyles);

    // Insert mobile menu button
    const navActions = document.querySelector('.nav-actions');
    if (navActions) {
        navActions.insertBefore(mobileMenuBtn, navActions.firstChild);
    }

    // Mobile menu toggle functionality
    mobileMenuBtn.addEventListener('click', function() {
        const navbar = document.querySelector('.navbar');
        navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
        navbar.style.position = 'absolute';
        navbar.style.top = '100%';
        navbar.style.left = '0';
        navbar.style.right = '0';
        navbar.style.background = 'white';
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        navbar.style.padding = '1rem';
    });
}

// Initialize mobile menu on load
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Back to top button
function initializeBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--secondary-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 18px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
    `;

    document.body.appendChild(backToTop);

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', function() {
    initializeBackToTop();
});

// Performance optimization - defer non-critical JavaScript
function deferNonCriticalJS() {
    // Add any non-critical JavaScript here
    setTimeout(() => {
        // Initialize analytics, social media widgets, etc.
        console.log('Non-critical JS loaded');
    }, 1000);
}

// Call deferred JS after page load
window.addEventListener('load', deferNonCriticalJS);

// Coming soon functionality
function showComingSoon(feature) {
    cart.showNotification(`${feature} feature coming soon! Stay tuned for updates.`, 'info');
}

// Show all products functionality
function showAllProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    // Load all products instead of just featured ones
    const allProducts = getAllProducts().slice(0, 20); // Show first 20 products
    
    container.innerHTML = allProducts.map(product => `
        <div class="product-card animate-fade-up">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">₹${product.price.toLocaleString()}</div>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>(${product.rating})</span>
                </div>
                <div class="product-actions">
                    <button class="btn-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="btn-wishlist" onclick="addToWishlist(${product.id})">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update button text
    const button = document.querySelector('[onclick="showAllProducts()"]');
    if (button) {
        button.textContent = 'Show Less';
        button.setAttribute('onclick', 'loadFeaturedProducts(); this.textContent="View All Products"; this.setAttribute("onclick", "showAllProducts()");');
    }
    
    cart.showNotification('Showing all products!', 'success');
}

// Video modal functionality
function showVideoModal() {
    // Create and show video modal
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div class="video-container" style="
            position: relative;
            max-width: 800px;
            width: 90%;
            background: white;
            border-radius: 12px;
            padding: 2rem;
            text-align: center;
        ">
            <button onclick="closeVideoModal()" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 1.5rem;
                color: #7f8c8d;
                cursor: pointer;
            ">
                <i class="fas fa-times"></i>
            </button>
            <h2 style="margin-bottom: 1rem; color: var(--primary-color);">Our Story</h2>
            <div style="
                width: 100%;
                height: 300px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 2rem 0;
                color: white;
                font-size: 1.2rem;
            ">
                <div>
                    <i class="fas fa-play-circle" style="font-size: 4rem; margin-bottom: 1rem; display: block;"></i>
                    <p>Video Coming Soon!</p>
                    <p style="font-size: 0.9rem; opacity: 0.8;">Experience our brand story through an immersive video journey.</p>
                </div>
            </div>
            <p style="color: var(--text-light); line-height: 1.6;">
                At ANUFA, we believe fashion is more than clothing—it's about expressing your unique identity. 
                Our premium collection combines quality craftsmanship with contemporary design to help you 
                elevate your style journey.
            </p>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Fade in
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideoModal();
        }
    });
}

// Close video modal
function closeVideoModal() {
    const modal = document.querySelector('.video-modal');
    if (modal) {
        modal.style.opacity = '0';
        document.body.style.overflow = '';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Update filter by category to show filtered products
function filterByCategory(category) {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    const filteredProducts = getAllProducts().filter(product => 
        product.category.toLowerCase().includes(category.toLowerCase())
    ).slice(0, 12);
    
    if (filteredProducts.length > 0) {
        container.innerHTML = filteredProducts.map(product => `
            <div class="product-card animate-fade-up">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">₹${product.price.toLocaleString()}</div>
                    <div class="product-rating">
                        ${generateStars(product.rating)}
                        <span>(${product.rating})</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="btn-wishlist" onclick="addToWishlist(${product.id})">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Scroll to products section
        document.getElementById('featured').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Update section title
        const sectionTitle = document.querySelector('#featured .section-title');
        if (sectionTitle) {
            const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
            sectionTitle.textContent = `${categoryName}'s Collection`;
            
            // Add reset button
            if (!document.querySelector('.reset-filter')) {
                const resetBtn = document.createElement('button');
                resetBtn.className = 'btn btn-secondary reset-filter';
                resetBtn.textContent = 'Show All Products';
                resetBtn.style.marginTop = '1rem';
                resetBtn.onclick = () => {
                    loadFeaturedProducts();
                    sectionTitle.textContent = 'Featured Products';
                    resetBtn.remove();
                };
                sectionTitle.after(resetBtn);
            }
        }
        
        cart.showNotification(`Showing ${categoryName}'s products!`, 'success');
    } else {
        cart.showNotification(`No products found in ${category} category.`, 'error');
    }
}
