document.querySelector('.menu-toggle').onclick = () => {
    document.querySelector('#toggle-menu').classList.toggle('visible');
}

document.querySelector('.scrim').onclick = () => {
    document.querySelector('#toggle-menu').classList.remove('visible');
}