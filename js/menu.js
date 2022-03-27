const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('menu');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);