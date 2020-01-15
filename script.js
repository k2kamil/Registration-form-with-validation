document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    const registerBtn = document.querySelector('#signup');
    const loginBtn = document.querySelector('#signin');

    registerBtn.addEventListener('click', function () {
        container.classList.add('right-panel-active');
    });

    loginBtn.addEventListener('click', function () {
        container.classList.remove('right-panel-active');
        console.log('ssdsds');
    });
});

