/**
 * Created by wangluyu on 2019/4/26.
 */

//之前学习的两种继承方式是：
//1.通过Object.create()方法

//2.通过构造函数的prototype实现


/*使用上面两种方法实现继承时均会产生原型共享问题：*/

//1.通过Object.create()方法
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;//这样写是把superObj中的x值给成了5；
console.log(subObj_Second.x);//5
//但若是如下，结果会不一样：
var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.x = 5;//这样写是在subObj_First自身上添加了属性x,值为5，他自身与原型链上的属性x互不影响
console.log(subObj_Second.x);//1  

//2.通过构造函数的prototype继承
function Person(name){
    this.name=name;
}
Person.prototype.age=22;
Person.prototype.showName=function(){
    console.log(this.name);
}

function Student(id){
    this.id=id;
}
var person=new Person("Mike");
Student.prototype=person;
var s1 = new Student('2017001');
var s2 = new Student('2017002');

console.log(s1.id,s2.id);
/**
   s1.name
   s1.__proto__=Student.prototype;
 */
console.log(s1.name,s2.name);
/**
   s1.age
   s1.__proto__=Student.prototype
   Student.prototype=person

   person.__proto__=Person.prototype
 */
console.log(s1.age,s2.age);