# FurniHub E-Commerce Website - Complete Setup Guide

## 🎯 Project Overview

FurniHub is a fully functional, high-performance furniture e-commerce website built with:
- **HTML5** - Semantic markup
- **Bootstrap 5** - Responsive framework
- **CSS3** - Advanced styling with 3D effects
- **Vanilla JavaScript** - No dependencies needed

## 📂 Project Structure

```
f2/
│
├── index.html                    # Main homepage
├── README.md                     # Project documentation
├── SETUP_GUIDE.md               # This file
│
├── css/
│   └── style.css                # All styles, animations, 3D effects, responsive design
│
├── js/
│   └── script.js                # Product loading, cart management, filtering
│
├── pages/
│   ├── cart.html                # Shopping cart page with order summary
│   └── contact.html             # Contact form and FAQ page
│
└── assets/                       # (Future) Images, icons, media files
```

## 🚀 How to Use

### Quick Start
1. **Open the website**: Simply open `index.html` in any modern web browser
2. **No installation needed**: All dependencies are loaded via CDN
3. **Responsive**: Works on desktop, tablet, and mobile devices

### Navigation
- **Home**: Hero section with featured products
- **Products**: Full grid with category filtering
- **Cart**: Add products and view cart summary
- **Contact**: Get in touch with the company

## ✨ Key Features

### 1. **3D Animated Background**
- Gradient-shifting background with animation
- Pseudo-3D perspective effect using SVG patterns
- Smooth color transitions
- Performance optimized

### 2. **Responsive Design**
- **Desktop (>1024px)**: Full layout with all features
- **Tablet (768px-1024px)**: Optimized columns and spacing
- **Mobile (<768px)**: Single column, touch-friendly buttons
- **Small devices (320px+)**: Responsive typography and margins

### 3. **Product Management**
- **12 pre-loaded products** with categories:
  - Sofas
  - Chairs
  - Tables
  - Beds
- **Product filtering** by category
- **Product details modal** with:
  - Product images/emojis
  - Price and ratings
  - Description
  - Quantity selector
  - Add to cart button

### 4. **Shopping Cart**
- **Add to cart**: Two methods
  - Quick add (cart icon on product card)
  - Detailed view (view details → add to cart)
- **Cart persistence**: Saved in browser's localStorage
- **Cart summary page** with:
  - Full item list
  - Quantity adjustment
  - Coupon code support (SAVE10, SAVE20)
  - Order summary with tax, shipping, discount
  - Total price calculation

### 5. **Smooth Animations**
- Product card hover effects
- Icon animations
- Fade-in animations on page load
- Smooth scrolling between sections
- Loading animations

### 6. **Contact & Support**
- **Contact form** with validation
- **FAQ section** with accordion
- **Business hours** and contact information
- **Social media links**

## 🔧 Customization Guide

### Adding New Products

Edit `js/script.js` and add to the `products` array:

```javascript
{
    id: 13,
    name: 'Product Name',
    category: 'sofas',  // sofas, chairs, tables, beds
    price: 999,
    image: '🛋️',       // Emoji or HTML
    description: 'Product description',
    badge: 'Featured',  // Optional: Featured, Sale, New, Popular
    rating: 4.5
}
```

### Changing Colors

Edit `css/style.css`, update the `:root` CSS variables:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Accent color */
    --dark-color: #1f2937;         /* Dark text */
    --light-color: #f9fafb;        /* Light backgrounds */
    --accent-color: #ec4899;       /* Highlight color */
}
```

### Modifying Animations

Edit animation properties in `css/style.css`:

```css
/* Background animation duration */
.hero-bg-3d {
    animation: gradientShift 15s ease infinite;  /* Change 15s to desired duration */
}

/* Product card animation */
.product-card {
    animation: fadeInUp 0.6s ease-out;  /* Change 0.6s and ease-out */
}
```

### Adding Business Information

Update contact details in:
1. **index.html** - Footer contact section
2. **pages/contact.html** - Info boxes and contact form

## 🛒 Shopping Cart Features

### How It Works
1. Click "View Details" on any product
2. Select quantity (1-10)
3. Click "Add to Cart"
4. Cart count updates in navbar
5. Cart data saved automatically

### Coupon Codes (Demo)
- **SAVE10**: 10% discount
- **SAVE20**: 20% discount

Apply at checkout page (`pages/cart.html`)

### Order Summary Includes
- Subtotal
- Shipping ($0 if order > $500, otherwise $30)
- Tax (10%)
- Discount (from coupon)
- **Total**

## 📱 Responsive Breakpoints

```css
/* Desktop: >1024px */
- Full layout
- 4 products per row

/* Tablet: 768px-1024px */
- 3 products per row
- Adjusted spacing

