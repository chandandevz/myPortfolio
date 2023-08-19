const toggleButton = document.querySelector('.open-menu');
const nav = document.querySelector('.nav-bar');

toggleButton.addEventListener('click',() => {
    nav.classList.toggle('active')
})