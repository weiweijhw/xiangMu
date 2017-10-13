$(function(){
	//随机产生验证码
	$(".authcodeMain").text(codes(4));
	$(".again").click(function(){
		$(".authcodeMain").text(codes(4));
	})
	function codes(n){
		var a="azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
		var b="";
		for(var i=0;i<n;i++){
			var index=Math.floor(Math.random()*62);
			b+=a.charAt(index);
		}
		return b;
	}
})