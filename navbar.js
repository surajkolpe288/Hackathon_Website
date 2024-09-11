// scripts/navbar.js
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    const navbar = document.querySelector('.futuristic-navbar');
    const links = document.querySelectorAll('.navbar-links li a');
    const darkModeToggle = document.createElement('button');

    // Set up dark mode toggle button
    darkModeToggle.textContent = '🌙';
    darkModeToggle.classList.add('dark-mode-toggle');
    document.body.appendChild(darkModeToggle);

    // Load theme preference from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light-mode';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
        }
        localStorage.setItem('theme', theme);
    });

    // Toggle mobile menu
    toggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });

    // Close mobile menu on item click
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbarLinks.classList.remove('active');
            }
            // Scroll to section smoothly
            const targetId = link.getAttribute('href').substring(1); // Remove '#' from href
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll-triggered floating effect using GSAP
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(navbar, {
        y: -10,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
            trigger: navbar,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Fade-in animation for the navbar
    gsap.from(navbar, {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power2.out"
    });

    // Navbar link hover effect
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, { color: "#00f", duration: 0.3 });
        });
        link.addEventListener('mouseleave', () => {
            gsap.to(link, { color: "#fff", duration: 0.3 });
        });
    });

    // 3D Parallax Effect
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX) / 50;
        const y = (window.innerHeight - e.pageY) / 50;
        const rotateX = (window.innerHeight / 2 - e.pageY) / 50;
        const rotateY = (e.pageX - window.innerWidth / 2) / 50;

        gsap.to(navbar, {
            x: x,
            y: y,
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});
