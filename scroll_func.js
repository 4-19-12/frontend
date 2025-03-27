document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки

        // Получаем целевую секцию из атрибута data-target
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Прокручиваем к элементу с плавной анимацией
            targetElement.scrollIntoView({
                behavior: 'smooth', // Плавная прокрутка
                block: 'start' // Прокрутка до начала секции
            });
        }
    });
});
