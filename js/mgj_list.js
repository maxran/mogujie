//点击切换衣服类型console.log(span2);
    //标签切换
 var spas = document.querySelectorAll('.rowList');
function back(a){
    for(var i = 0; i < spas.length; i++){
        spas[i].className = 'rowList';
    }
    spas[a].className = 'rowList span2';
}
for(var j = 0; j < spas.length; j++){
    spas[j].index = j;
    spas[j].onclick = function(){
        back(this.index);
        hide(this.index);
    }
}
    //内容切换
var deal = document.querySelectorAll('.deal1');
hide(0);
function hide(b){
    for(var k = 0; k < deal.length; k++){
        deal[k].style.display = 'none';
    }
    deal[b].style.display = 'block';
}

//向下滚动衣服导航置顶
var row = document.querySelector('.row');
var d;
window.onload = function(){
    d =row.offsetTop;
}
window.addEventListener("scroll",function(e){
    //获取滚动距离
    var t =document.documentElement.scrollTop||document.body.scrollTop;
    if(t >= d){
    row.style = 'position:fixed;top:0;left:0';
    }else{
        row.style = 'position:static';
    }
})

//点击导航 出现导航栏和遮罩层
var navR1 = document.querySelector('.navR1');
var cover = document.querySelector('.cover');
var under = document.querySelector('.navR1Byclick');
var main = document.querySelector('.main');
var car = document.querySelector('.shoppingcar');
var search = document.querySelector('.search');
var check = document.querySelector('.check');
navR1.onclick = function(){
    cover.style.display = 'block';
    under.style.display = 'block';
    navR1.style.display = 'none';
    main.style = 'top:-10rem;opacity:1';
    car.style = 'top:-7.5rem;opacity:1';
    search.style = 'top:-5rem;opacity:1';
    check.style = 'top:-2.5rem;opacity:1';
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
//点击商品进入详情页
var products = document.querySelectorAll('.deals_son');
var win;
for(var i = 0; i < products.length; i++){
    products[i].onclick = function(){
        win = window.open('mogujie_detail.html','_self')
    }
}