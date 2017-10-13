		window.onload = function(){
	    var btn = document.getElementById('start');
	    var audio = document.getElementById('audio');
	    var status = true;
	    audio.play();
	    btn.onclick = function(){
	      if(status){
	        audio.play();
	        status = false;
	      }else{
	        audio.pause();
	        status = true;
	      }

	    }

	}
	function start1(){
		$("#start").animate({"right":"10px","opacity":"0.5"},1500,function(){
		$("#start").css({"right":"20px","opacity":"1"});
			start1();
		})
		
	}
	start1();

	


		var sp=new Swiper(".swiper-container",{
			direction:"vertical",
			pagination:".swiper-pagination",
			loop:true,
			mousewheelControl : true,
			onInit:function(swiper){
				swiperAnimateCache(swiper);
				swiperAnimate(swiper);
			},
			onSlideChangeEnd:function(swiper){
				swiperAnimate(swiper);
			},
			
		})

		var sp1=Swiper(".swiper-container-v",{
			direction:"horizontal",
			// loop:true,
			// mousewheelControl : true,
			pagination:".swiper-pagination",


			onSlideChangeEnd:function(swiper){
				swiperAnimate(swiper);
			},


			effect : 'coverflow',
			slidesPerView: 3,
			centeredSlides: true,
			coverflow: {
			            rotate: 30,
			            stretch: 10,
			            depth: 60,
			            modifier: 2,
			            slideShadows : true
			        }
		})