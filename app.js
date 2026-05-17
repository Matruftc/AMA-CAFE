document.addEventListener('DOMContentLoaded', () => {
    initFloatingParticles();
    initScrollObserver();
    initNavbarScroll();
});

// 1. Floating Coffee Animation Engine
function initFloatingParticles() {
    const container = document.getElementById('particles-container');
    // An array of coffee-themed icons to float up the screen
    const icons = ['☕', '🤎', '✨', '💨', '☕️']; 
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.classList.add('coffee-particle');
        
        // Randomize the icon
        particle.innerText = icons[Math.floor(Math.random() * icons.length)];
        
        // Randomize starting position (X-axis)
        particle.style.left = Math.random() * 100 + 'vw';
        
        // Randomize size
        particle.style.fontSize = (Math.random() * 1.5 + 0.8) + 'rem';
        
        // Randomize float speed (between 6 and 12 seconds)
        const duration = Math.random() * 6 + 6;
        particle.style.animationDuration = duration + 's';
        
        container.appendChild(particle);
        
        // Garbage collection: remove element after animation finishes
        setTimeout(() => particle.remove(), duration * 1000);
        
    }, 1000); // Spawns a new particle every 1 second
}

// 2. Advanced Scroll Reveal using Intersection Observer
function initScrollObserver() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observerOptions = {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before the element fully enters viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once it has animated in
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => observer.observe(reveal));
}

// 3. Dynamic Sticky Navbar
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        // Add 'scrolled' class if user scrolls past 50px
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}