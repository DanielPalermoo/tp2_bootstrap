// Event listeners para el modal (fuera del evento submit)
document.addEventListener('DOMContentLoaded', function() {
    
   // Event listener para el envío del formulario
   document.getElementById('contactForm').addEventListener('submit', function(event) {
       event.preventDefault();
       
       const submitBtn = document.querySelector('.submit-btn');
       submitBtn.classList.add('loading');
       
       setTimeout(function() {
           submitBtn.classList.remove('loading');
           document.querySelector('.modal-overlay').classList.add('active');
       }, 2000);
   });

   // Event listeners para cerrar el modal
   document.querySelector('.close-modal').addEventListener('click', function() {
       document.querySelector('.modal-overlay').classList.remove('active');
   });

   document.querySelector('.modal-btn').addEventListener('click', function() {
       document.querySelector('.modal-overlay').classList.remove('active');
   });
});