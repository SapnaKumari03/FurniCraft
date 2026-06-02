# FurniHub - Premium Furniture E-Commerce Website

A modern, high-performance furniture e-commerce website built with HTML, Bootstrap, and JavaScript featuring an attractive 3D background, responsive design, and full shopping cart functionality.

## 🎨 Features

### Design & UX
- **3D Animated Background**: Gradient-shifting background with pseudo-3D effects
- **Responsive Design**: Fully mobile-optimized (works on all devices)
- **Modern UI**: Glass-morphism effects, smooth animations, and attractive color palette
- **Smooth Scrolling**: Elegant scroll behavior throughout the site
- **Product Cards**: Hover effects, ratings, and quick-view functionality

### Functionality
- **Shopping Cart**: Add/remove products with local storage persistence
- **Product Filtering**: Filter by category (Sofas, Chairs, Tables, Beds)
- **Product Details Modal**: View detailed product information
- **Search & Navigation**: Easy product discovery
- **Newsletter Signup**: Email subscription functionality
- **Performance Optimized**: Lazy loading and debounced events

### Technical
- **Bootstrap 5**: Professional responsive framework
- **Font Awesome Icons**: Rich icon library
- **Animate CSS**: Smooth animations
- **Local Storage**: Cart persistence across sessions
- **ES6 JavaScript**: Modern, clean code

## 📁 Project Structure

```
f2/
├── index.html              # Main homepage
├── css/
│   └── style.css          # All styles and 3D effects
├── js/
│   └── script.js          # Core functionality and interactivity
├── assets/                # Images and media (expandable)
├── pages/                 # Additional pages (expandable)
└── README.md              # This file
```

## 🚀 Getting Started

### Installation
1. Navigate to the project directory
2. Open `index.html` in your web browser
3. No installation or build process required!

### Browser Support
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛒 Shopping Cart Features

- **Add to Cart**: Both quick add and detailed view options
- **Quantity Management**: Increase/decrease quantity in modal
- **Cart Persistence**: Cart data saved in browser's localStorage
- **Cart Summary**: View all items and total price
- **Remove Items**: Delete products from cart
- **Notifications**: User feedback for all actions

## 🎯 Product Categories

1. **Sofas** - Luxury and reclining options
2. **Chairs** - Office, accent, and lounge chairs
3. **Tables** - Coffee, dining, and console tables
4. **Beds** - Twin, Queen, and King size options

## 🎨 Color Palette

- **Primary**: #6366f1 (Indigo)
- **Secondary**: #8b5cf6 (Violet)
- **Accent**: #ec4899 (Pink)
- **Dark**: #1f2937 (Slate)
- **Light**: #f9fafb (Off-white)

## ⚡ Performance Features

- **Optimized Animations**: Hardware-accelerated CSS animations
- **Lazy Loading**: Images load only when visible
- **Debounced Events**: Resize and scroll events optimized
- **CSS Grid & Flexbox**: Efficient responsive layouts
- **Minimized Repaints**: Optimized DOM manipulation
- **Font Awesome**: CDN-based icons (no local files)

## 📱 Responsive Breakpoints

- **Desktop**: Full features (> 1024px)
- **Tablet**: Optimized layout (768px - 1024px)
- **Mobile**: Touch-friendly interface (< 768px)
- **Small Mobile**: Optimized for 320px+ screens

## 🔧 Customization Guide

### Adding New Products
Edit `js/script.js` and add to the `products` array:
```javascript
{
    id: 13,
    name: 'Product Name',
    category: 'sofas', // or chairs, tables, beds
    price: 999,
    image: '🛋️', // Use emoji or HTML
    description: 'Product description here',
    badge: 'Featured', // Optional: Featured, Sale, New, Popular
    rating: 4.5
}
```

### Changing Colors
Edit `css/style.css` CSS variables in `:root`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    --dark-color: #1f2937;
    --light-color: #f9fafb;
}
```

### Modifying Animations
Update animation duration/timing in `css/style.css`:
- Hero background: `gradientShift 15s`
- Product cards: `fadeInUp 0.6s`
- Float effect: `float 4s`

## 💾 Local Storage

The site uses browser localStorage to persist:
- **Shopping Cart**: Stored as JSON
- **User Preferences**: (Expandable for future use)

Clear localStorage: Open DevTools → Application → Local Storage → Clear All

## 🔒 Security Notes

- This is a frontend demo without backend integration
- All data is stored locally in the browser
- Payment processing not implemented (add Stripe/PayPal integration)
- User authentication not implemented (add authentication system)

## 📊 Analytics Ready

The site structure supports easy integration with:
- Google Analytics
- Facebook Pixel
- Hotjar
- Any analytics platform

## 🚀 Future Enhancement Ideas

- [ ] Backend API integration (Node.js, Python, PHP)
- [ ] User authentication and profiles
- [ ] Real payment gateway (Stripe, PayPal)
- [ ] Order tracking
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced search and filters
- [ ] Product comparison
- [ ] Email notifications
- [ ] Mobile app version

## 📝 License

Free to use for personal and commercial projects.

## 🤝 Support

For improvements or bug reports, feel free to modify and customize the code.

## 📧 Contact

Email: info@furnihub.com
Website: www.furnihub.com

---

**Built with ❤️ for furniture enthusiasts and web developers**

Version 1.0 | Last Updated: 2024
