// SIMPLE, BULLETPROOF VERSION - GUARANTEED TO WORK

// Debug message to confirm script is loading
console.log('🎯 script.js is loading!');

// Wait for page to fully load
window.addEventListener('load', function() {
    console.log('✅ Page fully loaded');
    initPortfolio();
});

function initPortfolio() {
    console.log('🚀 Initializing portfolio features');
    
    // 1. THEME TOGGLE - SIMPLE VERSION
    const themeButton = document.getElementById('theme-toggle');
    console.log('🔘 Theme button:', themeButton);
    
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
        // Set initial text
        themeButton.textContent = document.body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
    } else {
        console.error('❌ Theme button not found!');
    }
    
    // 2. TIME GREETING - SIMPLE VERSION
    addTimeGreeting();
    
    // 3. FORM VALIDATION - SIMPLE VERSION
    setupFormValidation();
    
    // 4. SMOOTH SCROLLING
    setupSmoothScrolling();
    
    // 5. NAVBAR SCROLL EFFECT
    setupNavbarScroll();
    
    console.log('🎉 All features initialized');
}

// THEME TOGGLE FUNCTION
function toggleTheme() {
    console.log('🎨 Toggling theme');
    document.body.classList.toggle('dark-theme');
    
    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        themeButton.textContent = document.body.classList.contains('dark-theme') ? 'Light Mode' : 'Dark Mode';
    }
    
    // Save preference
    localStorage.setItem('portfolio-theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// TIME GREETING FUNCTION
function addTimeGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) greeting = "🌞 Good morning!";
    else if (hour < 18) greeting = "🌅 Good afternoon!";
    else greeting = "🌙 Good evening!";
    
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
        // Remove existing greeting if any
        const oldGreeting = document.getElementById('dynamic-greeting');
        if (oldGreeting) oldGreeting.remove();
        
        // Create new greeting
        const greetingElement = document.createElement('div');
        greetingElement.id = 'dynamic-greeting';
        greetingElement.textContent = greeting;
        greetingElement.style.cssText = `
            font-size: 1.4rem;
            font-weight: bold;
            margin: 10px 0;
            color: #ffd166;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        `;
        
        // Insert after the tagline
        const tagline = heroSection.querySelector('p');
        if (tagline) {
            tagline.parentNode.insertBefore(greetingElement, tagline.nextSibling);
            console.log('⏰ Greeting added:', greeting);
        }
    }
}

// FORM VALIDATION FUNCTION
function setupFormValidation() {
    const form = document.getElementById('contact-form');
    console.log('📝 Contact form:', form);
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('📤 Form submitted');
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name) {
                alert('❌ Please enter your name');
                return;
            }
            
            if (!email) {
                alert('❌ Please enter your email');
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                alert('❌ Please enter a valid email address');
                return;
            }
            
            if (!message) {
                alert('❌ Please enter a message');
                return;
            }
            
            // Success
            alert(`✅ Thank you, ${name}! Your message has been sent.`);
            form.reset();
        });
    }
}

// SMOOTH SCROLLING FUNCTION
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    console.log('🛷 Navigation links found:', links.length);
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// NAVBAR SCROLL FUNCTION
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                navbar.style.background = '';
            }
        });
    }
}

// Load saved theme on page load
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        console.log('🌙 Loaded dark theme from storage');
    }
}

// Initialize saved theme when script loads
loadSavedTheme();