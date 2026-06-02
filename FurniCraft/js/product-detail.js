let detailProduct = null;
let cart = [];

const categoryDetails = {
    sofas: {
        material: 'Built with a kiln-dried hardwood frame, high-resilience foam cushions, webbed suspension, and premium upholstery chosen for daily comfort.',
        care: 'Vacuum with a soft brush weekly. Wipe spills quickly with a dry cloth and use a leather or fabric-safe cleaner when needed.',
        specs: {
            Material: 'Hardwood frame, foam cushioning, premium upholstery',
            Dimensions: '213 cm W x 91 cm D x 86 cm H',
            Seating: '3-5 people depending on model',
            Finish: 'Soft-touch upholstery with reinforced stitching',
            Weight: '50-75 kg',
            Warranty: '1 year frame and manufacturing warranty'
        }
    },
    chairs: {
        material: 'Designed with a reinforced steel or hardwood base, ergonomic support zones, dense foam padding, and durable upholstery.',
        care: 'Dust regularly and spot-clean upholstery with mild soap. Tighten visible hardware every few months for best support.',
        specs: {
            Material: 'Reinforced frame, dense foam, performance fabric',
            Dimensions: '71 cm W x 76 cm D x 97 cm H',
            Support: 'Contoured seat with lumbar comfort',
            Finish: 'Scratch-resistant legs and soft upholstery',
            Weight: '15-26 kg',
            Warranty: '1 year hardware and manufacturing warranty'
        }
    },
    dining: {
        material: 'Crafted from engineered wood, solid wood supports, tempered glass or stone-style surfaces, and a protective sealed finish.',
        care: 'Use coasters and placemats. Clean with a damp microfiber cloth and avoid harsh chemicals or direct heat.',
        specs: {
            Material: 'Solid wood base with glass, marble, or engineered top',
            Dimensions: '122 cm W x 76 cm D x 46 cm H',
            Capacity: 'Supports everyday dining and decor use',
            Finish: 'Sealed, easy-clean protective coating',
            Weight: '25-54 kg',
            Warranty: '1 year surface and frame warranty'
        }
    },
    beds: {
        material: 'Made with engineered wood panels, a reinforced center rail, sturdy slats, and upholstered or laminated exterior surfaces.',
        care: 'Rotate the mattress regularly. Wipe the frame with a dry cloth and avoid dragging the bed across the floor.',
        specs: {
            Material: 'Engineered wood frame, reinforced slats, premium finish',
            Dimensions: 'Queen/King format depending on selected model',
            Storage: 'Integrated storage on selected designs',
            Finish: 'Smooth laminated or upholstered panels',
            Weight: '57-95 kg',
            Warranty: '1 year structure and hardware warranty'
        }
    },
    wardrobes: {
        material: 'Made with engineered wood panels, sturdy hardware, smooth hinges or sliding tracks, and durable laminate or glass finishes.',
        care: 'Wipe with a dry microfiber cloth. Avoid excess water near edges and keep sliding channels free from dust.',
        specs: {
            Material: 'Engineered wood, metal hardware, laminate or glass finish',
            Dimensions: '180 cm W x 60 cm D x 210 cm H',
            Storage: 'Shelves, hanging rail, drawers or modular compartments',
            Finish: 'Scratch-resistant exterior with easy-clean panels',
            Weight: '75-140 kg',
            Warranty: '1 year hardware and manufacturing warranty'
        }
    }
};

const deliveryRoadmap = [
    {
        icon: 'fa-receipt',
        title: 'Order confirmed',
        text: 'Payment is verified and your furniture is reserved.'
    },
    {
        icon: 'fa-box-open',
        title: 'Quality check and packing',
        text: 'The product is inspected, protected, and packed for safe transit.'
    },
    {
        icon: 'fa-truck-fast',
        title: 'Dispatched from warehouse',
        text: 'You receive tracking updates as the shipment moves.'
    },
    {
        icon: 'fa-house-circle-check',
        title: 'Doorstep delivery',
        text: 'Delivery partner brings the item to your address and confirms handoff.'
    },
    {
        icon: 'fa-screwdriver-wrench',
        title: 'Assembly and support',
        text: 'Optional assembly and post-delivery support are available.'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    loadCartFromLocalStorage();
    updateCartDisplay();
    loadProductDetail();
});

function loadProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get('id'));

    detailProduct = products.find(product => product.id === productId);

    if (!detailProduct) {
        document.getElementById('missingProduct').classList.remove('d-none');
        return;
    }

    document.title = `${detailProduct.name} - FurniCraft`;
    document.getElementById('productDetail').classList.remove('d-none');
    const mainImage = detailProduct.image;
    document.getElementById('detailImage').src = `../${mainImage}`;
    document.getElementById('detailImage').alt = detailProduct.name;
    
    document.getElementById('detailCategory').innerHTML = `<i class="fas fa-tag"></i>${formatCategory(detailProduct.category)}`;
    document.getElementById('detailName').textContent = detailProduct.name;
    document.getElementById('detailDescription').textContent = detailProduct.description;
    document.getElementById('detailPrice').textContent = formatPrice(detailProduct.price);
    document.getElementById('detailRating').innerHTML = `${generateRatingStars(detailProduct.rating)} <span class="text-muted ms-2">${detailProduct.rating} rating | 124 reviews</span>`;
    document.getElementById('reviewSummary').innerHTML = `${generateRatingStars(detailProduct.rating)} ${detailProduct.rating}/5`;

    const detail = categoryDetails[detailProduct.category] || categoryDetails.sofas;
    document.getElementById('materialIntro').textContent = detail.material;
    document.getElementById('careText').textContent = detail.care;
    document.getElementById('specRows').innerHTML = Object.entries(detail.specs).map(([label, value]) => `
        <tr>
            <td>${label}</td>
            <td class="fw-semibold">${value}</td>
        </tr>
    `).join('');

    document.getElementById('deliverySteps').innerHTML = deliveryRoadmap.map(step => `
        <div class="delivery-step">
            <div class="delivery-icon"><i class="fas ${step.icon}"></i></div>
            <div>
                <h5 class="fw-bold mb-1">${step.title}</h5>
                <p class="text-muted mb-0">${step.text}</p>
            </div>
        </div>
    `).join('');

    renderRelatedProducts();
}

function setDetailMainImage(src, alt) {
    const detailImage = document.getElementById('detailImage');
    detailImage.src = src;
    detailImage.alt = alt;
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

function changeQty(amount) {
    const input = document.getElementById('detailQty');
    const nextValue = Number(input.value) + amount;
    input.value = Math.min(Math.max(nextValue, 1), 10);
}

function addDetailToCart() {
    if (!detailProduct) return;

    const quantity = Number(document.getElementById('detailQty').value);
    const existingItem = cart.find(item => item.id === detailProduct.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: detailProduct.id,
            name: detailProduct.name,
            price: detailProduct.price,
            quantity: quantity
        });
    }

    saveCartToLocalStorage();
    updateCartDisplay();
    showDetailNotification(`${detailProduct.name} added to cart.`);
}

function buyNow() {
    addDetailToCart();
    window.location.href = 'cart.html';
}

function checkDelivery() {
    const pinCode = document.getElementById('pinCode').value.trim();
    const message = document.getElementById('deliveryMessage');

    if (!pinCode) {
        message.className = 'text-danger fw-semibold d-block mt-2';
        message.textContent = 'Please enter a PIN code to check delivery.';
        return;
    }

    message.className = 'text-success fw-semibold d-block mt-2';
    message.textContent = `Delivery available to ${pinCode}. Estimated arrival: 5-7 business days across major Indian cities.`;
}

function renderRelatedProducts() {
    const related = products
        .filter(product => product.category === detailProduct.category && product.id !== detailProduct.id)
        .slice(0, 3);

    document.getElementById('relatedProducts').innerHTML = related.map(product => `
        <div class="col-md-4">
            <div class="related-card" onclick="window.location.href='product-detail.html?id=${product.id}'">
                <img src="../${product.image}" alt="${product.name}">
                <div class="text-uppercase small text-primary fw-bold">${formatCategory(product.category)}</div>
                <h5 class="fw-bold mb-1">${product.name}</h5>
                <div class="fw-bold text-primary">${formatPrice(product.price)}</div>
            </div>
        </div>
    `).join('');
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

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

function showDetailNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed bottom-0 end-0 m-3';
    notification.style.zIndex = '9999';
    notification.style.minWidth = '280px';
    notification.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}
