//点击登录跳转
var p1 = document.querySelectorAll('.footer_son')[0];
var p2 = document.querySelectorAll('.footer_son')[1];
var win;
p1.onclick = function(){
    win = window .open('mgj_phoneLogin.html','_self')
}
p2.onclick = function(){
    win = window .open('mgj_userLogin.html','_self')
}