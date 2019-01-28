async function init() {
	if (document.querySelector('footer') && document.querySelector('div.canlitv').nextSibling) {
		document.querySelector('header.ortalama').parentNode.removeChild(document.querySelector('header.ortalama'))
		document.querySelector('div.anaustrenk').parentNode.removeChild(document.querySelector('div.anaustrenk'))
		document.querySelector('div.sag').parentNode.removeChild(document.querySelector('div.sag'))
		document.querySelector('footer').parentNode.removeChild(document.querySelector('footer'))
		document.querySelector('div.kanalbilgi').parentNode.removeChild(document.querySelector('div.kanalbilgi'));
		document.querySelector('div.ilantahtasi').parentNode.removeChild(document.querySelector('div.ilantahtasi'))
		document.querySelector('div.alternatif').parentNode.removeChild(document.querySelector('div.alternatif'))
		document.querySelector('div.canlitv').nextSibling.remove()

		document.querySelectorAll('div.sol > :not(.canlitv)').forEach(el=> el.parentNode.removeChild(el))
		document.querySelectorAll('div.clear').forEach(el=> el.parentNode.removeChild(el))
		document.querySelectorAll('br').forEach(el=> el.parentNode.removeChild(el))

		document.querySelector('div.canlitv').style.setProperty('padding','0')
		document.querySelector('div.kanallarliste').style.setProperty('padding','0')
		document.querySelector('div.yayin').style.setProperty('height','596px')
		document.querySelector('div#kanallarliste').style.setProperty('height','570px')
		document.querySelector('div.yayinlar').style.setProperty('width','1140px')
		document.querySelector('div.sol').style.setProperty('margin-left','5px')
		document.querySelector('body').style.setProperty('overflow-y', 'hidden')
	}else{
		setTimeout(init, 100);
	}
}

init();