//
var headAds = document.querySelector('.headAds');
var divs = document.querySelectorAll('.turns');
var points = document.querySelector('.points');
var underBtn = document.querySelectorAll('.point');
var index = 0;
var timer;
hideDiv(0);
function hideDiv(a){
	for(i = 0; i < divs.length; i++){
		divs[i].style.display = 'none';
		underBtn[i].style.background = "white";
	}
	divs[a].style.display = 'block';
	underBtn[a].style.background = "black";
}
time();
function time(){
	timer = setInterval(function(){
		index++;
		if(index > 2){
			index = 0
		}
		hideDiv(index);
	},2000)
}