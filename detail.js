var curTabIndex=1;
window.onload=function(){
	onLog();
	changePage();
	shut();
};
function onLog(){
	var spans=document.getElementById("main").getElementsByTagName("span");
	var divLog=document.getElementById("log");
	spans[0].onclick=function(){
		divLog.style.animationName="logshow";
	}
}
function changePage(){
	var liss=document.getElementById("main-menu").getElementsByTagName("li");
	for(var i=0;i<liss.length;i++){
		(function(j){
			liss[j].onclick=function(){
				if(j==curTabIndex) return;
				this.className="select";
				liss[curTabIndex].className="";	
				curTabIndex=j;	
			};
		})(i)
	}
}
function shut(){
	var shutlog=document.getElementById("log").getElementsByTagName("span");
	var divLog=document.getElementById("log");
	shutlog[0].onclick=function(){
		divLog.style.animationName="unlog";
	}
}
