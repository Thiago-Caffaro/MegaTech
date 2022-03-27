const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    const main = document.getElementById('main');
    nav.classList.toggle('active');
    main.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);