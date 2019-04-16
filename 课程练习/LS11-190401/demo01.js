/**
 * Created by wangluyu. 
 */
//调试有闭包生成
function foo(x){
    var tmp=10;
    return function(y){
        concole.log(x+y,++tmp);
    }
 }
var fee=foo(10);
fee(1);

//不能生成闭包
//构成闭包的意义：访问函数内的局部变量
//或者将局部变量保存在内存中不被释放
var tmp=10;
function foo(){
    return function(){
        concole.log(++tmp);
    }
}
var fee=foo();
fee();