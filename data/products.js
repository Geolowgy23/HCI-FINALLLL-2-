const products = [
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2024/09/00_Dosnoventa_Detroit_HIVIS_Drop-1960x1440.jpg",
        name: "DOSNOVENTA®03 DET",
        description: "This is the description of Product 1.",
        type: "WholeBike"
    },
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2020/10/DSNV_TYO_Black_B_01_Drop-scaled-1960x1440.jpg",
        name: "DOSNOVENTA®03 TYO BLACK",
        description: "This is the description of Product 2.",
        type: ""
    },
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2025/01/Dosnoventa_TYO_Chrome_B_01_Drop-1960x1440.jpg",
        name: "Tokyo Build Dertroit",
        description: "This is the description of Product 3.",
        type: "WholeBike"
    },
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2020/10/DSNV_LA_Black_B_01_Flat-scaled-1960x1440.jpg",
        name: "DOSNOVENTA®05 TYO",
        description: "This is the description of Product 4.",
        type: "WholeBike"
    },
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2024/09/DSNV_LA_GhostGrey_Drop-1960x1440.jpg",
        name: "DOSNOVENTA®05 TYO",
        description: "This is the description of Product 5.",
        type: "WholeBike"
    },
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2025/04/DSNV_LA_SierraCrosses_Frame-1960x1440.jpg",
        name: "SIERRA CROSSES FRAME",
        description: "This is the description of Product 7.",
        type: "Frame"
    },
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2020/10/DSNV_BCN_Black_B_01_Flat-scaled-1960x1440.jpg",
        name: "DOSNOVENTA®05 TYO",
        description: "This is the description of Product 8.",
        type: "WholeBike"
    },
    {
        image: "https://dosnoventabikes.com/wp-content/uploads/2020/10/DSNV_BCN_Black_B_01_Flat-scaled-1960x1440.jpg",
        name: "DOSNOVENTA®05 TYO",
        description: "This is the description of Product 8.",
        type: "WholeBike"
    }
    
];

function loadProducts() {
    const productsContainer = document.getElementById("products-list");
    productsContainer.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Type:</strong> ${product.type}</p> <!-- Added "Type" field -->
            
        `;

        productsContainer.appendChild(productCard);
    });
}

// Load products when the page loads
document.addEventListener("DOMContentLoaded", loadProducts);
