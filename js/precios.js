// Esperar a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento toggle
    const precioToggle = document.getElementById('precio-toggle');
    const toggleLabels = document.querySelectorAll('.toggle-label');
    
    // Función para cambiar entre mensual y anual
    precioToggle.addEventListener('change', function() {
        if (this.checked) {
            // Mostrar precios anuales
            document.body.classList.add('mostrar-anual');
            toggleLabels[0].classList.remove('active');
            toggleLabels[1].classList.add('active');
        } else {
            // Mostrar precios mensuales
            document.body.classList.remove('mostrar-anual');
            toggleLabels[0].classList.add('active');
            toggleLabels[1].classList.remove('active');
        }
    });
    
    // Hover effects para tabla comparativa
    const filasTabla = document.querySelectorAll('.tabla-comparativa tbody tr');
    filasTabla.forEach(fila => {
        fila.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(50, 50, 50, 0.7)';
            this.style.transition = 'background-color 0.3s ease';
        });
        
        fila.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
});