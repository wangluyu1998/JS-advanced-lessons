/*

*/

/*ES6中的Rest和Spread操作符*/

/*
    剩余操作符：可以接受剩下的所有实参，形成一个数组
    必须放在参数的最后位置上
*/
function fn1(x,...y){
    console.log(x,y);
}
fn1(1,2,3,4,5);//1  [2, 3, 4, 5]

/*
    扩展运算符：
    将数组转化为以,分隔的参数结构
    是剩余操作符的逆操作
*/
function fn2(){
    console.log(arguments);
}
fn2(1,...[2,3,4,5]);