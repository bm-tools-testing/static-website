// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initSmoothScrolling();
    initFormValidation();
    initAnimations();
    initHeaderScrollEffect();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const nav = document.querySelector('.nav');
                const mobileToggle = document.querySelector('.mobile-menu-toggle');
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            }
        });
    });
}

// Form Validation and Handling
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    
    if (!form) return;
    
    // Form submission - let Netlify handle it
    form.addEventListener('submit', function(e) {
        if (!validateForm()) {
            e.preventDefault();
            return false;
        }
        // If validation passes, let Netlify handle the submission
    });
    
    // Reset button functionality
    const resetBtn = form.querySelector('button[type="reset"]');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            setTimeout(() => {
                resetForm();
            }, 10);
        });
    }
    
    // Real-time validation
    const inputs = form.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

// Form Validation Functions
function validateForm() {
    const form = document.querySelector('.contact-form');
    let isValid = true;
    
    // Required fields
    const requiredFields = [
        { id: 'firstName', name: 'First Name' },
        { id: 'lastName', name: 'Last Name' },
        { id: 'email', name: 'Email' },
        { id: 'comments', name: 'Comments' }
    ];
    
    requiredFields.forEach(field => {
        const input = document.getElementById(field.id);
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(input) {
    const value = input.value.trim();
    const fieldName = input.previousElementSibling.textContent.replace('*', '').trim();
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (input.hasAttribute('required') && !value) {
        errorMessage = `${fieldName} is required`;
        isValid = false;
    }
    
    // Email validation
    if (input.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            errorMessage = 'Please enter a valid email address';
            isValid = false;
        }
    }
    
    // Phone validation (if provided)
    if (input.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            errorMessage = 'Please enter a valid phone number';
            isValid = false;
        }
    }
    
    // Name validation
    if ((input.id === 'firstName' || input.id === 'lastName') && value) {
        if (value.length < 2) {
            errorMessage = `${fieldName} must be at least 2 characters long`;
            isValid = false;
        }
    }
    
    // Comments validation
    if (input.id === 'comments' && value) {
        if (value.length < 10) {
            errorMessage = 'Comments must be at least 10 characters long';
            isValid = false;
        }
    }
    
    showFieldError(input, errorMessage);
    return isValid;
}

function showFieldError(input, message) {
    const errorElement = document.getElementById(input.id + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.toggle('show', !!message);
    }
    
    // Add error styling to input
    if (message) {
        input.style.borderColor = '#ef4444';
        input.classList.add('error');
    } else {
        input.style.borderColor = '#e5e7eb';
        input.classList.remove('error');
    }
}

function clearFieldError(input) {
    const errorElement = document.getElementById(input.id + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('show');
    }
    
    input.classList.remove('error');
}

function resetForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.reset();
        
        // Clear all error messages
        const errorElements = form.querySelectorAll('.error-message');
        errorElements.forEach(error => {
            error.textContent = '';
            error.classList.remove('show');
        });
        
        // Remove error classes from inputs
        const inputs = form.querySelectorAll('.form-input, .form-textarea');
        inputs.forEach(input => {
            input.classList.remove('error');
        });
    }
}

function showSuccessMessage() {
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="background: #10b981; color: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; text-align: center;">
            <strong>Success!</strong> Your message has been sent successfully. We'll get back to you soon.
        </div>
    `;
    
    const form = document.querySelector('.contact-form');
    form.parentNode.insertBefore(successDiv, form);
    
    // Reset form
    resetForm();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
    
    // Scroll to success message
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Scroll Animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.gallery-item, .section-title, .section-subtitle, .contact-form');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Header Scroll Effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
}

// Gallery Image Loading
function initImageLoading() {
    const images = document.querySelectorAll('.gallery-image, .hero-bg');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x300/e5e7eb/9ca3af?text=Image+Not+Available';
        });
    });
}

// Call image loading on DOM ready
document.addEventListener('DOMContentLoaded', initImageLoading);