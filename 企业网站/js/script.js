// // banner
// window.onload=function(){
// 	var oBanner=document.querySelectorAll(".banner img");//此方法IE8以下不支持
// 	var oDot=document.querySelectorAll(".btn span");

// 	for (var i = 0; i < oDot.length; i++) {
// 		//锁定当前索引值
// 		oDot[i].index=i;
// 		oDot[i].onmouseover=function(){
// 			for (var j = 0; j  < oDot.length; j++) {
// 				//全部无色，全部隐藏
// 				oDot[j].setAttribute("class","");
// 				oBanner[j].setAttribute("class","hide");
// 			}
// 			//选中的点上色，响应的图片显示
// 			this.setAttribute("class","on");
// 			oBanner[this.index].setAttribute("class","")
// 		}
// 	}

// }

window.onload=function(){
	var container=document.getElementById("container");
	var list=document.getElementById("list");
	var buttons=document.getElementById("buttons").getElementsByTagName("span");
	var prev=document.getElementById('prev');
	var next=document.getElementById("next");
	var index=1;//定义当前的点击
	var timer;

	// 定义函数点亮小圆点
	function showButton(){
		// 先将小圆点全部熄灭
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].className=="on") {
				buttons[i].className="";
				break;
			}
		}
		// 将当前圆点点亮
		buttons[index-1].className="on";
	}

	// 轮播的关键：控制图片左右移动位置配合css中的hidden来实现轮播
	function animate(offset){
		var newLeft=parseInt(list.style.left)+offset;
		// 移到头了就变回来
		list.style.left=newLeft+"px";
		if (newLeft>-1616) {
			list.style.left=-4848+"px";
		}
		if (newLeft<-4848) {
			list.style.left=-1616+"px";
		};
	}

	// 定时执行点击事件实现自动轮播
	function play(){
		timer=setInterval(function(){
			next.onclick();
		},3000);
	}
	function stop(){
		clearInterval(timer);
	}

	// 向右箭头点击事件，实现点亮圆点，切换图片
	next.onclick=function(){
		// 每点一次箭头，圆点就向后一个，到头了就变回来
		if (index==3) {
			index=1;
		}else{
			index+=1;
		}
		
		showButton();
		animate(-1616);
	}
	prev.onclick=function(){
		if (index==1) {
			index=3;
		}else{
			index-=1;
		}
		showButton();
		animate(1616);
	}

	// 通过小圆点控制轮播
	for (var i = 0; i < buttons.length; i++) {
		if (this.className=="on") {
			// return;当点击的圆点正好当前点亮的圆点的时候，后面代码不执行
		}
		// 给圆点绑定点击事件
		buttons[i].onclick=function(){
			// 获取到点击圆点的自定义属性值
			var myIndex=parseInt(this.getAttribute("index"));
			// 计算出参数
			var offset=-1616*(myIndex-index);
			// index归位
			index=myIndex;
			// 调用函数切换
			animate(offset);
			showButton();
		};
	}

	container.onmouseover=stop;
	container.onmouseout=play;

	play();
}