
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
    
});

