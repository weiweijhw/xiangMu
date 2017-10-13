$(document).ready(function(){
			var music=new Audio();
			var musicEl=document.getElementById('musicon');
			var musicOff=document.getElementById('musicoff');
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
			});