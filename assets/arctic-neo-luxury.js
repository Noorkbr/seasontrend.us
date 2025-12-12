/**
 * Arctic Neo-Luxury Interactive Features
 * Requires: GSAP (GreenSock) and Matter.js
 */

// Wait for DOM and external libraries to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // SECTION 1: PORTAL HERO - Particle Canvas & Magnetic Button
    // ============================================
    
    function initHeroPortal() {
        const canvas = document.getElementById('particle-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null };
        
        // Set canvas size
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = Math.random() > 0.5 ? 'rgba(0, 242, 255, 0.8)' : 'rgba(189, 0, 255, 0.8)';
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                // Wrap around edges
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 20;
                ctx.shadowColor = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }
        
        // Initialize particles
        function initParticles() {
            particles = [];
            const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 150);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        }
        initParticles();
        
        // Animation loop
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            requestAnimationFrame(animateParticles);
        }
        animateParticles();
        
        // Mouse tracking for parallax
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        
        // Product float rotation with mouse
        const productFloat = document.querySelector('.product-float');
        if (productFloat) {
            window.addEventListener('mousemove', (e) => {
                const xAxis = (window.innerWidth / 2 - e.clientX) / 25;
                const yAxis = (window.innerHeight / 2 - e.clientY) / 25;
                productFloat.style.transform = `translate(-50%, -50%) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            });
        }
        
        // Parallax layers
        const parallaxLayers = document.querySelectorAll('.parallax-layer');
        window.addEventListener('mousemove', (e) => {
            parallaxLayers.forEach((layer, index) => {
                const speed = (index + 1) * 0.02;
                const x = (window.innerWidth - e.clientX * speed) / 100;
                const y = (window.innerHeight - e.clientY * speed) / 100;
                layer.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
        
        // Magnetic button effect
        const glassPillBtn = document.querySelector('.glass-pill-btn');
        if (glassPillBtn) {
            glassPillBtn.addEventListener('mousemove', (e) => {
                const rect = glassPillBtn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                glassPillBtn.style.transform = `translateY(-2px) scale(1.05) translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            glassPillBtn.addEventListener('mouseleave', () => {
                glassPillBtn.style.transform = '';
            });
        }
    }
    
    // ============================================
    // SECTION 2: HOLOGRAPHIC PRODUCT GRID - 3D Tilt Cards
    // ============================================
    
    function initProductGrid() {
        const cards = document.querySelectorAll('.glass-product-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
    
    // ============================================
    // SECTION 3: VIRAL TRUST WALL - Infinite Scroll
    // ============================================
    
    function initTrustWall() {
        const container = document.querySelector('.video-scroll-container');
        const track = document.querySelector('.video-track');
        
        if (!container || !track) return;
        
        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;
        let velocity = 0;
        let animationId = null;
        
        // Clone videos for infinite scroll
        const videos = Array.from(track.children);
        const clones = videos.map(video => video.cloneNode(true));
        clones.forEach(clone => track.appendChild(clone));
        
        // Mouse/Touch drag handlers
        container.addEventListener('mousedown', startDragging);
        container.addEventListener('touchstart', startDragging);
        
        container.addEventListener('mousemove', drag);
        container.addEventListener('touchmove', drag);
        
        container.addEventListener('mouseup', stopDragging);
        container.addEventListener('mouseleave', stopDragging);
        container.addEventListener('touchend', stopDragging);
        
        function startDragging(e) {
            isDragging = true;
            startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
            scrollLeft = parseInt(track.style.transform.replace('translateX(', '').replace('px)', '') || '0');
            velocity = 0;
            cancelAnimationFrame(animationId);
        }
        
        function drag(e) {
            if (!isDragging) return;
            e.preventDefault();
            
            const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
            const walk = (x - startX) * 2;
            velocity = walk - (scrollLeft - parseInt(track.style.transform.replace('translateX(', '').replace('px)', '') || '0'));
            
            const newPosition = scrollLeft + walk;
            track.style.transform = `translateX(${newPosition}px)`;
        }
        
        function stopDragging() {
            isDragging = false;
            inertiaScroll();
        }
        
        // Inertia scrolling
        function inertiaScroll() {
            if (Math.abs(velocity) > 0.5) {
                velocity *= 0.95;
                const currentPos = parseInt(track.style.transform.replace('translateX(', '').replace('px)', '') || '0');
                const newPos = currentPos + velocity;
                
                // Loop the scroll
                const trackWidth = track.scrollWidth / 2;
                if (newPos < -trackWidth) {
                    track.style.transform = `translateX(0px)`;
                } else if (newPos > 0) {
                    track.style.transform = `translateX(${-trackWidth}px)`;
                } else {
                    track.style.transform = `translateX(${newPos}px)`;
                }
                
                animationId = requestAnimationFrame(inertiaScroll);
            }
        }
        
        // Auto-scroll when not dragging
        let autoScrollId = null;
        function autoScroll() {
            if (!isDragging) {
                const currentPos = parseInt(track.style.transform.replace('translateX(', '').replace('px)', '') || '0');
                const newPos = currentPos - 0.5;
                
                const trackWidth = track.scrollWidth / 2;
                if (newPos < -trackWidth) {
                    track.style.transform = `translateX(0px)`;
                } else {
                    track.style.transform = `translateX(${newPos}px)`;
                }
            }
            autoScrollId = requestAnimationFrame(autoScroll);
        }
        autoScroll();
        
        // Animate verified bubbles
        const bubbles = document.querySelectorAll('.verified-bubble');
        bubbles.forEach((bubble, index) => {
            setTimeout(() => {
                bubble.style.animation = `bubbleFloat 2s ease-in-out infinite`;
                bubble.style.animationDelay = `${index * 0.3}s`;
            }, index * 500);
        });
    }
    
    // ============================================
    // SECTION 4: SNOWGLOBE GAMIFICATION - Matter.js Physics
    // ============================================
    
    function initSnowglobe() {
        const container = document.getElementById('snowglobe-container');
        const canvas = document.getElementById('snowglobe-canvas');
        const discountReveal = document.getElementById('discount-reveal');
        
        if (!container || !canvas || typeof Matter === 'undefined') {
            console.log('Snowglobe: Missing elements or Matter.js not loaded');
            return;
        }
        
        // Matter.js setup
        const Engine = Matter.Engine;
        const Render = Matter.Render;
        const World = Matter.World;
        const Bodies = Matter.Bodies;
        const Body = Matter.Body;
        
        const engine = Engine.create();
        const world = engine.world;
        world.gravity.y = 0.5;
        
        // Create renderer
        const render = Render.create({
            canvas: canvas,
            engine: engine,
            options: {
                width: 200,
                height: 200,
                wireframes: false,
                background: 'transparent'
            }
        });
        
        // Create snow particles
        const snowflakes = [];
        for (let i = 0; i < 30; i++) {
            const snowflake = Bodies.circle(
                Math.random() * 180 + 10,
                Math.random() * 180 + 10,
                Math.random() * 3 + 2,
                {
                    restitution: 0.7,
                    friction: 0.05,
                    render: {
                        fillStyle: '#ffffff'
                    }
                }
            );
            snowflakes.push(snowflake);
        }
        
        // Create invisible walls
        const wallOptions = { isStatic: true, render: { visible: false } };
        const wallThickness = 10;
        const walls = [
            Bodies.rectangle(100, 0, 200, wallThickness, wallOptions),
            Bodies.rectangle(100, 200, 200, wallThickness, wallOptions),
            Bodies.rectangle(0, 100, wallThickness, 200, wallOptions),
            Bodies.rectangle(200, 100, wallThickness, 200, wallOptions)
        ];
        
        World.add(world, [...snowflakes, ...walls]);
        
        // Run the engine and renderer
        Engine.run(engine);
        Render.run(render);
        
        // Mouse shake detection
        let shakeIntensity = 0;
        let shakeThreshold = 50;
        let isShaking = false;
        let shakeTimer = null;
        let lastMouseX = 0;
        let lastMouseY = 0;
        let cracked = false;
        
        container.addEventListener('mousemove', (e) => {
            const deltaX = Math.abs(e.clientX - lastMouseX);
            const deltaY = Math.abs(e.clientY - lastMouseY);
            const delta = deltaX + deltaY;
            
            shakeIntensity += delta;
            
            // Apply force to snowflakes
            if (delta > 5) {
                snowflakes.forEach(snowflake => {
                    const forceMagnitude = 0.001 * delta;
                    Body.applyForce(snowflake, snowflake.position, {
                        x: (Math.random() - 0.5) * forceMagnitude,
                        y: (Math.random() - 0.5) * forceMagnitude
                    });
                });
            }
            
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
            
            // Check for sustained shaking
            if (shakeIntensity > shakeThreshold && !isShaking && !cracked) {
                isShaking = true;
                clearTimeout(shakeTimer);
                shakeTimer = setTimeout(() => {
                    if (shakeIntensity > shakeThreshold * 3) {
                        crackGlass();
                    }
                    isShaking = false;
                    shakeIntensity = 0;
                }, 3000);
            }
            
            // Decay shake intensity
            setTimeout(() => {
                shakeIntensity = Math.max(0, shakeIntensity - 10);
            }, 100);
        });
        
        function crackGlass() {
            if (cracked) return;
            cracked = true;
            
            // Add crack effect
            const glass = container.querySelector('.snowglobe-glass');
            if (glass) {
                const crack = document.createElement('div');
                crack.className = 'snowglobe-crack active';
                glass.appendChild(crack);
            }
            
            // Reveal discount
            if (discountReveal) {
                discountReveal.classList.remove('hidden');
                discountReveal.classList.add('active');
            }
            
            // Explode snow
            snowflakes.forEach(snowflake => {
                const forceMagnitude = 0.1;
                Body.applyForce(snowflake, snowflake.position, {
                    x: (Math.random() - 0.5) * forceMagnitude,
                    y: -Math.random() * forceMagnitude
                });
            });
        }
    }
    
    // ============================================
    // GSAP ANIMATIONS (if GSAP is loaded)
    // ============================================
    
    function initGSAPAnimations() {
        if (typeof gsap === 'undefined') {
            console.log('GSAP not loaded, skipping advanced animations');
            return;
        }
        
        // Animate hero content on load
        gsap.from('.liquid-headline', {
            duration: 1.5,
            y: 100,
            opacity: 0,
            ease: 'power4.out'
        });
        
        gsap.from('.glass-pill-btn', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.5,
            ease: 'back.out(1.7)'
        });
        
        // Animate product cards on scroll
        const productCards = document.querySelectorAll('.glass-product-card');
        productCards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                duration: 0.8,
                y: 100,
                opacity: 0,
                delay: index * 0.1,
                ease: 'power3.out'
            });
        });
        
        // Quick Buy button spring animation
        const quickBuyButtons = document.querySelectorAll('.quick-buy-btn');
        quickBuyButtons.forEach(btn => {
            const card = btn.closest('.glass-product-card');
            if (card) {
                card.addEventListener('mouseenter', () => {
                    gsap.to(btn, {
                        duration: 0.6,
                        y: 0,
                        opacity: 1,
                        ease: 'elastic.out(1, 0.5)'
                    });
                });
            }
        });
    }
    
    // ============================================
    // INITIALIZE ALL SECTIONS
    // ============================================
    
    initHeroPortal();
    initProductGrid();
    initTrustWall();
    
    // Wait a bit for external libraries to load
    setTimeout(() => {
        initSnowglobe();
        initGSAPAnimations();
    }, 500);
    
});
