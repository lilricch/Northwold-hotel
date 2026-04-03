// ==================== Navigation ====================
const navbar = document.getElementById('navbar');
const navLinks = document.getElementById('navLinks');
const mobileMenuBtn = document.getElementById('mobile-menu');
const mobileMenuIcon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;

// Sticky header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Efficient Scroll reveal using IntersectionObserver
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Mobile menu toggle with body scroll lock
mobileMenuBtn.addEventListener('click', () => {
    const isShowing = navLinks.classList.toggle('show');
    document.body.style.overflow = isShowing ? 'hidden' : 'auto';
    if (mobileMenuIcon) {
        mobileMenuIcon.classList.toggle('fa-bars');
        mobileMenuIcon.classList.toggle('fa-times');
    }
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        document.body.style.overflow = 'auto';
        if (mobileMenuIcon) {
            mobileMenuIcon.classList.add('fa-bars');
            mobileMenuIcon.classList.remove('fa-times');
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
// ==================== Utility Functions ====================
// Prevent form submission for demo
function handleFormSubmit(e) {
    e.preventDefault();
    return false;
}

// Consolidated smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"], .hero-btns a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Log page initialization
console.log('Northwold Hotel Website - Fully Loaded');
