const collegeAddress = {
  name: "National College of Ireland",
  street: "Mayor Street Lower",
  area: "IFSC",
  city: "Dublin",
  postcode: "D01 K6W2",
  country: "Ireland",
};
// JavaScript tinmmoelwin

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
   
    // Add animation to menu items on scroll
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const menuObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        // Add initial style and observe each menu item
        menuItems.forEach(item => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            menuObserver.observe(item);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        menuItems.forEach(item => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        });
    }
    
    // Add search functionality
    const searchButton = document.createElement('button');
    searchButton.className = 'btn btn-outline-secondary ms-2';
    searchButton.innerHTML = '<i class="fas fa-search"></i>';
    searchButton.id = 'searchToggle';
    
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.appendChild(searchButton);
    
    // Create search form
    const searchForm = document.createElement('div');
    searchForm.id = 'searchForm';
    searchForm.className = 'mt-3 d-none w-100';
    searchForm.innerHTML = `
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search our menu...">
            <button class="btn btn-outline-secondary" type="button">Search</button>
        </div>
    `;
    
    navbarCollapse.appendChild(searchForm);
    
    // Toggle search form
    document.getElementById('searchToggle').addEventListener('click', function() {
        const form = document.getElementById('searchForm');
        form.classList.toggle('d-none');
    });
});
// Menu data
const menuItems = [
    {
        id: 1,
        name: "Dublin Coddle Croquettes",
        description: "Crispy potato croquettes with braised sausage, bacon, and herb cream",
        price: 9.00,
        image: "images/crispy.jpeg", 
        category: "starters",
        source:"photo ref : https://italianfoodforever.com/2024/02/cheese-stuffed-potato-croquettes/ "
    },
    {
        id: 2,
        name: "Smoked Salmon Boxty",
        description: "Traditional potato pancake with Irish smoked salmon, crème fraîche, and dill",
        price: 11.00,
        image: "images/salmon.jpeg", 
        category: "starters",
        source:"photo ref : https://cookingwithcocktailrings.com/irish-boxty-with-smoked-salmon-irish-potato-pancakes/ "
    },
    {
        id: 3,
        name: "Free-Range Honey & Mustard Glazed Chicken",
        description: "Crisp skin, braised cabbage, bacon lardons, and creamy colcannon",
        price: 22.00,
        image: "images/honey.jpeg", 
        category: "mains",
        source:"photo ref : https://hellochef.me/recipes/irish-honey-and-mustard-chicken-with-colcannon-mashed-potato-3333"
    },
    {
        id: 4,
        name: "Pan-Seared Scallops",
        description: "Crisp pork belly, cauliflower purée, apple-fennel slaw, cider reduction",
        price: 26.00,
        image: "images/belly.jpeg",
        category: "mains",
        source:"photo ref : https://frozenfish.direct/recipe/pan-seared-scallops-with-cauliflower-puree-and-truffle-oil-recipe/"
    },
    {
        id: 5,
        name: "Herb-Crusted Rack of Irish Lamb",
        description: "Rosemary-Dijon crust, roasted garlic mash, minted pea purée, red wine jus",
        price: 28.00,
        image: "images/lamb.jpeg", 
        category: "mains",
        source: "photo ref : https://178degrees.com/herb-crusted-lamb-rack-with-red-wine-jus/"
    },
    {
        id: 6,
        name: "Fish & Chips",
        description: "Ale-battered cod, triple-cooked chips, mushy peas, and tartar sauce",
        price: 17.00,
        image: "images/chip.jpeg", 
        category: "mains",
        source: "photo ref : https://www.foodrepublic.com/2012/12/18/fr-guide-how-to-eat-fish-and-chips-in-london-and-who-does-it-best/"
    },
    {
        id: 7,
        name: "Traditional Dublin Bay Prawn Pie",
        description: "Buttery puff pastry, prawns, leeks, and tarragon cream sauce",
        price: 24.00,
        image: "images/pie.jpeg", 
        category: "mains",
        source: "photo ref : https://thehappyfoodie.co.uk/recipes/dublin-bay-prawn-and-chicken-pie/"
    },
    {
        id: 8,
        name: "Grilled Wild Irish Salmon",
        description: "Lemon-herb crust, crushed new potatoes, asparagus, hollandaise",
        price: 28.00,
        image: "images/lemon.webp", 
        category: "mains",
        source: "photo ref : https://mealpractice.com/recipes/lemon-herb-grilled-salmon-with-garlic-mashed-potatoes-and-roasted-asparagus-UcpCRjRpWi"
    },
    {
        id: 9,
        name: "The Dublin Burger",
        description: "Dry-aged beef, Cashel Blue cheese, bacon jam, and beer-battered onions",
        price: 15.00,
        image: "images/burger.jpeg", 
        category: "mains",
        source: "photo ref:  https://www.ubereats.com/ie/store/bosh-burger/EY7LkwhtXcWSEr4EOs9bLA"
    },
    {
        id: 10,
        name: "Irish Cheese & Onion Tart",
        description: "Cashel Blue and cheddar custard, caramelized onions, mixed leaf salad",
        price: 15.00,
        image: "images/tart.jpeg", 
        category: "mains",
        source: "photo ref: https://www.irishtimes.com/life-and-style/food-and-drink/recipes/onion-and-cashel-blue-cheese-tart-1.2610579"
    },
    {
        id: 11,
        name: "Baileys Chocolate Pot",
        description: "Silky chocolate mousse with espresso cream",
        price: 8.00,
        image: "images/chocolate.jpeg", 
        category: "desserts",
        source: "photo ref:  https://ilovecooking.ie/recipe-items/baileys-chocolate-cheesecake-pots"
    },
    {
        id: 12,
        name: "Homemade Ginger Beer",
        description: "Artisan sodas",
        price: 4.00,
        image: "images/ginger.jpeg", 
        category: "drinks",
        source: "photo ref: https://poppyswildkitchen.com/homemade-ginger-ale-4-flavors/"
    }
];

