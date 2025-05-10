document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products-list");
    let isDragging = false;
    let startX, scrollLeft, velocity = 0;
    let momentumID;

    // Prevent default touch & mouse behavior to allow smooth horizontal scrolling
    productsContainer.addEventListener("wheel", (e) => {
        e.preventDefault();
        productsContainer.scrollLeft += e.deltaY * 1.5; // Adjust scroll speed
    }, { passive: false });

    // Mouse Down Event - Start Dragging
    productsContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        productsContainer.classList.add("active");
        startX = e.pageX - productsContainer.offsetLeft;
        scrollLeft = productsContainer.scrollLeft;
        velocity = 0;
        cancelMomentumTracking();
    });

    // Mouse Move Event - Drag to Scroll
    productsContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - productsContainer.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust scroll sensitivity
        productsContainer.scrollLeft = scrollLeft - walk;
        velocity = walk; // Store velocity for momentum effect
    });

    // Mouse Up & Leave Events - Stop Dragging
    const stopDragging = () => {
        if (!isDragging) return;
        isDragging = false;
        productsContainer.classList.remove("active");
        startMomentumTracking();
    };
    
    productsContainer.addEventListener("mouseup", stopDragging);
    productsContainer.addEventListener("mouseleave", stopDragging);

    // Momentum Effect
    function startMomentumTracking() {
        cancelMomentumTracking();
        momentumID = requestAnimationFrame(momentumLoop);
    }

    function cancelMomentumTracking() {
        cancelAnimationFrame(momentumID);
    }

    function momentumLoop() {
        productsContainer.scrollLeft -= velocity;
        velocity *= 0.95; // Deceleration factor
        
        if (Math.abs(velocity) > 0.5) {
            momentumID = requestAnimationFrame(momentumLoop);
        }
    }

    // Call loadProducts() from products.js
    loadProducts();
});