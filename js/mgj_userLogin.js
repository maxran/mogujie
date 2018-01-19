//点击<返回上个页面
var p = document.querySelectorAll('p')[0];
p.onclick = function(){
    history.back();
}