document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 

 
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});