// DOM elements
const menuGrid = document.querySelector('.menu-grid');
const cartItems = document.querySelector('.cart-items');
const emptyCart = document.querySelector('.empty-cart');
const cartSummary = document.querySelector('.cart-summary');
const subtotalEl = document.querySelector('.subtotal');
const totalAmountEl = document.querySelector('.total-amount');
const cartCount = document.querySelector('.cart-count');
const historyCount = document.querySelector('.history-count');
const checkoutBtn = document.querySelector('.checkout-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
const cartPopup = document.querySelector('.cart-popup');
const cartOverlay = document.querySelector('.cart-overlay');
const closeCartBtn = document.querySelector('.close-cart');
const cartIcon = document.querySelector('.cart-icon');
const historyIcon = document.querySelector('.history-icon');
const menuSection = document.querySelector('.menu-section');
const historySection = document.querySelector('.history-section');
const historyList = document.querySelector('.history-list');
const noHistory = document.querySelector('.no-history');

// App state
let cart = [];
let orderHistory = [];

// Initialize the page
function init() {
    renderMenu();
    loadCart();
    loadOrderHistory();
    updateCartUI();
    updateHistoryUI();
    
    // Event listeners
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', filterMenu);
    });
    
    checkoutBtn.addEventListener('click', placeOrder);
    
    // Cart popup events
    cartIcon.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    
    // History button event
    historyIcon.addEventListener('click', toggleHistory);
    
    // Close cart 
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartPopup.classList.contains('active')) {
            toggleCart();
        }
    });
    // Add clear history button 
    const clearHistoryBtn = document.querySelector('.clear-history-btn');
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', clearAllHistory);
    }
   
}

//for toggle cart popup
function toggleCart() {
    cartPopup.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

// for toggle between menu and history views
function toggleHistory() {
    menuSection.style.display = menuSection.style.display === 'none' ? 'block' : 'none';
    historySection.style.display = historySection.style.display === 'block' ? 'none' : 'block';
    
    // Update active state
    if (historySection.style.display === 'block') {
        historyIcon.classList.add('active');
        cartIcon.classList.remove('active');
    } else {
        historyIcon.classList.remove('active');
        cartIcon.classList.remove('active');
    }
}

// to display menu items
function renderMenu(filter = 'all') {
    menuGrid.innerHTML = '';
    
    const filteredItems = filter === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === filter);
    
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.dataset.id = item.id;
        
        menuItem.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
                <div class="ref2">${item.source} </div>
            </div>
            <div class="item-details">
                <h3 class="item-name">${item.name}</h3>
                <p class="item-description">${item.description}</p>
                <div class="item-footer">
                    <span class="item-price">€${item.price.toFixed(2)}</span>
                    <div class="quantity-control">
                        
                        <input type="number" class="quantity-input" value="1" min="1">
                        
                    </div>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);
        
        const addToCartBtn = menuItem.querySelector('.add-to-cart');
        const quantityInput = menuItem.querySelector('.quantity-input');
        
        addToCartBtn.addEventListener('click', () => addToCart(item.id));
       
    });
}

// Filter menu by category
function filterMenu(e) {
    const category = e.target.dataset.category;
    
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    e.target.classList.add('active');
    renderMenu(category);
}

// Add item to cart
function addToCart(itemId) {
    const menuItem = document.querySelector(`.menu-item[data-id="${itemId}"]`);
    const quantityInput = menuItem.querySelector('.quantity-input');
    const quantity = parseInt(quantityInput.value);
    
    const item = menuItems.find(item => item.id === itemId);
    
    // Check is there any item already in cart or not
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartUI();
    
    // Reset quantity
    quantityInput.value = 1;
    
    // Show confirmation
    alert(`${quantity} ${item.name} added to cart!`);
    
    // Open cart popup
    toggleCart();
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
}

