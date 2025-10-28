document.addEventListener('DOMContentLoaded', () => {
    
    const currentYearSpan = document.getElementById('ano-actual');
    currentYearSpan.textContent = new Date().getFullYear();

    const skillCards = document.querySelectorAll('.skill-card');
    const skillDetail = document.getElementById('detalle-habilidad');
    
    const skillDescriptions = {
        'HTML5': 'Dominio en la estructura semántica y accesible de páginas web.',
        'CSS3': 'Experiencia en diseño responsivo, Flexbox, Grid y animaciones.',
        'JavaScript': 'Capacidad para implementar lógica, manipulación del DOM y manejo de eventos (incluyendo el uso de *this*).',
        'Bootstrap': 'Uso avanzado de componentes y sistema de grillas para un desarrollo rápido.',
    };

    skillCards.forEach(card => {
        
        card.addEventListener('mouseover', function() {
            const skillName = this.dataset.skill;
            const description = skillDescriptions[skillName] || `Detalle no disponible para ${skillName}.`;
            
            skillDetail.textContent = `**${skillName}**: ${description}`;
        });

        card.addEventListener('mouseout', function() {
            skillDetail.textContent = 'Mueve el ratón sobre una habilidad para ver más detalles.';
        });
    });

    const contactForm = document.getElementById('formulario-contacto');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('nombre').value;
        const email = document.getElementById('correo').value;
        const message = document.getElementById('mensaje').value;

        console.log(`Formulario recibido - Nombre: ${name}, Email: ${email}, Mensaje: ${message}`);
        
        alert(`¡Gracias ${name}! Tu mensaje ha sido simuladamente enviado. Te contactaré pronto.`);

        this.reset();
    });

});