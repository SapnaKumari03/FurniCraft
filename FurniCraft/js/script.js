// ========================
// Product Data moved to js/product-data.js
// ========================
/*
const products = [
    {
        id: 1,
        name: 'Luxury Leather Sofa',
        category: 'sofas',
        price: 2499,
        image: 'pages/FurniCraftIMG/sofa4.jpg',
        description: 'Premium leather sofa with perfect comfort and style. Features deep cushioning and ergonomic design.',
        badge: 'Featured',
        rating: 4.5
    },
    {
        id: 2,
        name: 'Ergonomic Office Chair',
        category: 'chairs',
        price: 449,
        image: 'pages/FurniCraftIMG/officechair3.jpg',
        description: 'Comfortable office chair with lumbar support and adjustable height. Perfect for long working hours.',
        badge: 'Popular',
        rating: 4.3
    },
    {
        id: 3,
        name: 'Modern Coffee Table',
        category: 'tables',
        price: 399,
        image: 'pages/FurniCraftIMG/DET-1.jpg',
        description: 'Sleek glass and wood coffee table. Minimalist design with maximum functionality.',
        badge: 'New',
        rating: 4.2
    },
    {
        id: 4,
        name: 'Queen Size Platform Bed',
        category: 'beds',
        price: 1299,
        image: 'pages/FurniCraftIMG/bed3.jpg',
        description: 'Spacious queen bed with built-in storage. Perfect for modern bedrooms.',
        badge: 'Sale',
        rating: 4.6
    },
    {
        id: 5,
        name: 'Velvet Accent Chair',
        category: 'chairs',
        price: 599,
        image: 'pages/FurniCraftIMG/chair2.jpg',
        description: 'Elegant velvet chair with gold legs. Adds luxury to any room.',
        badge: 'Featured',
        rating: 4.4
    },
    {
        id: 6,
        name: 'Sectional Sofa Set',
        category: 'sofas',
        price: 3299,
        image: 'pages/FurniCraftIMG/sofa10.jpg',
        description: 'Large sectional sofa perfect for family gatherings. Modular design for flexibility.',
        badge: 'Sale',
        rating: 4.7
    },
    {
        id: 7,
        name: 'Marble Dining Table',
        category: 'tables',
        price: 899,
        image: 'pages/FurniCraftIMG/DT LuxuryMarble-1.jpg',
        description: 'Elegant marble top dining table with solid wood base. Seats 6-8 people.',
        badge: 'New',
        rating: 4.5
    },
    {
        id: 8,
        name: 'King Size Bed Frame',
        category: 'beds',
        price: 1699,
        image: 'pages/FurniCraftIMG/King size Bed image.jpg',
        description: 'Sturdy king size frame with adjustable slats and storage drawers.',
        badge: null,
        rating: 4.4
    },
    {
        id: 9,
        name: 'Lounge Chaise Chair',
        category: 'chairs',
        price: 749,
        image: 'pages/FurniCraftIMG/chair1.jpg',
        description: 'Comfortable chaise lounge for relaxation. Perfect reading spot.',
        badge: 'Popular',
        rating: 4.3
    },
    {
        id: 10,
        name: 'Round Dining Table',
        category: 'tables',
        price: 349,
        image: 'pages/FurniCraftIMG/DRoundT-2.jpg',
        description: 'Compact round table with a polished contemporary profile. Great for dining nooks and apartments.',
        badge: null,
        rating: 4.1
    },
    {
        id: 11,
        name: 'Twin Bed with Storage',
        category: 'beds',
        price: 699,
        image: 'pages/FurniCraftIMG/bed10.jpg',
        description: 'Space-saving twin bed with under-bed storage. Perfect for kids rooms.',
        badge: 'Sale',
        rating: 4.2
    },
    {
        id: 12,
        name: 'Reclining Sofa',
        category: 'sofas',
        price: 1899,
        image: 'pages/FurniCraftIMG/sofa9.jpg',
        description: 'Modern reclining sofa with motorized controls and cup holders.',
        badge: 'Featured',
        rating: 4.6
    }
];
*/

// ========================
// Global Variables
// ========================
let cart = [];
let currentFilter = 'all';
let selectedProduct = null;
const productModal = new bootstrap.Modal(document.getElementById('productModal'));

function formatPrice(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}

function formatCategory(category) {
    const labels = {
        sofas: 'Sofa',
        beds: 'Bed',
        dining: 'Dining',
        chairs: 'Chair',
        wardrobes: 'Wardrobe'
    };

    return labels[category] || category;
}

// ========================
// Initialize on Page Load
// ========================
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    loadCartFromLocalStorage();
    updateCartDisplay();
});

// ========================
// Product Loading & Rendering
// ========================
function loadProducts() {
    displayFeaturedProducts();
    displayAllProducts();
}

function displayFeaturedProducts() {
    const featured = products.slice(0, 4);
    const container = document.getElementById('featuredProducts');
    container.innerHTML = featured.map(product => createProductCard(product)).join('');
}

