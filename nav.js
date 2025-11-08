// Navigation active states
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
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
        } else if (currentPath.includes('index.html') || currentPath === '/' || currentPath.endsWith('/')) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === 'index.html') {
                    link.classList.add('active');
                }
            });
        }
    }

    updateActiveNav();

    // Update on hash changes if needed
    window.addEventListener('hashchange', updateActiveNav);
});
