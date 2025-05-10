document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    
    const searchBar = document.getElementById("search-bar");
    const searchButton = document.getElementById("search-button");

    // Filter products on typing
    searchBar.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            searchProducts();
        }
    });

    // Filter products on button click
    searchButton.addEventListener("click", searchProducts);
});

function loadProducts(filteredProducts = products) {
    const productsContainer = document.getElementById("products-list");
    productsContainer.innerHTML = "";

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = "<p>No products found.</p>";
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="see-more">See More</p>
        `;

        productsContainer.appendChild(productCard);
    });
}

function searchProducts() {
    const query = document.getElementById("search-bar").value.toLowerCase().trim();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
    );
    
    loadProducts(filteredProducts);
}
