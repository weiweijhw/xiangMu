		$(function(){
			$("#web").fullpage({
				navigationTooltips:['首页','视觉','交互','皮肤','功能','待办邮件','联系人邮件','科技','连接易信','马上体验'],
				navigation:true,
				continuousVertical:true,
				scrollingSpeed: 600,
				afterLoad:function(anchorLink, index){

				},
				onLeave:function(index,nextIndex,direction){
					if(index==1){
						$(".section1 #img2 img").delay(0.5).animate({"height":"40%","width":"30%"},500);
						$(".section1 p").animate({opacity:0},1000);
						$(".section1 #img3").animate({top:"850px"}, 700);
						$(".section1 #img4").animate({top:"650px"}, 300);

					}
					if(nextIndex==1){
						$(".section1 #img2 img").delay(0.5).animate({"height":"100%","width":"100%"},500);
						$(".section1 p").delay(0.5).animate({opacity:1},1000);
						$(".section1 #img3").delay(0.5).animate({top:"120px"}, 1000);
						$(".section1 #img4").delay(0.5).animate({top:"250px"}, 800);
					}
					if(index==2){
						$(".section2 #s2p1").delay(0.5).animate({"height":"10%","width":"10%",opacity:0},500);
						$(".section2 #s2p1").delay(0.5).animate({opacity:0},500);
						$(".section2 #img21").animate({"height":"50%","width":"50%"},500);
						$(".section2 #img22").delay(0.5).animate({top:"750px"},700);
						$(".section2 #img23").delay(0.5).animate({left:"-250px"},1200);
						$(".section2 #img24").delay(0.5).animate({left:"1400px"},1200);
						$(".section2 div p").delay(0.5).animate({opacity:0},1500);
					}
					if(nextIndex==2){
						$(".section2 #s2p1").delay(0.5).animate({"height":"100%","width":"100%",opacity:1},500);
						$(".section2 #s2p1").delay(0.5).animate({opacity:1},500);
						$(".section2 #img21").delay(0.5).animate({"height":"100%","width":"100%"},400);
						$(".section2 #img22").delay(0.5).animate({top:"300px"},1000);
						$(".section2 #img23").delay(0.5).animate({left:"100px"},1200);
						$(".section2 #img24").delay(0.5).animate({left:"1100px"},1200);
						$(".section2 div p").delay(0.6).animate({opacity:1},1500);
					}
					if(index==3){
						$(".section3 #s3p1").delay(0.5).animate({opacity:0},1400);
						$(".section3 #img31").animate({opacity:0},1400);
						$(".section3 #img32").animate({opacity:0},1500);
						// $(".section3 #img33").animate({left:"1500px"},1200);
						$(".section3 #img34").animate({left:"1500px"},500);
						$(".section3 div .pp").animate({left:"-300px"},500);
					}
					if(nextIndex==3){
						$(".section3 #s3p1").animate({opacity:1},1400);
						$(".section3 #img31").animate({opacity:1},1400);
						$(".section3 #img32").animate({opacity:1},1500);
						// $(".section3 #img33").animate({left:"800px"},1200);
						$(".section3 #img34").animate({left:"495px"},800);
						$(".section3 div .pp").animate({left:"200px"},500);
					}
					if(index==4){
						$(".section4 #s4p1").delay(0.5).animate({opacity:0},1400);
						$(".section4 #img42").animate({top:"700px"},1000);
						$(".section4 #img43").delay(0.5).animate({top:"700px"},1000);
						$(".section4 #img44").delay(0.5).animate({top:"700px"},1000);
						$(".section4 div .ppp").delay(0.5).animate({opacity:0},1400);
					}
					if(nextIndex==4){
						$(".section4 #s4p1").animate({opacity:1},1400);
						$(".section4 #img42").animate({top:"140px"},700);
						$(".section4 #img43").delay(0.5).animate({top:"100px"},1000);
						$(".section4 #img44").delay(0.5).animate({top:"200px"},1300);
						$(".section4 div .ppp").delay(0.5).animate({opacity:1},1400);
					}
					if(index==5){
						$(".section5 #s5p1").delay(0.5).animate({opacity:0},1200);
						$(".section5 #img51").delay(0.5).animate({opacity:0},1400);
						$(".section5 #img51 img").delay(0.5).animate({"height":"20px","width":"20px"},1400);
						$(".section5 #leftdiv1").animate({"left":"-400px"},900);
						$(".section5 #leftdiv2").animate({"left":"-600px"},900);
						$(".section5 #rightdiv1").animate({"right":"-600px"},900);
						$(".section5 #rightdiv2").animate({"right":"-400px"},900);


					}
					if(nextIndex==5){
						$(".section5 #s5p1").delay(0.5).animate({opacity:1},1200);
						$(".section5 #img51").delay(0.5).animate({opacity:1},1400);
						$(".section5 #img51 img").delay(0.5).animate({"height":"100%","width":"100%"},1400);
						$(".section5 #leftdiv1").animate({"left":"30px"},1000);
						$(".section5 #leftdiv2").animate({"left":"30px"},900);
						$(".section5 #rightdiv1").animate({"right":"30px"},900);
						$(".section5 #rightdiv2").animate({"right":"30px"},900);
					}
					if(index==6){
						$(".section6 #s6p1").delay(0.5).animate({opacity:0},1200);
						$(".section6 #img61").delay(0.5).animate({opacity:0},1200);
						$(".section6 #img62").delay(0.5).animate({"top":"-600px"},1200);
						$(".section6 #img63").delay(0.5).animate({"left":"-400px"},1200);
						
						$(".section6 #s6divp p").delay(0.5).animate({"left":"1600px"},1200);
					}
					if(nextIndex==6){
						$(".section6 #s6p1").delay(0.5).animate({opacity:1},1200);
						$(".section6 #img61").delay(0.5).animate({opacity:1},1200);
						$(".section6 #img62").delay(0.5).animate({"top":"-10px"},1200);
						$(".section6 #img63").delay(0.5).animate({"left":"160px"},1200);
						$(".section6 #s6divp p").delay(0.5).animate({"left":"760px"},1200);
					}
				},
			})
		})
		