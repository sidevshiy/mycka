const numbers = document.querySelectorAll('.features__number');
const section = document.querySelector('.features')
const top = section.getBoundingClientRect().top;
window.addEventListener('scroll', countNumbers)
//numbers.forEach( elem => elem.addEventListener() )

function countNumbers() {
	if (window.pageYOffset > top) {
		console.log(window.pageYOffset)
		console.log(section.getBoundingClientRect().top)
		this.removeEventListener('scroll', countNumbers);
		const time = 1000;
		const step = 100;
		numbers.forEach(elem => {
			let n = 0;
			let num = elem.dataset.count;
			let t = Math.round(time / (num / step));
			let interval = setInterval(() => {
				n = n + step;
				if (n == num) {
					clearInterval(interval);
				}
				elem.innerHTML = n;
			}, t);
		});
	}
}