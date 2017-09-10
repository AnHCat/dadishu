//	<!------------------------------------------开始按钮----------------------------------------------->
var lastIndex=0;
var timer1=null;
function start(obj){
	clearInterval(timer1);
	timer1=setInterval(timer,1000);
}
function timer(){
//	随机产生一个0~8的数字
		var temp=Math.random()*8;
//四舍五入取整数
		var index=Math.round(temp);
		var contentDiv=document.getElementById("gameDiv");
		var child=contentDiv.children[index];
		child.src="img/2.gif";
		if(lastIndex!=index){
			var lastChild=contentDiv.children[lastIndex];
			 
			lastChild.src="img/5.jpg";
		}
		lastIndex=index;
		
}
	var x=0;
	function beat(obj){
		var srcstr=obj.src;
		//截取字符串，若倒数第5位字符串为2，则为地鼠，分数+1,否则为草坪
		if(srcstr.charAt(srcstr.length-5)=="2"){
			x++;
			obj.src="img/5.jpg";
			document.getElementById("score").innerHTML="得分："+x;
		}
	}
function end(){
	clearInterval(timer1);
}