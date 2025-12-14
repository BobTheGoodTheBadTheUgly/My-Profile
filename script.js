document.addEventListener("DOMContentLoaded", () => {
    
    // Select all elements that need to be animated (mostly for index.html)
    const animatedSections = document.querySelectorAll('.fade-in, .fade-in-delayed'); 

    // Intersection Observer for scroll-based animations (only relevant on index.html)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of element visible to trigger
    });

    // Observe each animated section (only if they exist, i.e., on index.html)
    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // For single-page sections (like 'about' or 'works' pages), add 'is-visible' directly on load
    const singlePageSections = document.querySelectorAll('.fade-in-section');
    singlePageSections.forEach(section => {
        if (section) {
            section.classList.add('is-visible');
        }
    });


    // --- Navigation Logic ---
    // Update active nav link based on current file
    const currentPath = window.location.pathname.split("/").pop(); // Gets 'index.html', 'about.html', 'works.html', or ''
    
    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('active');
        
        // Handle root path vs index.html
        if (currentPath === '' && a.getAttribute('href') === 'index.html') {
            a.classList.add('active');
        } 
        // Handle specific page paths
        else if (a.getAttribute('href') === currentPath) {
            a.classList.add('active');
        }
    });

});