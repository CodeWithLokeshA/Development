const loginPopup = document.querySelector('.btnLogin-popup');
const wrapper = document.querySelector('.wrapper');
const closeIcon = document.querySelector('.icon-close');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

loginPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    setTimeout(() => {
        wrapper.classList.add('active');
        // Ensure login form is shown when clicking the login button in the nav bar
        document.querySelector('.form-box.login').style.transform = 'translateX(0)';
        document.querySelector('.form-box.register').style.transform = 'translateX(400px)';
    }, 100);
});

closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('active');
    setTimeout(() => wrapper.classList.remove('active-popup'), 300);
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    document.querySelector('.form-box.login').style.transform = 'translateX(-400px)';
    document.querySelector('.form-box.register').style.transform = 'translateX(0)';
});

loginLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    document.querySelector('.form-box.login').style.transform = 'translateX(0)';
    document.querySelector('.form-box.register').style.transform = 'translateX(400px)';
});