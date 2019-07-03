/**
 * Created by wangluyu on 2019/6/3.
 */
//ES6中 Array新增的静态方法:

/* 
    Array.from():
    将类数组结构的变量转化为一个数组
*/
console.log(Array.from("abcdef"));


//回忆：arguments也是一个对应于传递给函数的参数的类数组对象
function fn1(){
    var arr1=Array.from(arguments);
    console.log(arr1);
}
fn1(1,2,3);

/**
    Array.of():

 */