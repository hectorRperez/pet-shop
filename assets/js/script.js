let loginForm = document.querySelector('.form');
let login_btn = document.querySelector('#user-btn');
let menu_btn = document.querySelector('#menu-btn');
let header__link = document.querySelector('.header__link');
let header = document.querySelector('.header');

console.log(menu_btn);

login_btn.addEventListener('click', () => {
	loginForm.classList.toggle('form--active');
	header__link.classList.remove('header--active');
});

menu_btn.addEventListener('click', () => {
	header__link.classList.toggle('header--active');
	loginForm.classList.remove('form--active');
});

window.onscroll = () => {
	if (window.scrollY > 0) {
		header.classList.add('header--active');
		header__link.classList.remove('header--active');
		loginForm.classList.remove('form--active');
	} else {
		header.classList.remove('header--active');
	}
};
