//自运行广告
!function(){
	var img = document.querySelector('.adbanner1_img');
	var num = 1;
	time();
	function time(){
		setInterval(function(){
			num++;
			if(num > 3){
				num = 1
			}
			img.src = 'mgj_img/ad' + num + '.jpg';
		},1500)
	}
}();
//轮播广告下小点
var spans = document.querySelectorAll('.smallbtn');
var index = 0;
switchbg(0);
function switchbg(a){
	for(i = 0; i < spans.length; i++){
		spans[i].style.background = 'white';
	}
		spans[a].style.background = 'red';
}
setInterval(function(){
	index++;
	if(index > 2){
		index = 0
	}
	switchbg(index);
},1500);
//倒计时
	//倒计时秒
	var hours = document.querySelector('.hours');
	var minutes = document.querySelector('.minutes');
	var seconds = document.querySelector('.seconds');
	time();
	function time(){
		var mytime = new Date('2020/01/01');
		var now = new Date();
	 	var h = now.getHours();
	 	var ms1 = mytime.getTime();
	 	var ms2 = now.getTime();
	 	var res = ms1 - ms2;
	 	var a = 1000;
		var ma = 60*a;
		var ha = 60*ma;
		var da = 24*ha;

		var m = parseInt(res%da%ha/ma);
		var s = parseInt(res%da%ha%ma/a);
		if(m < 10){
			m = '0' + m;
		}
		if(s < 10){
			s = '0' + s;
		}
		hours.innerHTML = h;
		minutes.innerHTML = m;
		seconds.innerHTML = s;
	}
	setInterval(time,1000);
//点击搜索出现搜索框
var inp = document.querySelector('.search input');
var click = document.querySelector('.clickSearch');
inp.onfocus = function () {
    click.style.display = 'block';
}
//搜索框返回
var back = document.querySelectorAll('.searchBanner span')[0];
back.onclick = function(){
    click.style.display = 'none';
}
//获取搜索栏边框变色
var search = document.querySelector('.clickSearch input');
search.onfocus = function(){
    search.style.border = '1px solid #ff4466';
}
//点击搜索出现搜索历史
var spaSearch = document.querySelectorAll('.searchBanner span')[1];
var txt = document.querySelector('.searchBanner input');
var his = document.querySelectorAll('.searchHis span');
var searchHis = document.querySelector('.searchHis');
var none = document.querySelector('.none');

spaSearch.onclick = function(){
    var pattern =/\S/;
    var res = pattern.test(txt.value);
	none.style.display = 'none';
    var spas = document.createElement('span');
    if(res){
        spas.innerHTML = txt.value;
    }else{
        return '';
    }
    spas.className = 'spanAdd';
    searchHis.appendChild(spas);
    txt.value = '';
}
//点击促销商品跳转商品列表
var sale = document.querySelectorAll('.adbanner4 div');
var win;
for(var i = 0; i < sale.length; i++){
    sale[i].onclick = function(){
       win = window.open('mgj_list.html','_self')
    }
}
//点击商品跳转商品详情
var deal = document.querySelectorAll('.deals_son');
for(var i = 0; i < deal.length; i++){
    deal[i].onclick = function(){
        win = window.open('mogujie_detail.html','_self')
    }
}
//点击底部跳转页面
var footer = document.querySelectorAll('.footerSon');
footer[1].onclick = function(){
    win = window.open('mgj_list.html','_self');
}
footer[2].onclick = function(){
    win = window.open('mgj_shoppingcar.html','_self');
}
footer[3].onclick = function(){
    win = window.open('mogujie_register.html','_self')
}

//点击垃圾桶删除第一个搜索内容
var del = document.querySelector('.del');
del.onclick = function(){
    searchHis.removeChild(searchHis.firstChild);
}