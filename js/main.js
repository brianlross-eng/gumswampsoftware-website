/**
 * Gum Swamp Software - Main JavaScript
 * Version: 1.0
 * Handles navigation, scrolling, and interactive elements
 */

(function() {
    'use strict';

    // DOM Elements
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('#header');
    const heroTitle = document.querySelector('.hero-title');

    // Navigation Toggle
    function toggleNavigation() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    // Close navigation when clicking a link
    function closeNavigationOnLinkClick() {
        if (navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }

    // Smooth scroll for anchor links
    function handleSmoothScroll(event) {
        const target = event.target;
        if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
            event.preventDefault();
            const id = target.getAttribute('href').substring(1);
            const element = document.getElementById(id);
            if (element) {
                const headerHeight = header.offsetHeight;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                closeNavigationOnLinkClick();
            }
        }
    }

    // Header scroll effect
    let lastScrollY = window.pageYOffset;
    let headerVisible = true;

    function handleHeaderScroll() {
        const currentScrollY = window.pageYOffset;
        const scrollThreshold = 100;

        if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
            // Scrolling down - hide header
            header.style.transform = 'translateY(-100%)';
            headerVisible = false;
        } else if (currentScrollY < lastScrollY || currentScrollY <= scrollThreshold) {
            // Scrolling up - show header
            header.style.transform = 'translateY(0)';
            headerVisible = true;
        }

        lastScrollY = currentScrollY;
    }

    // Add scroll effect to hero section
    function handleHeroParallax() {
        if (!heroTitle) return;

        const scrollPosition = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        const heroRect = heroSection.getBoundingClientRect();
        const heroCenter = heroRect.top + heroRect.height / 2;
        const windowHeight = window.innerHeight;

        // Calculate parallax factor
        if (scrollPosition < windowHeight * 0.8) {
            const parallaxAmount = scrollPosition * 0.5;
            heroTitle.style.transform = `translateY(${parallaxAmount}px)`;
            heroTitle.style.opacity = Math.max(1 - scrollPosition / (windowHeight * 1.2), 0);
        }
    }

    // Theme toggle (dark/light mode)
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    // Initialize on DOM ready
    function initialize() {
        // Navigation event listeners
        if (navToggle) {
            navToggle.addEventListener('click', toggleNavigation);
        }

        // Close navigation when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                if (navMenu.classList.contains('active')) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });

        // Smooth scroll for anchor links
        document.addEventListener('click', handleSmoothScroll);

        // Scroll event listeners
        window.addEventListener('scroll', handleHeaderScroll);
        window.addEventListener('scroll', handleHeroParallax);

        // Initialize theme
        initTheme();

        // Add theme toggle listener (optional - can be triggered by a button)
        window.addEventListener('keydown', function(event) {
            if (event.key === 'T' && event.ctrlKey) {
                toggleTheme();
            }
        });

        console.log('Gum Swamp Software website initialized');
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

    // Expose public methods for external use
    window.GSS = {
        toggleTheme: toggleTheme,
        initTheme: initTheme
    };
})();
