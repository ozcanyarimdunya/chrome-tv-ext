var channelList = `
<ul id="list">
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>

	<hr>

	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=trt-1-izle">&nbsp;&nbsp;TRT 1</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=star-tv-canli-izle">&nbsp;&nbsp;STAR TV</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=show-tv-canli-yayin">&nbsp;&nbsp;SHOW TV</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=atv-canli-10">&nbsp;&nbsp;ATV</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=kanal-7-canli">&nbsp;&nbsp;KANAL 7</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=trt-spor-canli">&nbsp;&nbsp;TRT SPOR</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=a-spor-canli-10">&nbsp;&nbsp;A SPOR</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=trt-belgesel-tv-izle">&nbsp;&nbsp;TRT BELGESEL</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=d-max-canli">&nbsp;&nbsp;D MAX</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=trt-haber-izle">&nbsp;&nbsp;TRT HABER</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=haberturk-canli-yayin">&nbsp;&nbsp;HABERTÜRK</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=ntv-canli">&nbsp;&nbsp;NTV</a></li>
    <li><a href="https://www.ecanlitvizle.live/tv.php?kanal=cnn-turk-canli">&nbsp;&nbsp;CNN TÜRK</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=trt-world-izle">&nbsp;&nbsp;TRT WORLD</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=nhk-world-tv">&nbsp;&nbsp;NHK WORLD</a></li>
	<li><a href="https://www.ecanlitvizle.live/tv.php?kanal=tlc-tv">&nbsp;&nbsp;TLC TV</a></li>

	<hr>
</ul>
`;

async function init() {
	var channelSide = document.getElementsByClassName('ch-liste')[0];
	if (channelSide) {
		channelSide.innerHTML = channelList;
		document.getElementsByClassName('rtsg')[0].style.setProperty('overflow-y', 'hidden');
		document.getElementsByClassName('rtsg')[0].style.setProperty('width', '180px');
		document.getElementsByClassName('rtsl')[0].style.setProperty('margin-right', '180px');
		document.getElementById('list').style.setProperty('margin-left', '0');
	}else{
		setTimeout(init, 100);
	}


}

init();