/**
 * Created by wangluyu on 2019/4/26.
 */

/*使用两个构造函数实现恰当的继承，解决原型共享的问题 */

//实质是把Person函数中的this指向换成Student的实例化对象
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.showName=function(){
    console.log(this.name);
}

function Student(name,age,id){
    Person.call(this,name,age);
    this.id=id;
}
/*
    s1.__proto__=Student.prototype;
    s2.__proto__=Student.prototype;
*/

Student.prototype.__proto__=Person.prototype;
//上面这一句使实例化对象s1的原型链上具有Person的prototype上的方法

var s1 = new Student("张三",22,2017001);
var s2 = new Student("李四",23,2017002);

console.log(s1);
console.log(s2);
s1.showName();

//测试：
function Animal(name,weight){
    this.name=name;
    this.weight=weight;

}
Animal.prototype.run=function(){
    console.log(this.name+" can run");
}

function Bird(name,weight,color,height){
    Animal.call(this,name,weight);
    this.color=color;
    this.height=height;
}

Bird.prototype.__proto__=Animal.prototype;

var bird1=new Bird("鹰",50,"黑色",150);
console.log(bird1);
bird1.run();