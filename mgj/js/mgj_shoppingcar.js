//点击返回按钮返回上一个页面
var back = document.querySelectorAll('.header div')[0];
console.log(back);
back.onclick = function(){
    history.back();
}