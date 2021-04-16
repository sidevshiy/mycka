const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

if(burger) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('active');
		nav.classList.toggle('active');
		document.body.classList.toggle('lock');
	})
}

// Прокрутка
const menuLinks = document.querySelectorAll('.header__list a[data-goto]');
if(menuLinks.length > 0) {
	menuLinks.forEach(elem => elem.addEventListener('click', onMenuClick));

	function onMenuClick(e) {
		e.preventDefault();
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			if(burger.classList.contains('active')) {
				burger.classList.remove('active');
				nav.classList.remove('active');
				document.body.classList.remove('lock');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
		}
	}
}

// кнопки прокрутки

const btnLinks = document.querySelectorAll('.to-appoint');
if(btnLinks.length > 0) {
	btnLinks.forEach(elem => elem.addEventListener('click', onBtnLink));

	function onBtnLink(){
		const gotoBlock = document.querySelector('.section4');
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

		window.scrollTo({
			top: gotoBlockValue,
			behavior: "smooth"
		});
	}
}
