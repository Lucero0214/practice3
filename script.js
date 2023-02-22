//create shortcut constants
const demo = document.querySelector('.demo');
const go_btn = document.querySelector('.go-btn');

go_btn.addEventListener('click', (e) => {
    demo.classList.toggle('mover1');
});

