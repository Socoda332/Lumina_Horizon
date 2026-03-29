// ========================
// MENÚ MÓVIL
// ========================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
        navMenu.style.display = 'flex';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '60px';
        navMenu.style.right = '2rem';
        navMenu.style.flexDirection = 'column';
        navMenu.style.background = 'rgba(10, 14, 39, 0.95)';
        navMenu.style.border = '1px solid #2a3a52';
        navMenu.style.borderRadius = '10px';
        navMenu.style.padding = '1rem';
        navMenu.style.gap = '1rem';
        navMenu.style.zIndex = '999';
    } else {
        navMenu.style.display = 'flex';
    }
});

// ========================
// NAVEGACIÓN Y SCROLL
// ========================
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remover clase active de todos los links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Agregar clase active al link clickeado
        link.classList.add('active');
        
        // Cerrar menú móvil
        menuOpen = false;
        navMenu.style.display = 'flex';
        
        // Desplazar a la sección
        const sectionId = link.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========================
// SCROLL DETECTION PARA NAVBAR
// ========================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});

// ========================
// ANIMACIONES AL SCROLL
// ========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.tech-card, .vida-item, .product-card, .plan, .info-box').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Agregar keyframes para la animación
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// ========================
// BOTONES DE CARRITO
// ========================
const addCartButtons = document.querySelectorAll('.add-cart');

addCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        const price = this.closest('.product-card').querySelector('.price').textContent;
        
        // Cambiar texto del botón temporalmente
        const originalText = this.textContent;
        this.textContent = '✓ Agregado al Carrito';
        this.style.background = '#10b981';
        
        // Reproducir sonido de éxito (visual feedback)
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
        
        // Volver al estado original después de 2 segundos
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
        }, 2000);
        
        // Log para demostración
        console.log(`📦 Producto agregado: ${productName} - ${price}`);
    });
});

// ========================
// BOTONES DE PLANES
// ========================
const planButtons = document.querySelectorAll('.plan-button');

planButtons.forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.closest('.plan').querySelector('h3').textContent;
        alert(`✨ ¡Gracias por tu interés en el plan ${planName}!\n\nNos pondremos en contacto pronto para confirmar tu suscripción.`);
    });
});

// ========================
// BOTÓN CTA HERO
// ========================
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', () => {
    const tecnologiaSection = document.getElementById('tecnologia');
    tecnologiaSection.scrollIntoView({ behavior: 'smooth' });
});

// ========================
// EFECTOS DE MOUSE
// ========================
document.addEventListener('mousemove', (e) => {
    const gradientOrb = document.querySelector('.gradient-orb');
    if (gradientOrb) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        gradientOrb.style.transform = `translate(${x * 100}px, ${y * 100}px)`;
    }
});

// ========================
// INFORMACIÓN EN CONSOLA
// ========================
console.log('%c🌟 Bienvenido a Lumaris Corp 🌟', 'color: #00d9ff; font-size: 20px; font-weight: bold;');
console.log('%cInovando el futuro, hoy', 'color: #8b5cf6; font-size: 14px;');
console.log('%c© 2024 Lumaris Corp - Todos los derechos reservados', 'color: #b0b8c1; font-size: 12px;');

// ========================
// CARGAR ANIMACIÓN INICIAL
// ========================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    console.log('✓ Página cargada exitosamente');
});
