/**
 * Created by wangluyu on 2019/5/27
 */

/*
   异步代码执行
   分支代码不会影响主程序的进行
*/
var username="zhangsan";
var age=30;
document.onclick=function(){
    alert(age);
}
console.log(username);


var intervalId=setInterval(function(){
    console.log(new Date());
},2000);

var timer=new Date();
console.log(timer);
