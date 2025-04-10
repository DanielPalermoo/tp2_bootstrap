document.addEventListener('DOMContentLoaded', function() {
    // Función para el efecto de scroll reveal
    function checkScroll() {
        const elements = document.querySelectorAll('.reveal-card');
        elements.forEach(element => {
            // Calcula la posición del elemento respecto a la ventana
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150; // Distancia desde la que el elemento se hace visible
            // Si el elemento está en el viewport, agrega la clase visible
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    // Verificar al cargar la página
    checkScroll();
    // Verificar al hacer scroll
    window.addEventListener('scroll', checkScroll);
    
    // Funcionalidad para los botones de like
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtiene el texto actual del botón
            const text = this.textContent.trim();
            // Extrae el número actual de likes
            const likes = parseInt(text.match(/\d+/)[0]);
            // Actualiza el número de likes
            this.innerHTML = `<i class="fas fa-heart"></i> ${likes + 1}`;
            // Desactiva el botón después de hacer clic para evitar múltiples likes
            this.style.opacity = '0.7';
            this.style.cursor = 'default';
            this.disabled = true;
        });
    });
    
    // Manejo del formulario de comentarios
    const commentForm = document.querySelector('.add-comment form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Previene el envío normal del formulario
            
            // Obtiene los valores del formulario
            const name = document.getElementById('name').value;
            const comment = document.getElementById('comment').value;
            
            // Valida que se hayan ingresado datos
            if (name.trim() === '' || comment.trim() === '') {
                alert('Por favor complete todos los campos requeridos');
                return;
            }
            
            // Crea un nuevo comentario
            const newComment = document.createElement('div');
            newComment.className = 'comment';
            
            // Obtiene la primera letra del nombre para el avatar
            const initial = name.charAt(0).toUpperCase();
            
            // Fecha actual formateada
            const currentDate = new Date();
            const formattedDate = `${currentDate.getDate()} ${getMonthName(currentDate.getMonth())}, ${currentDate.getFullYear()}`;
            
            // HTML interno del nuevo comentario
            newComment.innerHTML = `
                <div class="comment-avatar" data-initial="${initial}"></div>
                <div class="comment-content">
                    <div class="comment-header">
                        <h4>${name}</h4>
                        <span class="comment-date">${formattedDate}</span>
                    </div>
                    <p>${comment}</p>
                    <div class="comment-actions">
                        <button class="like-btn"><i class="fas fa-heart"></i> 0</button>
                        <button class="reply-btn">Responder</button>
                    </div>
                </div>
            `;
            
            // Agrega el nuevo comentario al principio de la sección de comentarios
            const commentsSection = document.querySelector('.comments-section');
            // Inserta después del título pero antes del primer comentario existente
            const firstComment = document.querySelector('.comment');
            if (firstComment) {
                commentsSection.insertBefore(newComment, firstComment);
            } else {
                // Si no hay comentarios, insertarlo antes del formulario
                const addCommentSection = document.querySelector('.add-comment');
                commentsSection.insertBefore(newComment, addCommentSection);
            }
            
            // Limpia el formulario
            commentForm.reset();
            
            // Aplica el efecto de animación al nuevo comentario
            setTimeout(() => {
                newComment.classList.add('visible');
            }, 10);
            
            // Actualiza los event listeners para el nuevo botón de like
            const newLikeBtn = newComment.querySelector('.like-btn');
            newLikeBtn.addEventListener('click', function() {
                this.innerHTML = `<i class="fas fa-heart"></i> 1`;
                this.style.opacity = '0.7';
                this.style.cursor = 'default';
                this.disabled = true;
            });
        });
    }
    
    // Función auxiliar para obtener el nombre del mes
    function getMonthName(monthIndex) {
        const months = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        return months[monthIndex];
    }
    
    // Funcionalidad para los botones de respuesta
    const replyButtons = document.querySelectorAll('.reply-btn');
    replyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtiene el comentario padre
            const parentComment = this.closest('.comment');
            
            // Enfoca el formulario de comentarios y añade un texto preliminar
            const commentTextarea = document.getElementById('comment');
            const commentAuthor = parentComment.querySelector('h4').textContent;
            commentTextarea.value = `@${commentAuthor}: `;
            commentTextarea.focus();
            
            // Desplaza la página hasta el formulario
            document.querySelector('.add-comment').scrollIntoView({ behavior: 'smooth' });
        });
    });
});