var curTabIndex=0;
var curIndex=0;
window.onload=function(){
	initTabs();
	changePage();
};
function initTabs(){
	var lis=document.getElementById("third-menu").getElementsByTagName("li");
	var scrolls=document.getElementById("picture").getElementsByTagName("div");
	
	for(var i=0;i<lis.length;i++){
		(function(j){
			lis[j].onclick=function(){
				if(j==curIndex) return;
				this.className="select";
				lis[curIndex].className="";
				scrolls[curIndex].className="scroll disappear";
				scrolls[j].className="scroll show";
				curIndex=j;
			};
		})(i)
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
