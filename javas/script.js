// Debug: Check if JavaScript is loading
console.log('🎯 JavaScript is loading!');

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM is ready!');
    
    // ===== 1. THEME TOGGLE =====
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    console.log('🔘 Theme button found:', themeToggle);
    
    // Set initial button text
    themeToggle.textContent = 'Dark Mode';
    
    themeToggle.addEventListener('click', function() {
        console.log('🎨 Theme button clicked!');
        
        // Toggle dark theme
        body.classList.toggle('dark-theme');
        
        // Update button text
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Light Mode';
            console.log('🌙 Dark mode activated');
        } else {
            themeToggle.textContent = 'Dark Mode';
            console.log('☀️ Light mode activated');
        }
        
        // Save to localStorage
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark-theme' : '');
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-theme') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Light Mode';
        console.log('📁 Loaded saved dark theme');
    }
    
    // ===== 2. TIME-BASED GREETING =====
    function addGreeting() {
        const hour = new Date().getHours();
        let greeting;
        
        if (hour < 12) {
            greeting = "🌞 Good morning!";
        } else if (hour < 18) {
            greeting = "🌅 Good afternoon!";
        } else {
            greeting = "🌙 Good evening!";
        }
        
        // Remove existing greeting if any
        const oldGreeting = document.getElementById('time-greeting');
        if (oldGreeting) oldGreeting.remove();
        
        // Create and add greeting
        const greetingElement = document.createElement('div');
        greetingElement.id = 'time-greeting';
        greetingElement.textContent = greeting;
        greetingElement.style.cssText = `
            font-size: 1.5rem;
            font-weight: bold;
            margin-top: 10px;
            color: #ffd166;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        `;
        
        // Add to hero section
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.appendChild(greetingElement);
            console.log('⏰ Greeting added:', greeting);
        }
    }
    
    addGreeting();
    
    // ===== 3. FORM VALIDATION =====
    const contactForm = document.getElementById('contact-form');
    console.log('📝 Contact form found:', contactForm);
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('📤 Form submission started');
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            console.log('Form data:', { name, email, message });
            
            // Validation
            if (!name || !email || !message) {
                alert('❌ Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('❌ Please enter a valid email address (e.g., example@email.com)');
                return;
            }
            
            // Success
            alert(`✅ Thank you, ${name}! Your message has been sent.`);
            console.log('✅ Form submitted successfully');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // ===== 4. SMOOTH SCROLLING =====
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                console.log('🛷 Smooth scrolling to:', targetId);
            }
        });
    });
    
   
});