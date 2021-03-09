async function init(){
    var yayinalani = document.querySelector('#yayinalani');

    if (yayinalani) {
        removeElement('.various');
        removeElement('#icerik');
        removeElement('.sag');
        removeElement('.hakkinda');
        removeElement('footer');
        removeElement('#st-2');

        document.querySelector('#dis').style.setProperty('box-shadow', '0px 0px 90px 0px #cac6c6');
        document.querySelectorAll('ul.kanal li a').forEach((el, index) => {
            if (el.getAttribute('href') === window.location.href) {
                setActiveElement(el);
                return;
            }
            if (window.location.pathname === '/tv' && index == 0) {
                setActiveElement(el);
                return;
            }
        })

        let all =  `<a class="menulink" href="javascript:;" onclick="kategori('')" style="border: 1px solid #d8971c;padding: 8px;border-radius: 5px;"><i class="fas fa-caret-right"></i> Hepsi</a>`;
        document.querySelector('.menu').innerHTML = all + document.querySelector('.menu').innerHTML;
        // document.body.style.zoom="1.7"
    }else{
        setTimeout(init, 100);
    }
}

function setActiveElement(el) {
    el.parentNode.style.setProperty('background-color', '#5f5d5d');
    el.parentNode.style.setProperty('line-height', '1.5');
    el.style.setProperty('color', '#d8971c');
    el.style.setProperty('font-weight', 'bold');
}


function removeElement(query) {
    let el = document.querySelector(query);
    if (el) {
        el.remove();
    } else{
        setTimeout(() => removeElement(query), 100);
    }
}

init();
