// Navigation active states
(function() {
    function updateNavActiveState() {
        const navLinks = document.querySelectorAll('.nav a');
        const currentPath = window.location.pathname;

        // Reset all active states
        navLinks.forEach(link => link.classList.remove('active'));

        // Set active based on current path
        if (currentPath.includes('news.html')) {
            document.querySelectorAll('.nav a[href="news.html"]').forEach(link => link.classList.add('active'));
        } else if (currentPath.includes('reviews.html')) {
            document.querySelectorAll('.nav a[href="reviews.html"]').forEach(link => link.classList.add('active'));
        } else {
            // Index or home
            document.querySelectorAll('.nav a[href="index.html"], .nav a[href="#home"]').forEach(link => link.classList.add('active'));
        }
    }

    // Run immediately and on DOM load
    updateNavActiveState();
    document.addEventListener('DOMContentLoaded', updateNavActiveState);
})();
