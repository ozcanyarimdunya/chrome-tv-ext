var channelList = `
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=trt-1-izle">TRT 1</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=star-tv-canli-izle">STAR TV</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=show-tv-canli-yayin">SHOW TV</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=atv-canli-10">ATV</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=fox-tv-canli-hd-3">FOX TV</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=kanal-7-canli">KANAL 7</a></li>
	
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=trt-spor-canli">TRT SPOR</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=a-spor-canli-10">A SPOR</a></li>
	
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=trt-belgesel-tv-izle">TRT BELGESEL</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=d-max-canli">D MAX TÜRKİYE</a></li>
	
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=trt-haber-izle">TRT HABER</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=haberturk-canli-yayin">HABERTÜRK</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=ntv-canli">NTV</a></li>
    <li><a href="https://www.ecanlitvizle.live/tv.php?kanal=cnn-turk-canli">CNN TÜRK</a></li>
    
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=trt-world-izle">TRT WORLD</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=nhk-world-tv">NHK WORLD</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=tlc-tv">TLC TV</a></li>

	<p>Özcan Yarımdünya</p>
`;

async function init() {
	var channelSide = document.getElementById('list');
	if (channelSide) {
		channelSide.innerHTML = channelList;
	}else{
		setTimeout(init, 100);
	}
}

init();