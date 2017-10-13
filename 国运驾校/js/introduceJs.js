$(function(){
			// 点击顶部的登录，出现一个登录框
			$(".denglu").click(function(){
				// $(".bigboxB").css({"display":"block"});
				$(".bigbox").css({"margin":"0 auto","display":"block","position":"fixed","top":"20","left":"0","right":"0","bottom":"0","z-index":"3"});
				
			})
			$(".bigbox-close").click(function(){
				$(".bigbox").css("display","none");
			})
			// 动画
			$(window).scroll(function(){
				if($(window).scrollTop()>10){
					// alert(3)
					$(".nav").css({"position":"fixed","top":"0"});
				}
				if($(window).scrollTop()<10){
					$(".nav").css({"position":"relative"})
				}
				if($(window).scrollTop()>30){
					$(".banner div").animate({"left":"944px"});
				}
			})

			var imgL=$(".pic img").size();
	var deg=360/imgL;
	var roY=0,roX=-10;
	 var xN=0,yN=0;
	 var play=null;

	$(".pic img").each(function(i){
		$(this).css({
			<!--translateZ 定义2d旋转沿着z轴-->
			"transform":"rotateY("+i*deg+"deg) translateZ(300px)"	});
			<!--防止图片被拖拽-->
			$(this).attr('ondragstart','return false');
		});

		$(document).mousedown(function(ev){
		var x_=ev.clientX;
		var y_=ev.clientY;
		clearInterval(play);
			console.log('我按下了');
			$(this).bind('mousemove',function(ev){
				/*获取当前鼠标的坐标*/
				var x=ev.clientX;
				var y=ev.clientY;
	            /*两次坐标之间的距离*/
	              xN=x-x_;
				  yN=y-y_;

				 roY+=xN*0.2;
				roX-=yN*0.1;
				console.log('移动');
				//$('body').append('<div style="width:5px;height:5px;position:absolute;top:'+y+'px;left:'+x+'px;background-color:red"></div>');

				$('.pic').css({
	                 transform:'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'
				});
				/*之前的鼠标坐标*/
	         x_=ev.clientX;
	         y_=ev.clientY;

			});
		}).mouseup(function(){
	          $(this).unbind('mousemove');
	          var play=setInterval(function(){
	           
	           xN*=0.95;
	           yN*=0.95
	           if(Math.abs(xN)<1 && Math.abs(yN)<1){
	              clearInterval(play);
	           }
	            roY+=xN*0.2;
				roX-=yN*0.1;
				$('.pic').css({
	                 transform:'perspective(800px) rotateX('+roX+'deg) rotateY('+roY+'deg)'
				});

	          },30);

		});
		})