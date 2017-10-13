	$(function(){
		// 点击顶部的登录，出现一个登录框
		$(".denglu").click(function(){
			// $(".bigboxB").css({"display":"block"});
			$(".bigbox").css({"margin":"0 auto","display":"block","position":"fixed","top":"20","left":"0","right":"0","bottom":"0","z-index":"3"});
			
		})
		$(".bigbox-close").click(function(){
			$(".bigbox").css("display","none");
		})
		// 滚动动画
		$(window).scroll(function(){
			var p=$(this).scrollTop();
			// header
			if($(window).height()>=10){
				// alert(3);
				$(".nav").css({"position":"fixed","top":"0","z-index":"2","overflow":"hidden"});
				p=$(this).scrollTop();
			}
			if(p<10){
				$(".nav").css({"postion":"fixed","top":"146px","overflow":"hidden"});
			}
			// 点我报名
			if($(window).height()>200){
				$(".applymain").animate({"left":"10px"},500);
				// alert(3);
			}
			//eightboxtop上面的四个
			if($(window).scrollTop()>550){
				$(".eightboxtop").animate({"left":"10px"},500);
			}
			//eightboxbottom下面的四个	
			if($(window).scrollTop()>950){
				$(".eightboxbottom").animate({"left":"10px"},500);
			}
			// 学车班别
			if($(window).scrollTop()>1300){

				$(".learncarTop").animate({"left":"10px"},500);
				$(".learncarBottom").animate({"left":"10px"},500);
			}
			// 教学视频
			if($(window).scrollTop()>1900){
				$(".learnvideoMain").animate({"left":"10px"},500);
			}
			//服务流程
			if($(window).scrollTop()>2900){
				$(".serviceprocessTop").animate({"left":"300px","top":"300px"},500).stop(true, true).animate({"left":"100px","top":"100px"},500);
				$(".serviceprocessBottom").animate({"left":"-10px","top":"30px"},500);
				setTimeout(myFunc,1000);
				function myFunc(){
					$(".serviceprocessMiddle").css("display","block");
					$(".serviceprocessMiddle").animate({"left":"100px","top":"10px"},500);
				}
			}
			
		})
		

	})
