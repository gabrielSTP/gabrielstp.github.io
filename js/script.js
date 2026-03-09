// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', function () {
    // Modal functionality
    const modalButtons = document.querySelectorAll('.modal-button');

    modalButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';

                // Close modal when clicking the close button
                const closeButtons = modal.getElementsByClassName('close-button');
                if (closeButtons[0]) {
                    closeButtons[0].addEventListener('click', function () {
                        modal.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    });
                }

                // Close modal when clicking outside
                modal.addEventListener('click', function (event) {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                });

                // Close modal with Escape key
                document.addEventListener('keydown', function (event) {
                    if (event.key === 'Escape' && modal.style.display === 'block') {
                        modal.style.display = 'none';
                        document.body.style.overflow = 'auto';
                    }
                });
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all glass cards and projects
    const cards = document.querySelectorAll('.glass-card, .project');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Navigation active state
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Parallax effect on scroll (subtle)
    const parallaxElements = document.querySelectorAll('.glass-card');
    window.addEventListener('scroll', function () {
        parallaxElements.forEach(element => {
            const scrollPosition = window.scrollY;
            const elementPosition = element.offsetTop;
            const distance = scrollPosition - elementPosition;

            if (distance > -window.innerHeight && distance < window.innerHeight) {
                element.style.transform = `translateY(${distance * 0.1}px)`;
            }
        });
    });
});

// Prevent multiple click handlers on close button
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('close-button')) {
        const modal = event.target.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});
