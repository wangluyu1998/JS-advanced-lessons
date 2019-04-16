/**
 * Created by wangluyu. 
 */
/*
JS对象：
    对象 instanceof 构造函数
    1.判断对象是否可以由构造函数实例化得到
    2.判断在对象的原型链上能否找到构造函数的原型
*/
console.log(Object instanceof Function);//true
    console.log(Object._proto_==Function.prototype);//false

console.log(Object instanceof Object);//true

function Person(name,age){
    this.name=name;
    this.age=age;
}
var p=new Person("zhangsan",20);
console.log(p instanceof Person);//true,由实例化得到了
console.log(p._proto_==Person.prototype);//false
