document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header'); // Certifique-se que existe uma tag <header>

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('active');
            console.log("Classe adicionada!");
        } else {
            header.classList.remove('active');
            console.log("Classe removida!");
        }
    });
});