function displayAllProducts() {
    const container = document.getElementById('productsGrid');
    const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);
    
    container.innerHTML = filtered.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const ratingStars = generateRatingStars(product.rating);
    const badge = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
    
    return `
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="product-card" data-product-id="${product.id}" onclick="openProductPage(${product.id})">
                <div class="product-image">
                    ${badge}
                    <img src="${product.image}" alt="${product.name}" loading="lazy" class="product-photo">
                </div>
                <div class="product-info">
                    <span class="product-category">${formatCategory(product.category)}</span>
                    <h5 class="product-name">${product.name}</h5>
                    <h4 class="product-price">${formatPrice(product.price)}</h4>
                    <div class="product-rating">
                        ${ratingStars} (${Math.floor(Math.random() * 100) + 50} reviews)
                    </div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-actions">
                        <button class="btn-view" onclick="event.stopPropagation(); openProductPage(${product.id})">View Details</button>
                        <button class="btn-cart" onclick="event.stopPropagation(); quickAddToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star text-warning"></i>';
        } else if (i - rating < 1) {
            stars += '<i class="fas fa-star-half text-warning"></i>';
        } else {
            stars += '<i class="far fa-star text-warning"></i>';
        }
    }
    return stars;
}

// ========================
// Filter Functionality
// ========================
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        displayAllProducts();
    });
});

// ========================
// Product Modal & Details
// ========================
function openProductPage(productId) {
    window.location.href = `pages/product-detail.html?id=${productId}`;
}

function viewProduct(productId) {
    openProductPage(productId);
    return;
    selectedProduct = products.find(p => p.id === productId);
    
    if (selectedProduct) {
        document.getElementById('modalProductName').textContent = selectedProduct.name;
        document.getElementById('modalProductPrice').textContent = formatPrice(selectedProduct.price);
        document.getElementById('modalProductCategory').textContent = formatCategory(selectedProduct.category).toUpperCase();
        document.getElementById('modalProductDescription').textContent = selectedProduct.description;
        document.getElementById('modalProductImage').src = selectedProduct.image;
        document.getElementById('modalProductImage').alt = selectedProduct.name;
        document.getElementById('qty').value = 1;
        
        productModal.show();
    }
}

function increaseQty() {
    const input = document.getElementById('qty');
    input.value = Math.min(parseInt(input.value) + 1, 10);
}

function decreaseQty() {
    const input = document.getElementById('qty');
    input.value = Math.max(parseInt(input.value) - 1, 1);
}

// ========================
// Shopping Cart Functions
// ========================
function addToCart() {
    if (!selectedProduct) return;
    
    const quantity = parseInt(document.getElementById('qty').value);
    const existingItem = cart.find(item => item.id === selectedProduct.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            quantity: quantity
        });
    }
    
    saveCartToLocalStorage();
    updateCartDisplay();
    productModal.hide();
    showNotification(`${selectedProduct.name} added to cart!`);
}

function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    saveCartToLocalStorage();
    updateCartDisplay();
    showNotification(`${product.name} added to cart!`);
}

function updateCartDisplay() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    
    if (!cartCount) return; // Element might not exist on all pages
    
    if (count > 0) {
        cartCount.textContent = count;
        cartCount.style.display = 'block';
    } else {
        cartCount.style.display = 'none';
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// ========================
// Notification System
// ========================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed bottom-0 end-0 m-3';
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    notification.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ========================
// Smooth Scrolling
// ========================
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

// ========================
// Search Functionality
// ========================
function setupEventListeners() {
    // Cart icon click - navigate to cart page
    document.getElementById('cartIcon').addEventListener('click', function(e) {
        // Cart link now directs to pages/cart.html, no need for sidebar
    });

    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        showNotification('✓ Thank you for subscribing!');
        this.reset();
    });

    // Product search (if implemented)
    setupSearch();
}

function setupSearch() {
    // Placeholder for search functionality
    const searchIcon = document.querySelector('a[href="#"]');
    if (searchIcon) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Search functionality ready to implement');
        });
    }
}

// ========================
// Cart Sidebar (Expandable)
// ========================
function showCartSidebar() {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }

    const cartSummary = cart.map(item => `
        <div class="d-flex justify-content-between align-items-center mb-2 p-2 border-bottom">
            <div>
                <strong>${item.name}</strong><br>
                <small>Qty: ${item.quantity}</small>
            </div>
            <div class="text-end">
                <div>${formatPrice(item.price * item.quantity)}</div>
                <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const cartModal = `
        <div class="modal fade" id="cartModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-gradient">
                        <h5 class="modal-title"><i class="fas fa-shopping-cart me-2"></i>Shopping Cart</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body" style="max-height: 400px; overflow-y: auto;">
                        ${cartSummary}
                    </div>
                    <div class="modal-footer border-top bg-light">
                        <div class="w-100 d-flex justify-content-between align-items-center">
                            <h5 class="mb-0"><strong>Total: ${formatPrice(total)}</strong></h5>
                            <div>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue Shopping</button>
                                <button type="button" class="btn btn-primary ms-2" onclick="checkout()">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', cartModal);
    const modal = new bootstrap.Modal(document.getElementById('cartModal'));
    modal.show();

    document.getElementById('cartModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToLocalStorage();
    updateCartDisplay();
    location.reload(); // Refresh to update cart display
}

// ========================
// Checkout
// ========================
function checkout() {
    showNotification('Proceeding to checkout... (Demo)');
    console.log('Cart Items:', cart);
    // In a real application, this would redirect to checkout page
    setTimeout(() => {
        cart = [];
        saveCartToLocalStorage();
        updateCartDisplay();
        location.reload();
    }, 2000);
}

// ========================
// Performance Optimization
// ========================
// Lazy loading for images
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[src=""]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Debounce function for window resize
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle responsive adjustments
window.addEventListener('resize', debounce(function() {
    console.log('Window resized - responsive adjustments applied');
}, 250));

// ========================
// Additional Features
// ========================

// Smooth fade in for page load
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Escape key to close modals
    if (event.key === 'Escape') {
        productModal.hide();
    }
    // Ctrl + Enter to add to cart (in modal)
    if (event.ctrlKey && event.key === 'Enter' && document.querySelector('#productModal.show')) {
        addToCart();
    }
});

console.log('FurniCraft E-Commerce Platform Loaded Successfully! 🛋️');

