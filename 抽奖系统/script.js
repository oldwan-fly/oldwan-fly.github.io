var data=["手机","电脑","购物券","普吉岛一日游","mini90天驾驶体验","谢谢支持","1元红包"],   
	timer=null,			//定时器
	flag=0;				//判断点了还是没点的变量

window.onload=function(){
	var play=document.getElementById("play"),
		stop=document.getElementById("stop");

	// 添加抽奖和停止事件
	play.onclick=playFun;
	stop.onclick=stopFun;

	// 键盘事件
	document.onkeyup=function(event){   //键盘键松开时触发
		event=event||window.event;		//触发事件时生成的对象event
		if (event.keyCode==13) {        //13代表回车键
			if (flag==0) {			    //初始状态flag==0时，调用开始函数，并将flag变成1
				playFun();
				flag=1;				
			}else{
				stopFun();
				flag=0;				    //执行完停止后，调整为初始状态
			}
		}
	}
}

function playFun(){
	var title=document.getElementById("title"),
		play=document.getElementById("play");

		clearInterval(timer);  //定时器

		timer=setInterval(function(){
			var random=Math.floor(Math.random()*data.length); //取 和数组下标对应的随机数
			title.innerHTML=data[random];
		},100);

		play.style.background="#999";
}

function stopFun(){
	clearInterval(timer);
	var play=document.getElementById("play");
	play.style.background="#036";
}