async function init(){
	var yayinalani = document.querySelector('#yayinalani');

	if (yayinalani) {
		document.querySelector('#icerik').parentNode.removeChild(document.querySelector('#icerik'));
		document.querySelector('.hakkinda').parentNode.removeChild(document.querySelector('.hakkinda'));
		document.querySelector('.sag').parentNode.removeChild(document.querySelector('.sag'));
		// document.querySelector('footer').parentNode.removeChild(document.querySelector('footer'));
		document.querySelector('.various').parentNode.removeChild(document.querySelector('.various'));
		document.querySelector('#dis').style.setProperty('box-shadow', '0px 0px 90px 0px #cac6c6');

		document.querySelector('.yazi').innerHTML = '<a href="http://semiworld.org/" target="_blank">semiworld.org</a>'
	}else{
		setTimeout(init, 100);
	}
}

init();