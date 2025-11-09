// === ADVANCED SCROLL-TRIGGERED ANIMATIONS ===
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Trigger counter animation if it's a stat
            if (entry.target.classList.contains('hero-stats')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const problemCards = document.querySelectorAll('.problem-card');
    const heroStats = document.querySelector('.hero-stats');
    const clientLogos = document.querySelectorAll('.client-logo');

    problemCards.forEach(card => observer.observe(card));
    if (heroStats) observer.observe(heroStats);
    clientLogos.forEach(logo => observer.observe(logo));

    // Start parallax after page load
    initParallax();

    // Initialize smart navigation
    initSmartNav();

    // Trigger counter animation on hero load
    setTimeout(() => {
        animateCounters();
    }, 1000);
});

// === COUNTER ANIMATION ===
let countersAnimated = false;

function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// === MULTI-LAYER PARALLAX SCROLLING ===
function initParallax() {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxLayers.forEach(layer => {
            const speed = layer.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });

    // Mouse parallax effect
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        parallaxLayers.forEach((layer, index) => {
            const depth = (index + 1) * 15;
            const moveX = (mouseX - 0.5) * depth;
            const moveY = (mouseY - 0.5) * depth;

            const scrolled = window.pageYOffset;
            const speed = layer.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);

            layer.style.transform = `translate3d(${moveX}px, ${yPos + moveY}px, 0)`;
        });
    });
}

// Background pattern is now pure CSS - no JS interaction needed for professional feel

// === SMOOTH SCROLL FOR CTA BUTTON ===
document.querySelector('.cta-button').addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// === CAROUSEL FUNCTIONALITY ===
class Carousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.slides = Array.from(document.querySelectorAll('.client-slide'));
        this.prevBtn = document.querySelector('.carousel-btn.prev');
        this.nextBtn = document.querySelector('.carousel-btn.next');
        this.dotsContainer = document.querySelector('.carousel-dots');

        this.currentIndex = 0;
        this.slidesToShow = this.getSlidesToShow();
        this.totalSlides = this.slides.length;

        this.init();
    }

    getSlidesToShow() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    init() {
        this.createDots();
        this.updateCarousel();

        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Auto-play
        this.startAutoPlay();

        // Pause on hover
        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());

        // Responsive
        window.addEventListener('resize', () => {
            this.slidesToShow = this.getSlidesToShow();
            this.updateCarousel();
        });
    }

    createDots() {
        const totalDots = Math.ceil(this.totalSlides / this.slidesToShow);

        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');

            dot.addEventListener('click', () => {
                this.currentIndex = i;
                this.updateCarousel();
            });

            this.dotsContainer.appendChild(dot);
        }
    }

    updateCarousel() {
        const slideWidth = this.slides[0].offsetWidth;
        const gap = 32; // 2rem gap
        const offset = -(this.currentIndex * (slideWidth + gap) * this.slidesToShow);

        this.track.style.transform = `translateX(${offset}px)`;

        // Update dots
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    next() {
        const maxIndex = Math.ceil(this.totalSlides / this.slidesToShow) - 1;
        this.currentIndex = (this.currentIndex + 1) > maxIndex ? 0 : this.currentIndex + 1;
        this.updateCarousel();
    }

    prev() {
        const maxIndex = Math.ceil(this.totalSlides / this.slidesToShow) - 1;
        this.currentIndex = (this.currentIndex - 1) < 0 ? maxIndex : this.currentIndex - 1;
        this.updateCarousel();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.next(), 4000);
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});

// === SUBTLE SCROLL INDICATOR FADE ===
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '0.4';
        }
    }
});

// Removed opacity fade for more professional, stable appearance

// === SMART NAVIGATION (Hide on scroll down, show on scroll up) ===
function initSmartNav() {
    const nav = document.querySelector('.fixed-nav');
    let lastScroll = 0;
    let scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for style changes
        if (currentScroll > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }

        // Hide/show nav based on scroll direction
        if (currentScroll > scrollThreshold) {
            if (currentScroll > lastScroll && !nav.classList.contains('nav-hidden')) {
                // Scrolling down
                nav.classList.add('nav-hidden');
            } else if (currentScroll < lastScroll && nav.classList.contains('nav-hidden')) {
                // Scrolling up
                nav.classList.remove('nav-hidden');
            }
        }

        lastScroll = currentScroll;
    });
}
