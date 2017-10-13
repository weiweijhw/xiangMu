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

			//tab
			var ul=document.getElementById("tabmain");
			var li=ul.getElementsByTagName("li");
			var div=$(".kmOne");
			//第一div显示
			div[0].style.display="block";
			for(var i=0;i<li.length;i++){
			
			li[i].value=i;
			li[i].onmouseover=function(){
				//index存的是当前li的下标
				var index=$(this).val();
				for(var n=0;n<li.length;n++){
					div[n].style.display="none";
				}
				div[index].style.display="block";
				}
			}
			// 学车流程		
			$(".imgboxOne img").hover(function(){
						//选中当前图片

				$(this).css({"display":"none"});
						//除了当前图片的其他图片
				$(this).parent().siblings().children().css({"display":"block","position":"relative","top":"26px","left":"23px","margin-bottom":"none"});
						
				$(".imgboxTwo div").css({"display":"block","position":"relative","z-index":"-10"})
			})
			//驾校口碑
			function move(){
				//c是ul  left的值
            var c=$(".requtation ul").css("left");
           
            var n=parseInt(c)-1;

            if(n==-600){
                n=-1
            }
            $(".requtation ul").css("left",n+"px")
        	}	
        	setInterval(move,10)
		})