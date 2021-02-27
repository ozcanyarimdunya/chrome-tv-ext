async function init(){
	var yayinalani = document.querySelector('#yayinalani');

	if (yayinalani) {
		document.querySelector('.various').remove();
		document.querySelector('#icerik').remove();
		document.querySelector('.sag').remove();
		document.querySelector('.hakkinda').remove();
		document.querySelector('footer').remove();
		document.querySelector('#dis').style.setProperty('box-shadow', '0px 0px 90px 0px #cac6c6');
		document.querySelectorAll('ul.kanal li a').forEach((el) => {
			if (el.getAttribute('href') === window.location.href) {
				el.parentNode.style.setProperty('background-color', '#5f5d5d');
				el.style.setProperty('color', '#d8971c')
			}
		})
	}else{
		setTimeout(init, 100);
	}
}

init();