/* Mobile: <768px */
- Single column layout
- Full-width buttons
- Optimized navigation
```

## ⚡ Performance Features

1. **CSS Grid & Flexbox**: Efficient layouts
2. **Hardware-accelerated animations**: Using transform and opacity
3. **Debounced events**: Resize and scroll optimized
4. **Lazy loading ready**: Structure supports image lazy loading
5. **CDN resources**: Fast loading of Bootstrap, Font Awesome
6. **Minimal dependencies**: Pure CSS and JavaScript

## 🔒 Security & Privacy

### Current Implementation
- All data stored locally (browser's localStorage)
- No data sent to external servers
- No user authentication

### For Production
Implement:
- [ ] Backend API (Node.js, Python, PHP)
- [ ] User authentication (JWT, OAuth)
- [ ] Secure payment gateway (Stripe, PayPal)
- [ ] HTTPS encryption
- [ ] Database for product and order data
- [ ] Admin dashboard

## 🌐 Browser Compatibility

| Browser | Support | Version |
|---------|---------|---------|
| Chrome | ✅ | Latest |
| Firefox | ✅ | Latest |
| Safari | ✅ | Latest |
| Edge | ✅ | Latest |
| IE 11 | ❌ | Not supported |

## 📊 Product Data

### Example Product Object
```javascript
{
    id: 1,                          // Unique identifier
    name: 'Product Name',           // Display name
    category: 'sofas',              // Category for filtering
    price: 2499,                    // Price in dollars
    image: '🛋️',                    // Emoji representation
    description: 'Description...',  // Product info
    badge: 'Featured',              // Display badge (optional)
    rating: 4.5                     // Star rating
}
```

## 🎨 Color Usage

- **Primary (#6366f1)**: Buttons, links, accents
- **Secondary (#8b5cf6)**: Gradients, hover states
- **Accent (#ec4899)**: Badges, highlights
- **Dark (#1f2937)**: Text, dark backgrounds
- **Light (#f9fafb)**: Backgrounds, light areas

## 🔗 External Resources Used

- **Bootstrap 5**: https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/
- **Font Awesome**: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/
- **Animate CSS**: https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/

## 🚀 Future Enhancements

### Phase 1 (Backend Integration)
- [ ] Node.js/Express server
- [ ] MongoDB database
- [ ] User authentication
- [ ] Product API endpoints

### Phase 2 (Features)
- [ ] User accounts and profiles
- [ ] Order history
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Advanced search and filters

### Phase 3 (Advanced)
- [ ] Real payment integration (Stripe)
- [ ] Email notifications
- [ ] Inventory management
- [ ] Admin dashboard
- [ ] Analytics and reporting

### Phase 4 (Mobile)
- [ ] Mobile app (React Native)
- [ ] Push notifications
- [ ] Offline functionality
- [ ] AR product preview

## 🐛 Troubleshooting

### Problem: Cart not saving
**Solution**: Check if localStorage is enabled in browser settings

### Problem: Images not displaying
**Solution**: Currently using emojis. To use real images, update product `image` field with URL paths

### Problem: Responsive design not working
**Solution**: Ensure viewport meta tag is present in HTML head

### Problem: Animations not smooth
**Solution**: Check browser's Hardware Acceleration setting, update animation duration in CSS

## 📝 File Purposes

| File | Purpose |
|------|---------|
| index.html | Main homepage with all sections |
| css/style.css | All styling, animations, 3D effects |
| js/script.js | Product loading, cart, filtering, interactivity |
| pages/cart.html | Shopping cart with order summary |
| pages/contact.html | Contact form and FAQ |

## 💡 Best Practices

1. **Always test responsiveness** using browser DevTools
2. **Clear localStorage** when testing: Open DevTools → Application → Local Storage → Clear
3. **Check console** for any JavaScript errors
4. **Use keyboard navigation** (Tab key) for accessibility
5. **Test on real mobile devices** for best results

## 📞 Support

For customization help or questions:
1. Check README.md for general info
2. Review comments in js/script.js and css/style.css
3. Test in browser DevTools
4. Refer to Bootstrap docs: https://getbootstrap.com/docs/

## 🎓 Learning Resources

- **HTML5**: https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS3**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **Bootstrap**: https://getbootstrap.com/docs/5.0/
- **Web Design**: https://developer.mozilla.org/en-US/docs/Learn/CSS

## ✅ Testing Checklist

- [ ] All products display correctly
- [ ] Filtering works for all categories
- [ ] Add to cart functionality works
- [ ] Cart persists after page refresh
- [ ] Responsive design on mobile
- [ ] All links navigate correctly
- [ ] Animations are smooth
- [ ] Form validation works
- [ ] No console errors

---

**Version**: 1.0
**Last Updated**: 2024
**Author**: FurniHub Development Team

Enjoy building with FurniHub! 🛋️✨
