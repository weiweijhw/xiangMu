	$(document).ready(function(){
		var index=0;
		var timeId=null;
		timeId= setInterval(function(){
			index++
			$('#jd').css('width',index+'%');
			},80);

			var music=new Audio();
			var musicEl=document.getElementById('musicon');
			var musicOff=document.getElementById('musicoff');
			var logo=document.getElementById('logo');
			var play=document.getElementById('play');
			var jdt=document.getElementById('jdt');
			music.src="music/mic.mp3";
			music.play();
			min=2;	
			onoff=true;		
			for(var i=0;i<min;i++){
				musicEl.onclick=function(){
					music.pause();
					musicEl.style.display="none";
					musicOff.style.display="block";
				}
				musicOff.onclick=function(){
					music.play();
					musicOff.style.display="none";
					musicEl.style.display="block";
	
				}
			}
			play.onclick=function(){
				logo.style.display='block';
				play.style.display='none';
			}

			// 进度条
			
		});		