const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    menuToggle.classList.toggle('active'); // anima o X
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
        menuToggle.classList.remove('active'); // volta ao hambúrguer
    });
});
