window.onload = function(){
	var conEl = document.getElementById('scroll-con');
	var timeId = null;
	timeId = setInterval(function(){
		
		if(conEl.offsetLeft <= -(1600)){
			conEl.style.left = 1400 +'px';
		}
		conEl.style.left = (
			conEl.offsetLeft - 15) + 'px';
		
	},100)
}
