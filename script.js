// SeasonTrend - Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    mobileMenuToggle.textContent = '☰';
                }
            }
        });
    });

    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    function updateActiveLink() {
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // Header Shadow on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        } else {
            header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    });

    // Shopping Cart Functionality
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.product-card .btn-primary');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Increment cart count
            cartCount++;
            cartCountElement.textContent = cartCount;
            
            // Add animation
            cartCountElement.style.transform = 'scale(1.3)';
            setTimeout(() => {
                cartCountElement.style.transform = 'scale(1)';
            }, 200);

            // Show success message
            showNotification('Product added to cart! 🛒');
            
            // Change button text temporarily
            const originalText = this.textContent;
            this.textContent = 'Added ✓';
            this.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 1500);
        });
    });

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            if (email) {
                showNotification('Thank you for subscribing! Check your email for your 15% discount code. 🎉');
                emailInput.value = '';
            }
        });
    }

    // Product Card Hover Effect
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Category Card Click
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryTitle = this.querySelector('.category-title').textContent;
            showNotification(`Browsing ${categoryTitle} products...`);
        });
    });

    // Hero CTA Buttons
    const ctaButtons = document.querySelectorAll('.hero-cta .btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Explore')) {
                document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Notification System
    function showNotification(message) {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 9999;
            animation: slideIn 0.3s ease;
            max-width: 300px;
            font-weight: 600;
        `;

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }

        @media (max-width: 768px) {
            .nav-menu.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                padding: 1rem;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                z-index: 100;
            }
        }
    `;
    document.head.appendChild(style);

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.product-card, .category-card, .testimonial-card, .badge').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Search Button Functionality
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            showNotification('Search feature coming soon! 🔍');
        });
    }

    // Cart Button Click
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            if (cartCount > 0) {
                showNotification(`You have ${cartCount} item(s) in your cart 🛒`);
            } else {
                showNotification('Your cart is empty. Start shopping! 🛍️');
            }
        });
    }

    // Performance Optimization: Lazy load images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    // Track user engagement for analytics
    let engagementScore = 0;
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
        }
    });

    // Track time on page (analytics can be connected here)
    const startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const timeSpent = (Date.now() - startTime) / 1000;
        // Analytics data collection point - integrate with Google Analytics or similar
        if (window.gtag) {
            window.gtag('event', 'user_engagement', {
                timeSpent: timeSpent,
                maxScroll: maxScroll.toFixed(2),
                cartInteractions: cartCount
            });
        }
    });

    // Set current year in footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
