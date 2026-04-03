// ==================== Navigation ====================
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const mobileMenuBtn = document.getElementById('mobile-menu');

// Sticky header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    // Scroll reveal animations
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a, .hero-btns a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== Booking Modal ====================
const modal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');
const openBtns = document.querySelectorAll('.open-booking');
const closeBtn = document.querySelector('.close-modal');

// Open booking modal
openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

// Close booking modal
closeBtn.addEventListener('click', closeBookingModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeBookingModal();
    }
});

function closeBookingModal() {
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Handle booking form submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = bookingForm.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = 'Processing...';
    btn.disabled = true;

    setTimeout(() => {
        alert('Thank you! Your reservation request has been received. Our team will contact you shortly to confirm your booking.');
        btn.innerText = originalText;
        btn.disabled = false;
        bookingForm.reset();
        closeBookingModal();
    }, 1500);
});

// ==================== Contact Form ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const originalText = btn.innerText;

    btn.innerText = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        btn.innerText = originalText;
        btn.disabled = false;
        contactForm.reset();
    }, 1500);
});

// ==================== Lightbox ====================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.querySelector('.lightbox-close');

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('show');
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('show');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close lightbox on click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

lightboxClose.addEventListener('click', closeLightbox);

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        closeLightbox();
    }
});

// Gallery image click handler
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
        openLightbox(img.src);
    });
});

// ==================== Animations ====================
// Initial reveal animation on page load
window.addEventListener('load', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
        setTimeout(() => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('active');
            }
        }, index * 100);
    });
});

// ==================== Utility Functions ====================
// Prevent form submission for demo
function handleFormSubmit(e) {
    e.preventDefault();
    return false;
}

// Add smooth scrolling to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Log page initialization
console.log('Northwold Hotel Website - Fully Loaded');
