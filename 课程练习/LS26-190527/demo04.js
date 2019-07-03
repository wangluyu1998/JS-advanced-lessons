/**
 * Created by wangluyu on 2019/5/27.
 */
/*
    var VS let VS const
*/
//例1：var关键字定义的变量，变量作用域是方法作用域，方法外不能访问
function fn1(){
    var a=5;
    console.log(a);
}

fn1();// 5
console.log(a);//ReferenceError: a is not defined

//例2：var关键字定义的变量，ES5中没有块级作用域，{ }外可访问{ }内的变量
{
    var a = 23;
}
console.log(a);//23 由于没有块级作用域，a可以正常输出
 
for(var i=0;i<5;i++){
    //do somethings
}
console.log("i:",i);// 5 由于没有块级作用域，此处i仍然存在

 /*
    let不同于var的是：
    let会产生块级作用域
*/
for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log(new Date(),i);
    },i*1000)
}//输出i值：3 3 3

for(let i=0;i<3;i++){
    setTimeout(function(){
        console.log(new Date(),i);
    },i*1000)
}//输出i值：0 1 2


/**
 * const声明的变量，不可修改
 * 修改会报错
 * 声明时，必须赋值，不赋值会报错
 */
const PI=3.1415926;
PI=3.4342253;

const PI;


/**
 * const定义对象时，引用地址不可变
 * 对象上的属性是可变的
 * const作用域也是块级作用域
 */
const obj={"username":"zhangsan"};
let obj1={"username":"lisi"};

obj=obj1;//报错
obj.username="wangluyu";