// ========================
// Product Data
// ========================
const products = [
    {
        id: 1,
        name: 'Luxury Leather Sofa',
        category: 'sofas',
        price: 89999,
        image: 'pages/FurniCraftIMG/sofa4.jpg',
        angleImages: ['pages/FurniCraftIMG/sofa4.jpg', 'pages/FurniCraftIMG/sofa5.jpg', 'pages/FurniCraftIMG/sofa6.jpg'],
        description: 'Premium leatherette sofa with deep cushioning, solid wood frame, and ergonomic comfort for Indian homes.',
        badge: 'Featured',
        rating: 4.5
    },
    {
        id: 2,
        name: 'Sectional Sofa Set',
        category: 'sofas',
        price: 119999,
        image: 'pages/FurniCraftIMG/sofa10.jpg',
        angleImages: ['pages/FurniCraftIMG/sofa10.jpg', 'pages/FurniCraftIMG/sofa8.jpg', 'pages/FurniCraftIMG/sofa2.jpg'],
        description: 'Large sectional sofa for family gatherings with modular seating, high-density foam, and durable upholstery.',
        badge: 'Sale',
        rating: 4.7
    },
    {
        id: 3,
        name: 'Reclining Sofa',
        category: 'sofas',
        price: 74999,
        image: 'pages/FurniCraftIMG/sofa9.jpg',
        angleImages: ['pages/FurniCraftIMG/sofa9.jpg', 'pages/FurniCraftIMG/sofa3.jpg', 'pages/FurniCraftIMG/sofa7.jpg'],
        description: 'Modern reclining sofa with smooth recliner controls, cup holders, and cushioned support for daily lounging.',
        badge: 'Featured',
        rating: 4.6
    },
    {
        id: 4,
        name: 'Classic Fabric Sofa',
        category: 'sofas',
        price: 54999,
        image: 'pages/FurniCraftIMG/sofa.jpg',
        angleImages: ['pages/FurniCraftIMG/sofa.jpg', 'pages/FurniCraftIMG/sofa4.jpg', 'pages/FurniCraftIMG/sofa5.jpg'],
        description: 'Soft fabric sofa with a sturdy wooden base, ideal for compact living rooms and apartments.',
        badge: null,
        rating: 4.2
    },
    {
        id: 5,
        name: 'Urban Three Seater Sofa',
        category: 'sofas',
        price: 67999,
        image: 'pages/FurniCraftIMG/sofa2.jpg',
        angleImages: ['pages/FurniCraftIMG/sofa2.jpg', 'pages/FurniCraftIMG/sofa8.jpg', 'pages/FurniCraftIMG/sofa10.jpg'],
        description: 'Contemporary three seater sofa with supportive cushions and stain-resistant upholstery.',
        badge: 'Popular',
        rating: 4.4
    },
    {
        id: 6,
        name: 'Compact Loveseat Sofa',
        category: 'sofas',
        price: 39999,
        image: 'pages/FurniCraftIMG/sofa3.jpg',
        angleImages: ['pages/FurniCraftIMG/sofa3.jpg', 'pages/FurniCraftIMG/sofa9.jpg', 'pages/FurniCraftIMG/sofa7.jpg'],
        description: 'Space-saving loveseat sofa with a plush seat profile for bedrooms, studios, and lounges.',
        badge: null,
        rating: 4.1
    },
    {
        id: 7,
        name: 'Premium Tufted Sofa',
        category: 'sofas',
        price: 82999,
        image: 'pages/FurniCraftIMG/sofa5.jpg',
        angleImages: ['pages/FurniCraftIMG/sofa5.jpg', 'pages/FurniCraftIMG/sofa4.jpg', 'pages/FurniCraftIMG/sofa6.jpg'],
        description: 'Tufted sofa with elegant detailing, firm back support, and a premium living-room finish.',
        badge: 'New',
        rating: 4.5
    },
    {
        id: 8,
        name: 'L Shape Corner Sofa',
        category: 'sofas',
        price: 99999,
        image: 'pages/FurniCraftIMG/sofa6.jpg',
        angleImages: ['pages/FurniCraftIMG/sofa6.jpg', 'pages/FurniCraftIMG/sofa4.jpg', 'pages/FurniCraftIMG/sofa8.jpg'],
        description: 'L-shaped corner sofa with roomy seating, ideal for family rooms and entertainment spaces.',
        badge: null,
        rating: 4.6
    },
    {
        id: 9,
        name: 'Minimal Lounge Sofa',
        category: 'sofas',
        price: 58999,
        image: 'pages/FurniCraftIMG/sofa7.jpg',
        angleImages: ['pages/FurniCraftIMG/sofa7.jpg', 'pages/FurniCraftIMG/sofa9.jpg', 'pages/FurniCraftIMG/sofa3.jpg'],
        description: 'Minimal lounge sofa with clean lines, soft fabric, and everyday comfort for modern interiors.',
        badge: null,
        rating: 4.2
    },
    {
        id: 10,
        name: 'Designer Curved Sofa',
        category: 'sofas',
        price: 109999,
        image: 'pages/FurniCraftIMG/sofa8.jpg',
        angleImages: ['pages/FurniCraftIMG/sofa8.jpg', 'pages/FurniCraftIMG/sofa10.jpg', 'pages/FurniCraftIMG/sofa6.jpg'],
        description: 'Statement curved sofa with premium upholstery and sculpted comfort for luxury living rooms.',
        badge: 'Premium',
        rating: 4.8
    },
    {
        id: 11,
        name: 'Queen Size Platform Bed',
        category: 'beds',
        price: 45999,
        image: 'pages/FurniCraftIMG/bed3.jpg',
        angleImages: ['pages/FurniCraftIMG/bed3.jpg', 'pages/FurniCraftIMG/bed2.jpg', 'pages/FurniCraftIMG/bed4.jpg'],
        description: 'Spacious queen bed with hydraulic storage and durable engineered wood construction for modern bedrooms.',
        badge: 'Sale',
        rating: 4.6
    },
    {
        id: 12,
        name: 'King Size Bed Frame',
        category: 'beds',
        price: 59999,
        image: 'pages/FurniCraftIMG/King size Bed image.jpg',
        angleImages: ['pages/FurniCraftIMG/King size Bed image.jpg', 'pages/FurniCraftIMG/bed3.jpg', 'pages/FurniCraftIMG/bed4.jpg'],
        description: 'Sturdy king size bed frame with reinforced slats, premium finish, and practical storage drawers.',
        badge: null,
        rating: 4.4
    },
    {
        id: 13,
        name: 'Single Bed with Storage',
        category: 'beds',
        price: 24999,
        image: 'pages/FurniCraftIMG/bed10.jpg',
        angleImages: ['pages/FurniCraftIMG/bed10.jpg', 'pages/FurniCraftIMG/bed9.jpg', 'pages/FurniCraftIMG/bed8.jpg'],
        description: 'Space-saving single bed with under-bed storage, ideal for kids rooms, hostels, and guest rooms.',
        badge: 'Sale',
        rating: 4.2
    },
    {
        id: 14,
        name: 'Wooden Double Bed',
        category: 'beds',
        price: 38999,
        image: 'pages/FurniCraftIMG/bed2.jpg',
        angleImages: ['pages/FurniCraftIMG/bed2.jpg', 'pages/FurniCraftIMG/bed3.jpg', 'pages/FurniCraftIMG/bed4.jpg'],
        description: 'Durable double bed with a warm wood finish, sturdy slats, and a clean everyday design.',
        badge: null,
        rating: 4.3
    },
    {
        id: 15,
        name: 'Upholstered Queen Bed',
        category: 'beds',
        price: 52999,
        image: 'pages/FurniCraftIMG/bed4.jpg',
        angleImages: ['pages/FurniCraftIMG/bed4.jpg', 'pages/FurniCraftIMG/bed3.jpg', 'pages/FurniCraftIMG/bed5.jpg'],
        description: 'Elegant upholstered queen bed with a cushioned headboard and premium bedroom styling.',
        badge: 'Featured',
        rating: 4.6
    },
    {
        id: 16,
        name: 'Hydraulic Storage Bed',
        category: 'beds',
        price: 64999,
        image: 'pages/FurniCraftIMG/bed5.jpg',
        angleImages: ['pages/FurniCraftIMG/bed5.jpg', 'pages/FurniCraftIMG/bed6.jpg', 'pages/FurniCraftIMG/bed7.jpg'],
        description: 'Hydraulic storage bed with easy lift access, strong hardware, and generous under-bed space.',
        badge: 'Popular',
        rating: 4.7
    },
    {
        id: 17,
        name: 'Modern Low Height Bed',
        category: 'beds',
        price: 42999,
        image: 'pages/FurniCraftIMG/bed6.jpg',
        angleImages: ['pages/FurniCraftIMG/bed6.jpg', 'pages/FurniCraftIMG/bed5.jpg', 'pages/FurniCraftIMG/bed7.jpg'],
        description: 'Low height bed with a sleek profile, stable frame, and minimalist bedroom appeal.',
        badge: null,
        rating: 4.2
    },
    {
        id: 18,
        name: 'Panel Headboard Bed',
        category: 'beds',
        price: 47999,
        image: 'pages/FurniCraftIMG/bed7.jpg',
        angleImages: ['pages/FurniCraftIMG/bed7.jpg', 'pages/FurniCraftIMG/bed6.jpg', 'pages/FurniCraftIMG/bed8.jpg'],
        description: 'Panel headboard bed with a refined finish, supportive frame, and easy-to-style silhouette.',
        badge: null,
        rating: 4.4
    },
    {
        id: 19,
        name: 'Premium King Storage Bed',
        category: 'beds',
        price: 78999,
        image: 'pages/FurniCraftIMG/bed8.jpg',
        angleImages: ['pages/FurniCraftIMG/bed8.jpg', 'pages/FurniCraftIMG/bed9.jpg', 'pages/FurniCraftIMG/bed7.jpg'],
        description: 'Premium king storage bed with roomy compartments, reinforced construction, and a luxury finish.',
        badge: 'Premium',
        rating: 4.8
    },
    {
        id: 20,
        name: 'Compact Guest Bed',
        category: 'beds',
        price: 29999,
        image: 'pages/FurniCraftIMG/bed9.jpg',
        angleImages: ['pages/FurniCraftIMG/bed9.jpg', 'pages/FurniCraftIMG/bed8.jpg', 'pages/FurniCraftIMG/bed10.jpg'],
        description: 'Compact guest bed with a practical footprint, stable support, and easy room placement.',
        badge: null,
        rating: 4.1
    },
    {
        id: 21,
        name: 'Marble Dining Table',
        category: 'dining',
        price: 34999,
        image: 'pages/FurniCraftIMG/DT LuxuryMarble-1.jpg',
        angleImages: ['pages/FurniCraftIMG/DT LuxuryMarble-1.jpg', 'pages/FurniCraftIMG/DT LuxuryMarble-2.jpg', 'pages/FurniCraftIMG/Dining Table Image.jpg'],
        description: 'Elegant marble-finish dining table with a solid wood base. Comfortable seating for family dining.',
        badge: 'New',
        rating: 4.5
    },
    {
        id: 22,
        name: 'Round Dining Table',
        category: 'dining',
        price: 9999,
        image: 'pages/FurniCraftIMG/DRoundT-2.jpg',
        angleImages: ['pages/FurniCraftIMG/DRoundT-2.jpg', 'pages/FurniCraftIMG/DRoundT-1.jpg', 'pages/FurniCraftIMG/DT4-2.jpg'],
        description: 'Compact round dining table with a polished contemporary profile, ideal for dining nooks and apartments.',
        badge: null,
        rating: 4.1
    },
    {
        id: 23,
        name: 'Classic Dining Table',
        category: 'dining',
        price: 29999,
        image: 'pages/FurniCraftIMG/Dining Table Image.jpg',
        angleImages: ['pages/FurniCraftIMG/Dining Table Image.jpg', 'pages/FurniCraftIMG/DT4-2.jpg', 'pages/FurniCraftIMG/DT6-1.jpg'],
        description: 'Classic family dining table with a durable top, sturdy legs, and a warm finish.',
        badge: 'Popular',
        rating: 4.3
    },
    {
        id: 24,
        name: 'Designer Dining Set',
        category: 'dining',
        price: 57999,
        image: 'pages/FurniCraftIMG/DT LuxuryMarble-2.jpg',
        angleImages: ['pages/FurniCraftIMG/DT LuxuryMarble-2.jpg', 'pages/FurniCraftIMG/DT LuxuryMarble-1.jpg', 'pages/FurniCraftIMG/Dining Table Image.jpg'],
        description: 'Designer dining set with premium tabletop finish and a refined base for modern homes.',
        badge: 'Premium',
        rating: 4.7
    },
    {
        id: 25,
        name: 'Urban Four Seater Dining',
        category: 'dining',
        price: 23999,
        image: 'pages/FurniCraftIMG/DT4-2.jpg',
        angleImages: ['pages/FurniCraftIMG/DT4-2.jpg', 'pages/FurniCraftIMG/DT6-1.jpg', 'pages/FurniCraftIMG/DRoundT-2.jpg'],
        description: 'Four seater dining table with compact proportions and easy maintenance for daily meals.',
        badge: null,
        rating: 4.2
    },
    {
        id: 26,
        name: 'Walnut Dining Table',
        category: 'dining',
        price: 31999,
        image: 'pages/FurniCraftIMG/DT4-2.jpg',
        angleImages: ['pages/FurniCraftIMG/DT4-2.jpg', 'pages/FurniCraftIMG/DT6-1.jpg', 'pages/FurniCraftIMG/DT6-2.jpg'],
        description: 'Walnut-finish dining table with clean edges, sturdy support, and a premium tabletop feel.',
        badge: null,
        rating: 4.4
    },
    {
        id: 27,
        name: 'Six Seater Dining Table',
        category: 'dining',
        price: 44999,
        image: 'pages/FurniCraftIMG/DT6-1.jpg',
        angleImages: ['pages/FurniCraftIMG/DT6-1.jpg', 'pages/FurniCraftIMG/DT6-2.jpg', 'pages/FurniCraftIMG/DRoundT-1.jpg'],
        description: 'Six seater dining table designed for family meals, hosting, and everyday durability.',
        badge: 'Featured',
        rating: 4.6
    },
    {
        id: 28,
        name: 'Contemporary Dining Table',
        category: 'dining',
        price: 39999,
        image: 'pages/FurniCraftIMG/DT6-2.jpg',
        angleImages: ['pages/FurniCraftIMG/DT6-2.jpg', 'pages/FurniCraftIMG/DT6-1.jpg', 'pages/FurniCraftIMG/DRoundT-2.jpg'],
        description: 'Contemporary dining table with a balanced design, stable frame, and easy-clean surface.',
        badge: null,
        rating: 4.3
    },
    {
        id: 29,
        name: 'Round Cafe Dining Table',
        category: 'dining',
        price: 14999,
        image: 'pages/FurniCraftIMG/DRoundT-1.jpg',
        angleImages: ['pages/FurniCraftIMG/DRoundT-1.jpg', 'pages/FurniCraftIMG/DRoundT-2.jpg', 'pages/FurniCraftIMG/DT4-2.jpg'],
        description: 'Round cafe-style dining table for breakfast corners, balconies, and compact apartments.',
        badge: null,
        rating: 4.1
    },
    {
        id: 30,
        name: 'Dining Chair Pair',
        category: 'dining',
        price: 12999,
        image: 'pages/FurniCraftIMG/diningchair5.jpg',
        description: 'Comfortable dining chair pair with supportive backs, cushioned seats, and a durable frame.',
        badge: 'New',
        rating: 4.2
    },
    {
        id: 31,
        name: 'Ergonomic Office Chair',
        category: 'chairs',
        price: 14999,
        image: 'pages/FurniCraftIMG/officechair3.jpg',
        description: 'Comfortable office chair with lumbar support, breathable mesh, and adjustable height for work-from-home hours.',
        badge: 'Popular',
        rating: 4.3
    },
    {
        id: 32,
        name: 'Velvet Accent Chair',
        category: 'chairs',
        price: 18999,
        image: 'pages/FurniCraftIMG/chair2.jpg',
        description: 'Elegant velvet accent chair with metal legs and plush seating for bedrooms, lounges, and reading corners.',
        badge: 'Featured',
        rating: 4.4
    },
    {
        id: 33,
        name: 'Lounge Chaise Chair',
        category: 'chairs',
        price: 22999,
        image: 'pages/FurniCraftIMG/chair1.jpg',
        description: 'Comfortable chaise lounge for relaxation, reading, and balcony seating with soft supportive cushioning.',
        badge: 'Popular',
        rating: 4.3
    },
    {
        id: 34,
        name: 'Executive Office Chair',
        category: 'chairs',
        price: 19999,
        image: 'pages/FurniCraftIMG/offiechair4.jpg',
        description: 'Executive office chair with cushioned arms, reclining support, and a polished work setup feel.',
        badge: null,
        rating: 4.5
    },
    {
        id: 35,
        name: 'Modern Accent Chair',
        category: 'chairs',
        price: 16999,
        image: 'pages/FurniCraftIMG/chair1.jpg',
        description: 'Modern accent chair with compact dimensions, soft padding, and versatile room placement.',
        badge: null,
        rating: 4.1
    },
    {
        id: 36,
        name: 'Premium Lounge Chair',
        category: 'chairs',
        price: 27999,
        image: 'pages/FurniCraftIMG/chair2.jpg',
        description: 'Premium lounge chair with a plush seat, stable metal frame, and comfortable back angle.',
        badge: 'Premium',
        rating: 4.6
    },
    {
        id: 37,
        name: 'Mesh Study Chair',
        category: 'chairs',
        price: 8999,
        image: 'pages/FurniCraftIMG/officechair3.jpg',
        description: 'Lightweight mesh study chair with breathable comfort and height adjustment for daily use.',
        badge: 'Sale',
        rating: 4.0
    },
    {
        id: 38,
        name: 'Dining Side Chair',
        category: 'chairs',
        price: 6999,
        image: 'pages/FurniCraftIMG/diningchair5.jpg',
        description: 'Dining side chair with firm support, an easy-clean seat, and a practical home dining profile.',
        badge: null,
        rating: 4.1
    },
    {
        id: 39,
        name: 'Cozy Reading Chair',
        category: 'chairs',
        price: 20999,
        image: 'pages/FurniCraftIMG/chair1.jpg',
        description: 'Cozy reading chair with supportive cushioning and a relaxed profile for corners and bedrooms.',
        badge: 'New',
        rating: 4.4
    },
    {
        id: 40,
        name: 'Designer Chair',
        category: 'chairs',
        price: 24999,
        image: 'pages/FurniCraftIMG/chair2.jpg',
        description: 'Designer chair with statement upholstery, stable legs, and a premium accent look.',
        badge: null,
        rating: 4.5
    },
    {
        id: 41,
        name: 'Three Door Wardrobe',
        category: 'wardrobes',
        price: 54999,
        image: 'pages/FurniCraftIMG/3-door-1.jpg',
        description: 'Three door wardrobe with shelves, hanging space, and a clean exterior for family bedrooms.',
        badge: 'Featured',
        rating: 4.5
    },
    {
        id: 42,
        name: 'Premium Three Door Wardrobe',
        category: 'wardrobes',
        price: 64999,
        image: 'pages/FurniCraftIMG/3-door-2.jpg',
        description: 'Premium wardrobe with smart compartments, hanging rails, and a refined modern finish.',
        badge: 'Premium',
        rating: 4.7
    },
    {
        id: 43,
        name: 'Sliding Door Wardrobe',
        category: 'wardrobes',
        price: 58999,
        image: 'pages/FurniCraftIMG/sliding door1.jpg',
        description: 'Sliding door wardrobe designed for space-saving bedrooms with generous internal storage.',
        badge: 'Popular',
        rating: 4.6
    },
    {
        id: 44,
        name: 'Mirror Sliding Wardrobe',
        category: 'wardrobes',
        price: 69999,
        image: 'pages/FurniCraftIMG/sliding door2.jpg',
        description: 'Mirror sliding wardrobe with smooth tracks, full-length mirror panels, and organized storage.',
        badge: null,
        rating: 4.6
    },
    {
        id: 45,
        name: 'Wooden Wardrobe',
        category: 'wardrobes',
        price: 45999,
        image: 'pages/FurniCraftIMG/Wooden W3.jpg',
        description: 'Wooden wardrobe with a warm finish, practical shelves, and durable engineered wood construction.',
        badge: null,
        rating: 4.3
    },
    {
        id: 46,
        name: 'Classic Wooden Wardrobe',
        category: 'wardrobes',
        price: 49999,
        image: 'pages/FurniCraftIMG/Wooden W4.jpg',
        description: 'Classic wooden wardrobe with full-length storage, sturdy hinges, and everyday durability.',
        badge: 'Sale',
        rating: 4.4
    },
    {
        id: 47,
        name: 'Modern Wardrobe',
        category: 'wardrobes',
        price: 52999,
        image: 'pages/FurniCraftIMG/morden 5.jpg',
        description: 'Modern wardrobe with a clean front, balanced storage sections, and a contemporary bedroom look.',
        badge: 'New',
        rating: 4.5
    },
    {
        id: 48,
        name: 'Walk In Closet Unit',
        category: 'wardrobes',
        price: 89999,
        image: 'pages/FurniCraftIMG/walkin closet5.jpg',
        description: 'Walk-in closet unit with open shelving, hanging sections, and modular storage flexibility.',
        badge: 'Premium',
        rating: 4.8
    },
    {
        id: 49,
        name: 'Walk In Wardrobe System',
        category: 'wardrobes',
        price: 99999,
        image: 'pages/FurniCraftIMG/walk in closet6.jpg',
        description: 'Walk-in wardrobe system with premium organization zones for clothes, accessories, and shoes.',
        badge: null,
        rating: 4.7
    },
    {
        id: 50,
        name: 'Glass Door Wardrobe',
        category: 'wardrobes',
        price: 75999,
        image: 'pages/FurniCraftIMG/glass w9.jpg',
        description: 'Glass door wardrobe with a polished look, sturdy shelving, and elegant bedroom storage.',
        badge: 'Featured',
        rating: 4.6
    }
];