// Update quantity in cart
function updateCartQuantity(itemId, newQuantity) {
    const cartItem = cart.find(item => item.id === itemId);
    
    if (cartItem) {
        if (newQuantity > 0) {
            cartItem.quantity = newQuantity;
        } else {
            removeFromCart(itemId);
        }
        
        saveCart();
        updateCartUI();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save order history to localStorage
function saveOrderHistory() {
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
}

// Load order history from localStorage
function loadOrderHistory() {
    const savedHistory = localStorage.getItem('orderHistory');
    if (savedHistory) {
        orderHistory = JSON.parse(savedHistory);
    }
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Show/hide empty cart message
    if (cart.length === 0) {
        emptyCart.classList.remove('hidden');
        cartSummary.classList.add('hidden');
    } else {
        emptyCart.classList.add('hidden');
        cartSummary.classList.remove('hidden');
        
        // Render cart items
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.dataset.id = item.id;
            
            cartItem.innerHTML = `
                <div class="cart-item-details">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div>
                        <div class="cart-item-name order-header1" >${item.name}</div>
                        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                </div>
                <div class="quantity-control">
                    
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1">
                   
                    
                </div>
            `;
            
            cartItems.appendChild(cartItem);
            
           
            const quantityInput = cartItem.querySelector('.quantity-input');
            
            
            quantityInput.addEventListener('change', () => {
                const newQuantity = parseInt(quantityInput.value);
                if (!isNaN(newQuantity)) {
                    updateCartQuantity(item.id, newQuantity);
                }
            });
            
            // removeBtn.addEventListener('click', () => removeFromCart(item.id));
        });
        
        // Update totals
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const deliveryFee = 2.99;
        const total = subtotal + deliveryFee;
        
        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        totalAmountEl.textContent = `$${total.toFixed(2)}`;
    }
}

// Update order history UI
function updateHistoryUI() {
    if (orderHistory.length === 0) {
        noHistory.classList.remove('hidden');
        historyList.innerHTML = '';
    } else {
        noHistory.classList.add('hidden');
        historyList.innerHTML = '';
        
        // Update history count
        historyCount.textContent = orderHistory.length;
        
        // Sort orders by date (newest first)
        const sortedHistory = [...orderHistory].sort((a, b) => new Date(b.date) - new Date(a.date));
        
        sortedHistory.forEach(order => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            const orderDate = new Date(order.date);
            const formattedDate = orderDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            historyItem.innerHTML = `
                <div class="history-header">
                    <div class="history-date">${formattedDate}</div>
                    <div class="history-total">$${order.total.toFixed(2)}</div>
                </div>
                <div class="history-delivery">
                    <strong>${order.deliveryOption === 'delivery' ? 'Delivery' : 'Pickup'}</strong> | 
                    ${order.paymentMethod === 'cash' ? 'Cash on Delivery' : 'Credit/Debit Card'}
                </div>
                <div class="history-items">
                    ${order.items.map(item => `
                        <div class="history-item-row">
                            <div class="history-item-name">${item.quantity}x ${item.name}</div>
                            <div class="history-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="history-summary">
                    <div class="history-summary-row">
                        <span>Subtotal:</span>
                        <span>$${order.subtotal.toFixed(2)}</span>
                    </div>
                    <div class="history-summary-row">
                        <span>Delivery Fee:</span>
                        <span>$${order.deliveryFee.toFixed(2)}</span>
                    </div>
                    <div class="history-summary-row total">
                        <span>Total:</span>
                        <span>$${order.total.toFixed(2)}</span>
                    </div>
                </div>
                ${order.notes ? `<div class="history-notes"><strong>Notes:</strong> ${order.notes}</div>` : ''}
            `;
            
            historyList.appendChild(historyItem);
        });
    }
}

// Place order
function placeOrder() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const deliveryOption = document.querySelector('input[name="deliveryOption"]:checked').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const notes = document.getElementById('notes').value;
    
    // Simple validation
    if (!name || !phone || !address) {
        alert('Please fill in all required fields (Name, Phone, Address)');
        return;
    }
    
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items before placing an order.');
        return;
    }
    
    // Create order object
    const order = {
        customer: { name, phone, email, address },
        deliveryOption,
        paymentMethod,
        notes,
        items: [...cart], // Create a copy of the cart
        subtotal: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
        deliveryFee: 2.99,
        total: cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 2.99,
        date: new Date().toISOString(),
        status: 'completed'
    };
    
    // Add to order history
    orderHistory.push(order);
    saveOrderHistory();
    updateHistoryUI();
    
    // Show confirmation
    alert(`Order placed successfully! Total: $${order.total.toFixed(2)}\nWe'll contact you shortly to confirm.`);
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('notes').value = '';
    
    // Close cart popup
    toggleCart();
    
    // Switch to history view
    toggleHistory();
}
// history clear
// Clear all order history
function clearAllHistory() {
    if (orderHistory.length === 0) {
        alert('Your history is already empty!');
        return;
    }

    if (confirm('Are you sure you want to clear all order history? This cannot be undone.')) {
        orderHistory = [];
        saveOrderHistory();
        updateHistoryUI();
        historyCount.textContent = '0';
        alert('All order history has been cleared.');
    }
}







// Initialize the app
init();



