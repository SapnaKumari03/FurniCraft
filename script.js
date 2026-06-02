const products = [
  // SOFAS (10)
  { name: "Wooden Sofa 1", category: "Sofa", price: 12000, image: "images/sofa.jpg" },
  { name: "Wooden Sofa 2", category: "Sofa", price: 13000, image: "images/sofa.jpg" },
  { name: "Wooden Sofa 3", category: "Sofa", price: 14000, image: "images/sofa.jpg" },
  { name: "Wooden Sofa 4", category: "Sofa", price: 15000, image: "images/sofa.jpg" },
  { name: "Wooden Sofa 5", category: "Sofa", price: 16000, image: "images/sofa.jpg" },
  { name: "Wooden Sofa 6", category: "Sofa", price: 17000, image: "images/sofa.jpg" },
  { name: "Wooden Sofa 7", category: "Sofa", price: 18000, image: "images/sofa.jpg" },
  { name: "Wooden Sofa 8", category: "Sofa", price: 19000, image: "images/sofa.jpg" },
  { name: "Wooden Sofa 9", category: "Sofa", price: 20000, image: "images/sofa.jpg" },
  { name: "Wooden Sofa 10", category: "Sofa", price: 21000, image: "images/sofa.jpg" },

  // BEDS (10)
  { name: "King Bed 1", category: "Bed", price: 22000, image: "images/bed.jpg" },
  { name: "King Bed 2", category: "Bed", price: 23000, image: "images/bed.jpg" },
  { name: "King Bed 3", category: "Bed", price: 24000, image: "images/bed.jpg" },
  { name: "King Bed 4", category: "Bed", price: 25000, image: "images/bed.jpg" },
  { name: "King Bed 5", category: "Bed", price: 26000, image: "images/bed.jpg" },
  { name: "King Bed 6", category: "Bed", price: 27000, image: "images/bed.jpg" },
  { name: "King Bed 7", category: "Bed", price: 28000, image: "images/bed.jpg" },
  { name: "King Bed 8", category: "Bed", price: 29000, image: "images/bed.jpg" },
  { name: "King Bed 9", category: "Bed", price: 30000, image: "images/bed.jpg" },
  { name: "King Bed 10", category: "Bed", price: 31000, image: "images/bed.jpg" },

  // DINING (10)
  { name: "Dining Table 1", category: "Dining", price: 15000, image: "images/dining.jpg" },
  { name: "Dining Table 2", category: "Dining", price: 16000, image: "images/dining.jpg" },
  { name: "Dining Table 3", category: "Dining", price: 17000, image: "images/dining.jpg" },
  { name: "Dining Table 4", category: "Dining", price: 18000, image: "images/dining.jpg" },
  { name: "Dining Table 5", category: "Dining", price: 19000, image: "images/dining.jpg" },
  { name: "Dining Table 6", category: "Dining", price: 20000, image: "images/dining.jpg" },
  { name: "Dining Table 7", category: "Dining", price: 21000, image: "images/dining.jpg" },
  { name: "Dining Table 8", category: "Dining", price: 22000, image: "images/dining.jpg" },
  { name: "Dining Table 9", category: "Dining", price: 23000, image: "images/dining.jpg" },
  { name: "Dining Table 10", category: "Dining", price: 24000, image: "images/dining.jpg" },

  // CHAIRS (10)
  { name: "Chair 1", category: "Chair", price: 3000, image: "images/chair.jpg" },
  { name: "Chair 2", category: "Chair", price: 3500, image: "images/chair.jpg" },
  { name: "Chair 3", category: "Chair", price: 4000, image: "images/chair.jpg" },
  { name: "Chair 4", category: "Chair", price: 4500, image: "images/chair.jpg" },
  { name: "Chair 5", category: "Chair", price: 5000, image: "images/chair.jpg" },
  { name: "Chair 6", category: "Chair", price: 5500, image: "images/chair.jpg" },
  { name: "Chair 7", category: "Chair", price: 6000, image: "images/chair.jpg" },
  { name: "Chair 8", category: "Chair", price: 6500, image: "images/chair.jpg" },
  { name: "Chair 9", category: "Chair", price: 7000, image: "images/chair.jpg" },
  { name: "Chair 10", category: "Chair", price: 7500, image: "images/chair.jpg" },

  // WARDROBE (10)
  { name: "Wardrobe 1", category: "Wardrobe", price: 20000, image: "images/wardrobe.jpg" },
  { name: "Wardrobe 2", category: "Wardrobe", price: 21000, image: "images/wardrobe.jpg" },
  { name: "Wardrobe 3", category: "Wardrobe", price: 22000, image: "images/wardrobe.jpg" },
  { name: "Wardrobe 4", category: "Wardrobe", price: 23000, image: "images/wardrobe.jpg" },
  { name: "Wardrobe 5", category: "Wardrobe", price: 24000, image: "images/wardrobe.jpg" },
  { name: "Wardrobe 6", category: "Wardrobe", price: 25000, image: "images/wardrobe.jpg" },
  { name: "Wardrobe 7", category: "Wardrobe", price: 26000, image: "images/wardrobe.jpg" },
  { name: "Wardrobe 8", category: "Wardrobe", price: 27000, image: "images/wardrobe.jpg" },
  { name: "Wardrobe 9", category: "Wardrobe", price: 28000, image: "images/wardrobe.jpg" },
  { name: "Wardrobe 10", category: "Wardrobe", price: 29000, image: "images/wardrobe.jpg" }
];

const grid = document.getElementById("productGrid");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${product.image}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button>Add to Cart</button>
  `;

  grid.appendChild(card);
});