// Navigation active states
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    const currentPath = window.location.pathname;

    function updateActiveNav() {
        // Reset all active states
        navLinks.forEach(link => link.classList.remove('active'));

        // Check current page and set active link
        if (currentPath.includes('news.html')) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === 'news.html') {
                    link.classList.add('active');
                }
            });
        } else if (currentPath.includes('reviews.html')) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === 'reviews.html') {
                    link.classList.add('active');
                }
            });
        } else {
            // On index page - always highlight "Главная"
            navLinks.forEach(link => {
                if (link.getAttribute('href') === 'index.html' || link.getAttribute('href') === '#home') {
                    link.classList.add('active');
                }
            });
        }
    }

    // Force initial check
    updateActiveNav();
});
