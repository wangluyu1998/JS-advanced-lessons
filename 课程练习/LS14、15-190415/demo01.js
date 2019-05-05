/*
 * Created by wangluyu on2019/4/15.
 */
var obj1={z:1};
var obj2=Object.create(obj1);
console.log(obj2.__proto__);
obj2.z=3;
console.log(obj2.z);

//delete操作只能删除对象自身上的属性值

var obj1={z:1};
var obj2=Object.create(obj1);
Object.prototype.sayHi=function(){
    console.log("hello");
}
obj2.sayHi();//首先，obj2自身没有此方法，于是到obj2的原型链上去寻找


//基于构造函数实现原型继承
    function Person(age,name){
        this.name=name;
        this.age=age;
        this.sayHi=function (){
            console.log("say Hi to you ");
        }
    }
    var p1=new Person(20,"zhangsan");
    var p2=new Person(21,"lisi");
    console.log(p1,p2);

    //节省内存空间
    function Person(age,name){
        this.name=name;
        this.age=age;
    };
    Person.prototype.sayHi=function(){
        console.log(this.name);
    };
    var p1=new Person(20,"zhangsan");
    var p2=new Person(21,"lisi");
    console.log(p1);
    console.log(p2);

    console.log(p1.__proto__==Person.prototype);
    console.log(p2.__proto__==Person.prototype);
    p1.sayHi();
    p2.sayHi();

    console.log(Person.prototype.constructor==Person);
    console.log(Object.prototype.constructor==Object);