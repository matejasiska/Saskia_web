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

    let lightbox = document.getElementById('lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);
    }

    const images = document.querySelectorAll('.image-placeholder img');

    images.forEach(img => {
        img.addEventListener('click', e => {
            lightbox.classList.add('active');


            const lightboxImg = document.createElement('img');
            lightboxImg.src = img.src;


            lightboxImg.onclick = (e) => {
                e.stopPropagation();

                if (lightboxImg.classList.contains('zoomed')) {
                    lightboxImg.classList.remove('zoomed');
                    setTimeout(() => {
                        lightboxImg.style.transformOrigin = 'center center';
                    }, 300);
                } else {

                    const rect = lightboxImg.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;


                    lightboxImg.style.transformOrigin = `${x}px ${y}px`;

                    lightboxImg.classList.add('zoomed');
                }
            };


            lightboxImg.ondblclick = (e) => {
                e.stopPropagation();
                lightbox.classList.remove('active');
            };


            lightbox.innerHTML = '';
            lightbox.appendChild(lightboxImg);
        });
    });

    lightbox.onclick = () => {
        lightbox.classList.remove('active');
    };

    /* ACTIVE MENU HIGHLIGHTING */
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.navbar ul li a');

    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    /* DYNAMIC COPYRIGHT YEAR */
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        const yearRegex = /\d{4}/;
        if (copyrightElement.innerHTML.match(yearRegex)) {
            copyrightElement.innerHTML = copyrightElement.innerHTML.replace(yearRegex, currentYear);
        }
    } else {
        const footer = document.querySelector('footer');
        if (footer && footer.innerText.includes('2025')) {
            const currentYear = new Date().getFullYear();
            footer.innerHTML = footer.innerHTML.replace('2025', currentYear);
        }
    }
});
