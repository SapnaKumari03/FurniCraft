# FurniHub - Quick Reference & Code Snippets

A collection of common customization code snippets and quick references for FurniHub.

## 🎨 Color Scheme Customization

### Current Colors (in `css/style.css`)
```css
:root {
    --primary-color: #6366f1;      /* Indigo - Main color */
    --secondary-color: #8b5cf6;    /* Purple - Accents */
    --dark-color: #1f2937;         /* Charcoal - Text */
    --light-color: #f9fafb;        /* Off-white - Backgrounds */
    --accent-color: #ec4899;       /* Pink - Badges */
}
```

### Pre-made Color Schemes

#### Warm & Cozy
```css
:root {
    --primary-color: #d97706;      /* Amber */
    --secondary-color: #f59e0b;    /* Orange */
    --accent-color: #ea580c;       /* Red-orange */
}
```

#### Professional Blue
```css
:root {
    --primary-color: #0ea5e9;      /* Sky Blue */
    --secondary-color: #0284c7;    /* Blue */
    --accent-color: #dc2626;       /* Red */
}
```

#### Luxury Green
```css
:root {
    --primary-color: #10b981;      /* Emerald */
    --secondary-color: #059669;    /* Green */
    --accent-color: #7c3aed;       /* Violet */
}
```

#### Modern Gray
```css
:root {
    --primary-color: #64748b;      /* Slate */
    --secondary-color: #475569;    /* Dark Slate */
    --accent-color: #ec4899;       /* Pink */
}
```

## 📝 Adding New Products

### Simple Addition (via JavaScript)
Edit `js/script.js`, add to `products` array:

```javascript
{
    id: 13,
    name: 'Premium Bed Set',
    category: 'beds',
    price: 1999,
    image: '🛏️',
    description: 'Luxurious bed set with premium materials',
    badge: 'New',
    rating: 4.8
},
{
    id: 14,
    name: 'Wooden Bookshelf',
    category: 'shelves',  // Add new category
    price: 299,
    image: '📚',
    description: 'Elegant wooden storage solution',
    badge: null,
    rating: 4.5
}
```

### Import from Database (Advanced)
```javascript
// Fetch products from API instead of hardcoding
async function loadProductsFromAPI() {
    try {
        const response = await fetch('/api/products');
        const data = await response.json();
        products = data;
        displayAllProducts();
    } catch (error) {
        console.error('Error loading products:', error);
    }
}
```

## 🔤 Changing Text & Brand Names

### In `index.html`
```html
<!-- Change brand name -->
<a class="navbar-brand" href="#">YourBrand</a>

<!-- Update hero text -->
<h1 class="display-4">Your Heading Here</h1>
<p class="lead">Your tagline here</p>

<!-- Update footer text -->
<p>&copy; 2024 YourCompany. All rights reserved.</p>
```

### In `pages/contact.html` & `about.html`
```html
<!-- Update company info -->
<p>123 Your Street<br>Your City, State 12345</p>
<p>+1 (555) 123-4567<br>your-email@company.com</p>
```

## 🎬 Animation Speed Adjustments

### In `css/style.css`

```css
/* Slow down hero background (default 15s) */
.hero-bg-3d {
    animation: gradientShift 25s ease infinite; /* Slower */
}

/* Speed up product cards (default 0.6s) */
.product-card {
    animation: fadeInUp 0.3s ease-out; /* Faster */
}

/* Adjust float animation (default 4s) */
.furniture-showcase::before {
    animation: float 6s ease-in-out infinite; /* Slower bounce */
}

/* Product hover effect */
.product-card:hover {
    transition: all 0.2s ease; /* Faster hover effect */
}
```

## 🏪 E-commerce Features

### Add Coupon Codes
In `pages/cart.html`, update the `applyCoupon()` function:

```javascript
function applyCoupon() {
    const code = document.getElementById('couponCode').value.toUpperCase();
    const coupons = {
        'SAVE10': 0.10,      // 10% off
        'SAVE20': 0.20,      // 20% off
        'FURNITURE25': 0.25, // 25% off
        'WELCOME15': 0.15    // Welcome 15% off
    };
    
    if (code in coupons) {
        discountAmount = getSubtotal() * coupons[code];
        alert(`Coupon applied! ${coupons[code] * 100}% discount`);
    } else {
        alert('Invalid coupon code');
        discountAmount = 0;
    }
    updateSummary();
}
```

### Add Loyalty Points
```javascript
function addLoyaltyPoints(purchaseAmount) {
    const points = Math.floor(purchaseAmount / 10); // 1 point per $10
    const currentPoints = parseInt(localStorage.getItem('loyaltyPoints') || 0);
    localStorage.setItem('loyaltyPoints', currentPoints + points);
    console.log(`Added ${points} loyalty points!`);
}
```

### Adjust Shipping Rates
In `pages/cart.html`, `updateSummary()` function:

```javascript
function updateSummary() {
    const subtotal = getSubtotal();
    
    // Shipping based on subtotal
    let shipping = 0;
    if (subtotal > 1000) {
        shipping = 0;        // Free
    } else if (subtotal > 500) {
        shipping = 15;       // Reduced
    } else if (subtotal > 200) {
        shipping = 25;       // Standard
    } else {
        shipping = 40;       // Base rate
    }
    
    // Rest of calculation...
}
```

## 📱 Responsive Design Tweaks

### Add Mobile-Only Styles
```css
/* Hide on mobile */
@media (max-width: 576px) {
    .desktop-only {
        display: none;
    }
}

/* Show only on mobile */
@media (max-width: 576px) {
    .mobile-only {
        display: block;
    }
}

/* Adjust font sizes for mobile */
@media (max-width: 576px) {
    h1 { font-size: 1.5rem; }
    h2 { font-size: 1.3rem; }
    .lead { font-size: 0.95rem; }
}
```

