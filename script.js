// Portfolio Website JavaScript
// Author: Shekhar Kumar Pandey
// Description: Handles smooth scrolling, mobile navigation, form validation, and interactive features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeNavigation();
    initializeSmoothScrolling();
    initializeFormValidation();
    initializeScrollEffects();
    initializeActiveNavigation();
});

/**
 * Initialize mobile navigation toggle functionality
 */
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

/**
 * Initialize smooth scrolling for navigation links and scroll indicator
 */
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize form validation for the contact form
 */
function initializeFormValidation() {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);

    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isMessageValid) {
            handleFormSubmission();
        }
    });

    /**
     * Validate name field
     */
    function validateName() {
        const name = nameInput.value.trim();
        const errorElement = document.getElementById('name-error');
        
        if (name.length < 2) {
            showError(errorElement, 'Name must be at least 2 characters long');
            return false;
        }
        
        if (!/^[a-zA-Z\s]+$/.test(name)) {
            showError(errorElement, 'Name can only contain letters and spaces');
            return false;
        }
        
        clearError(errorElement);
        return true;
    }

    /**
     * Validate email field
     */
    function validateEmail() {
        const email = emailInput.value.trim();
        const errorElement = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            showError(errorElement, 'Please enter a valid email address');
            return false;
        }
        
        clearError(errorElement);
        return true;
    }

    /**
     * Validate message field
     */
    function validateMessage() {
        const message = messageInput.value.trim();
        const errorElement = document.getElementById('message-error');
        
        if (message.length < 10) {
            showError(errorElement, 'Message must be at least 10 characters long');
            return false;
        }
        
        if (message.length > 1000) {
            showError(errorElement, 'Message must be less than 1000 characters');
            return false;
        }
        
        clearError(errorElement);
        return true;
    }

    /**
     * Show error message
     */
    function showError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    /**
     * Clear error message
     */
    function clearError(errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }

    /**
     * Handle form submission
     */
    function handleFormSubmission() {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (in a real application, this would send data to a server)
        setTimeout(() => {
            showSuccessMessage();
            contactForm.reset();
            
            // Restore button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Clear any existing error messages
            document.querySelectorAll('.error-message').forEach(error => {
                clearError(error);
            });
        }, 2000);
    }

    /**
     * Show success message
     */
    function showSuccessMessage() {
        // Create success message element
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div style="
                background-color: #10b981;
                color: white;
                padding: 1rem;
                border-radius: 8px;
                margin-bottom: 1rem;
                text-align: center;
                animation: slideIn 0.3s ease-out;
            ">
                <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
                Thank you for your message! I'll get back to you soon.
            </div>
        `;
        
        // Insert success message
        contactForm.insertBefore(successMessage, contactForm.firstChild);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
}

/**
 * Initialize scroll effects for navbar
 */
function initializeScrollEffects() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Initialize active navigation highlighting
 */
function initializeActiveNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Utility function for smooth animations on scroll
 */
function observeElementsOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.project-card, .skill-item, .about-text');
    animateElements.forEach(el => observer.observe(el));
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', observeElementsOnScroll);

/**
 * Handle keyboard navigation for accessibility
 */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

/**
 * Performance optimization: Throttle scroll events
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events for better performance
const throttledScrollHandler = throttle(function() {
    initializeScrollEffects();
    initializeActiveNavigation();
}, 100);

window.addEventListener('scroll', throttledScrollHandler);

/**
 * Add CSS animation keyframes programmatically
 */
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animate-in {
            animation: slideIn 0.6s ease-out;
        }
        
        @media (prefers-reduced-motion: reduce) {
            .animate-in {
                animation: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize additional styles
document.addEventListener('DOMContentLoaded', addAnimationStyles);
