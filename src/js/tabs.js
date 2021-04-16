const tabLinks = document.querySelectorAll('.gallery__tabs a');
console.log(tabLinks)
const firstTab = document.querySelectorAll('.gallery__tab');
firstTab[0].style.display = 'block';
tabLinks.forEach(elem => elem.addEventListener('click', chooseTab));

function chooseTab(e) {
	e.preventDefault();
	let target = e.target;
	if(!target.classList.contains('active')){
		let prevActive = document.querySelector('.gallery__tabs a.active');
		let href = target.getAttribute('href');
		console.log(prevActive.getAttribute('href'))
		let prevDiv = document.querySelector(`${prevActive.getAttribute('href')}`);
		let currentDiv = document.querySelector(`${href}`);
		prevActive.classList.remove('active');
		target.classList.add('active');
		prevDiv.style.display = 'none';
		currentDiv.style.display = 'block';
		
	}
}