## 🔔 Add Toast Notifications

Enhance the notification system:

```javascript
function showNotification(message, type = 'success', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed bottom-0 end-0 m-3`;
    notification.style.zIndex = '9999';
    notification.style.minWidth = '300px';
    notification.style.animation = 'slideIn 0.3s ease-in';
    
    const icons = {
        'success': 'fas fa-check-circle',
        'warning': 'fas fa-exclamation-triangle',
        'error': 'fas fa-times-circle',
        'info': 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <i class="${icons[type]} me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, duration);
}

// Usage examples
showNotification('Order placed successfully!', 'success');
showNotification('Please check your email', 'warning');
showNotification('Payment failed', 'error');
showNotification('New products available', 'info');
```

## 🔐 Form Validation

### Enhanced Contact Form Validation
```javascript
function validateContactForm(form) {
    const email = form.email.value;
    const phone = form.phone.value;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return false;
    }
    
    // Phone validation (optional if provided)
    if (phone) {
        const phoneRegex = /^[\d\-\+\(\)\s]+$/;
        if (!phoneRegex.test(phone)) {
            alert('Invalid phone format');
            return false;
        }
    }
    
    // Message validation
    if (form.message.value.length < 10) {
        alert('Message must be at least 10 characters');
        return false;
    }
    
    return true;
}
```

## 🌙 Dark Mode Toggle

Add to `css/style.css`:
```css
body.dark-mode {
    background-color: #1f2937;
    color: #f9fafb;
}

body.dark-mode .product-card {
    background-color: #374151;
    color: #f9fafb;
}

body.dark-mode .navbar-custom {
    background: linear-gradient(135deg, #374151, #1f2937);
}
```

Add to `js/script.js`:
```javascript
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load dark mode preference on startup
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
```

## 🔍 Search Functionality

Add to `js/script.js`:
```javascript
function searchProducts(query) {
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );
    
    const container = document.getElementById('productsGrid');
    if (filtered.length === 0) {
        container.innerHTML = '<p class="text-center">No products found</p>';
    } else {
        container.innerHTML = filtered.map(p => createProductCard(p)).join('');
        attachCardListeners();
    }
}

// Add search input listener
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[placeholder*="search"]');
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            searchProducts(e.target.value);
        });
    }
});
```

## 📊 Analytics Integration

### Google Analytics
```javascript
// Add to index.html before closing </head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

// Track custom events
function trackEvent(category, action, label) {
    gtag('event', action, {
        'event_category': category,
        'event_label': label
    });
}

// Usage
trackEvent('engagement', 'add_to_cart', 'Product Name');
trackEvent('purchase', 'checkout', 'Total: $500');
```

## 🚀 Performance Tips

### Optimize Images
```html
<!-- Use responsive images -->
<img src="image.jpg" 
     srcset="image-small.jpg 480w, image-medium.jpg 800w, image-large.jpg 1200w"
     sizes="(max-width: 480px) 100vw, 50vw"
     alt="Product">
```

### Lazy Load Images
```javascript
// In js/script.js
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
```

## 🔗 External API Integration

### Add Payment Gateway (Stripe)
```html
<!-- In pages/cart.html -->
<script src="https://js.stripe.com/v3/"></script>

<script>
const stripe = Stripe('pk_test_YOUR_PUBLIC_KEY');
const elements = stripe.elements();
const cardElement = elements.create('card');

function processPayment() {
    stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: cardElement
        }
    }).then(function(result) {
        if (result.error) {
            alert('Payment failed: ' + result.error.message);
        } else {
            alert('Payment successful!');
        }
    });
}
</script>
```

### Add Email Service (EmailJS)
```javascript
// In js/script.js
emailjs.init('YOUR_PUBLIC_KEY');

function sendEmail(name, email, message) {
    emailjs.send('service_id', 'template_id', {
        to_email: 'support@furnihub.com',
        from_name: name,
        from_email: email,
        message: message
    }).then(response => {
        console.log('Email sent successfully');
    });
}
```

## 📈 SEO Optimization

### Add Meta Tags
```html
<!-- In index.html <head> -->
<meta name="description" content="Premium furniture e-commerce with 3D design and responsive UI">
<meta name="keywords" content="furniture, sofas, chairs, tables, beds, e-commerce">
<meta name="author" content="FurniHub">
<meta property="og:title" content="FurniHub - Premium Furniture">
<meta property="og:description" content="Shop high-quality furniture...">
<meta property="og:image" content="images/og-image.jpg">
<meta property="og:url" content="https://furnihub.com">
```

### Create Sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://furnihub.com</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://furnihub.com/pages/about.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://furnihub.com/pages/contact.html</loc>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 💡 Quick Tips

1. **Always test changes locally first**
2. **Use browser DevTools (F12) to debug**
3. **Keep backups of original files**
4. **Test responsive design on mobile**
5. **Clear browser cache when testing CSS changes**
6. **Use version control (Git) to track changes**
7. **Minify CSS/JS before production**
8. **Optimize images for web**

## 🆘 Common Errors & Solutions

| Error | Solution |
|-------|----------|
| Cart not saving | Check localStorage in settings |
| Images not showing | Verify file paths and CORS |
| Animations stuttering | Enable GPU acceleration in browser |
| Links broken | Use relative paths, not absolute |
| Styles not applying | Clear browser cache, check specificity |

---

**Happy customizing! 🎨**

Version 1.0 | Last Updated: 2024
