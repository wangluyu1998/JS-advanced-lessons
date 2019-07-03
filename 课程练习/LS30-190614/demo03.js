/* 
    Created by wangluyu on 2019/6/14 
*/
/* ES6中的 Promise 与 异步编程*/

//常见的异步执行：先hello，后world
setTimeout(function(){
    console.log("world");
},3000)
console.log("hello");

/* 
    Promise 将异步的操作写成同步执行
    resolve()是异步操作成功时候的调用，对应then里面第一个函数；
    reject()是异步操作失败的时候的调用，对应then里面的第二个函数
*/
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("world");
        resolve();//表示异步执行完成了,可以开始执行then中的函数
    },3000)
}).then(function(){
    /*对应resolve()*/
    console.log("hello");
    console.log(val);
},function(){
    /*对应reject()*/
}).catch(function(e){
    /*捕获异常*/
    console.log(e);
}).finally(function(){
    /*无论如何都会执行*/
})