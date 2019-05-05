/**
 * Created by wangluyu on 2019/4/29.
 */
/*part11111111111111111111111111   静态方法与原型方法*/
function BaseClass(){

}

BaseClass.fn1=function(){
    console.log("这是静态方法");//直接定义在构造函数上的，构造函数直接调用
}
BaseClass.prototype.fn2=function(){
    console.log("这是原型方法");//定义在构造函数的原型对象上，只能实例化对象调用
}

BaseClass.fn1();
var base=new BaseClass();
base.fn2();

//学过的静态方法：
//Object.create()、Object.defineProperty()



/**part2222222222222222222222222   constructor属性 */
function Foo(){

}
console.log(Foo.prototype.constructor==Foo);//true
var foo=new Foo();
console.log(foo.constructor==Foo);//true foo对象自身没有constructor属性，但在原型链上能找到
//据上述：，以下也是正确的
var foo1=new foo.constructor();


//将一个对象直接赋值给构造函数的prototype,会把constructor属性覆盖掉
Foo.prototype={};
