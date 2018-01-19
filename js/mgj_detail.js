//点击导航 出现导航栏和遮罩层
var navR1 = document.querySelector('.navR1');
var cover = document.querySelector('.cover');
var under = document.querySelector('.navR1Byclick');
var main = document.querySelector('.main');
var car = document.querySelector('.shoppingcar');
var search = document.querySelector('.search');
var check = document.querySelector('.check');
var footer = document.querySelector('.footer');
navR1.onclick = function(){
    cover.style.display = 'block';
    under.style.display = 'block';
    navR1.style.display = 'none';
    main.style = 'top:-10rem;opacity:1'
    car.style = 'top:-7.5rem;opacity:1'
    search.style = 'top:-5rem;opacity:1';
    check.style = 'top:-2.5rem;opacity:1';
    footer.style = 'z-index:0';
}
under.onclick = function(){
    cover.style.display = 'none';
    under.style.display = 'none';
    navR1.style.display = 'block';
    main.style = 'top:0;opacity:0';
    car.style = 'top:0;opacity:0';
    search.style = 'top:0;opacity:0';
    check.style = 'top:0;opacity:0';
}
//点击首页跳回首页
var win;
main.onclick = function(){
    console.log(main)
    win = window.open('mogujie.html','_self')
}
//点击购物车跳转购物车页面
car.onclick = function(){
    console.log(main)
    win = window.open('mgj_shoppingcar.html','_self')
}
//向下滚动出现置顶,侧边栏上移
var navR1 = document.querySelector('.navR1');
var navR2 = document.querySelector('.navR2');
var navR3 = document.querySelector('.navR3');
var box = document.querySelector('.box');
window.addEventListener("scroll",function(e){
    //距离顶部的距离
    var t =document.documentElement.scrollTop||document.body.scrollTop;
    if(t >= 900){
        box.style.top = '55%';
        navR2.style.top = '66%';
        navR3.style = 'opacity:.65;z-index:100';
    }
    if(t < 900){
        box.style.top = '66%';
        navR2.style.top = '77%';
        navR3.style = 'opacity:0;z-index:-1';

    }
})
//添加至购物车出现购物详情
var addTo = document.querySelector('.addTo');
var payment = document.querySelector('.payment');
var cover = document.querySelector('.cover');
var close = document.querySelector('.close');
var pic = document.querySelector('.pic');
addTo.onclick = function(){
    cover.style.display = 'block';
    payment.style.height = '19.9rem';
}
close.onclick = function(){
    cover.style.display = 'none';
    payment.style.height = '0';
}
//选择商品类型
var type = document.querySelectorAll('.classify span');
function change(a){
    for(var i = 0; i < type.length; i++){
        type[i].className = 'origin';
    }
    type[a].className = 'origin selected';
}
for(var j = 0; j < type.length; j++){
    type[j].index = j;
    type[j].onclick = function(){
        change(this.index);
    }
}
//领券和购买需要登录蘑菇街,跳转登录页面
var coupon = document.querySelectorAll('.coupon_son');
var login = document.querySelector('.login');
var buy = document.querySelector('.buy');
var win;
for(var i = 0; i < coupon.length; i++){
    coupon[i].onclick = function(){
        login.style = 'opacity:0.7;z-index:10;';
        //延迟跳转
        setTimeout(function () {
            win = window.open('mogujie_register.html','_self')
        },3000);
    }
}
buy.onclick = function(){
    login.style = 'opacity:0.7;z-index:10;';
    //延迟跳转
    setTimeout(function () {
        win = window.open('mogujie_register.html','_self')
    },3000);
}


//点击增加减少商品数量
var num = document.querySelector('.number');
var add = document.querySelector('.add');
var minus = document.querySelector('.minus');
var i = 1;
num.innerHTML = i;
add.onclick = function(){
   num.innerHTML = ++i;
}
minus.onclick = function(){
    if(i <= 0){
        i = 1;
    }
    num.innerHTML = --i;
}
//购物后点击确定跳转购物车
var comfirm = document.querySelector('.comfirm');
var win;
comfirm.onclick = function(){
    win = window.open('mgj_shoppingcar.html','_self')
}



