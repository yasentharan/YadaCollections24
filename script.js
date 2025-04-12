// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Simple Animation: Fade-in on Scroll
const animateElements = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

animateElements.forEach(el => observer.observe(el));

// Shopping Cart Functionality
let cart = [];
const cartCount = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: parseFloat(button.dataset.price)
        };
        cart.push(product);
        cartCount.textContent = cart.length;
        alert(`${product.name} added to cart!`);
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !emailRegex.test(email) || !message) {
        alert('Please fill all fields correctly.');
        return;
    }

    alert('Message sent successfully!');
    contactForm.reset();
});

// Newsletter Popup
const popup = document.getElementById('newsletter-popup');
const closePopup = document.querySelector('.close-popup');
const newsletterForm = document.getElementById('newsletter-form');

setTimeout(() => {
    popup.style.display = 'block';
}, 3000);

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value.trim();
    if (email) {
        alert('Subscribed successfully!');
        popup.style.display = 'none';
        newsletterForm.reset();
    } else {
        alert('Please enter a valid email.');
    }
});

// Simple JavaScript Function: Toggle Search Bar (Placeholder)
function toggleSearch() {
    alert('Search functionality coming soon!');
}

document.querySelector('.search-icon').addEventListener('click', toggleSearch);

// Hero Animation Trigger
document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero-image');
    const heroText = document.querySelector('.hero-text');

    // Add loaded class after a short delay to ensure smooth animation
    setTimeout(() => {
        heroImage.classList.add('loaded');
        heroText.classList.add('loaded');
    }, 100);
});