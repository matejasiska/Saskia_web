document.addEventListener('DOMContentLoaded', () => {
    /* MOBILE NAVIGATION */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navbar ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('open');
            });
        });
    }

    /* LIGHTBOX FUNCTIONALITY */
    // 1. Create lightbox element if it doesn't exist
    let lightbox = document.getElementById('lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);
    }

    // 2. Select all images inside placeholders
    const images = document.querySelectorAll('.image-placeholder img');

    // 3. Add click event to open lightbox
    images.forEach(img => {
        img.addEventListener('click', e => {
            lightbox.classList.add('active');

            // Create or update img element inside lightbox
            const lightboxImg = document.createElement('img');
            lightboxImg.src = img.src;

            // Clear previous content and add new image
            lightbox.innerHTML = '';
            lightbox.appendChild(lightboxImg);
        });
    });

    // 4. Close lightbox on click
    lightbox.onclick = () => {
        lightbox.classList.remove('active');
    };
});
