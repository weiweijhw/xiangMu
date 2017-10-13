		$(function(){
			var n=2;
			var Width=$(".contain").width();
			// var w=$("body").width();
			var Height=$(".contain").height();
			var score=0;
			var time=30;

			// 时间
			function move(){
				time--;
				$(".remainingTime").html("剩余:"+"<span>"+time+"</span>"+"s")
				if(time==0){
					clearInterval(t);
					$(".lastScore").html("您最终得分为:"+"<span>"+score+"</span>");
				}
			}

			var t=setInterval(move,1000);

			function create(){
				$(".contain").empty();
				//随机数Math.random() 0~1,Math.random()*2=0~2,0~4
				var w=parseInt(Math.random()*n*n);

				//n*n:0~9
				for(var j=0;j<n*n;j++){
					$("<span>").css({"width":(Width/n-2)+"px","height":(Height/n-2)+"px"}).appendTo($(".contain"));
	   	        
				}
				//不一样的图
				$("span").eq(w).css("background-image","url(img/qwmen.gif)");
				if(n==12){
					n=12;
				}else{
					n++;
				}

				// 分数
				$("span").eq(w).click(function(){
					if(time>0){
						score+=10
		   	    		$(".score").html("分数:"+"<span>"+score+"</span>");
		   	  			create();
					}
		   	    	
	   	  		})

			}
			create();

			
		})
		text="帮青蛙公主找到它的王子！加油呦！"
			i=0;
			function mytype(){
				str=text.substr(0,i);
				txt.innerHTML=str+"_";
				i++;
				if(i>text.length){
					i=0;
				}
				setTimeout("mytype()",300);
			}
			mytype();