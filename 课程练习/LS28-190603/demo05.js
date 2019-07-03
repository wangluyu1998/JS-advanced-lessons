/**
 * 
 */

/**
 *  ES6中对于this指向的解决：=>函数
 */

 /* 总结：
    存在函数嵌套，this指向不正确时，解决方法：
    1.使用that转存
    2.bind绑定
    3.apply call
    4.箭头函数=>
 */
var obj={
    objName:"obj1",
    showName:function(){
        setTimeout(function(){
            console.log(this.objName);
        },3000);
    }
}
//  ||
//  ||
//  ||
// \  /
//  \/
obj.showName();
var obj={
    objName:"obj1",
    showName:function(){
        setTimeout(()=>{
            console.log(this.objName);
        },3000);
    }
}
obj.showName();