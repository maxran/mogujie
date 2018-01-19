 //判断是否是闰年
 function isRun(n){
 	if(n%4==0&&n%100!=0 || n%400==0){
 		return true
 	}else{
 		return false
 	}
 }


 //判断是否是素数,若是返回true
 function isPrime(n){
	 var prime = true;
	 for(i = 2 ; i < n; i++){
	 	if(n%i==0){
	 		prime = false;
	 		break; 
	 		}
	 	}
	 return prime;
	}
//判断是否及格
function pass(n){
	if(n>=60){
		return true
	}else{
		return false
	}
}
//阶乘之和
function add(n){
	var sum = 0;
	var pro = 1
	for(i = 1;i <= n ; i++){
		pro*=i;
		sum+=pro;
	}
	return sum
}
  //获取时间
  function time(){
		var today = new Date();
		var y = today.getFullYear();
		var m = today.getMonth() + 1;
		var d = today.getDate();
		var h = today.getHours();
		var min = today.getMinutes();
		var s = today.getSeconds();
		str = '今日时间:' + ' ' + y + '-' + m + '-' + d + ' ' + add0(h) + '时' + add0(min) + '分' + add0(s) + '秒'; 
		return str
	} 

	function add0(num){
		if(num < 10){
			num = '0' + num;
		}else{
			num = num;
		}
		return num
	}