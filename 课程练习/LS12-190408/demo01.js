/*
* Created by wangluyu on 2019/4/8.
*/
/**创建对象 三种方法 */
//111111111111:——————————通过字面量的方式创建 JS对象
    var obj={
        num:10,
        str:"Hi",
        show:function(){
            return this.str;
        }
    }

//222222222222:——————————通过Object工场方法创建JS对象
//Object.create(obj)——创建一个新对象，将obj对象作为新对象的_proto_
//注：JS对象是通过原型链的方式实现的对象继承
    var obj={
        num:10,
        str:"Hi",
        show:function(){
            return this.str;
        }
    }
    var subObject=Object.create(obj);
    console.log(subObject);
    console.log(subObject._proto_== obj);

//333333333333:——————————构造函数创建新对象
//this指的是实例化得到的一个对象
    function Person(name,age){
        this.name=name;
        this.age=age;
        this.sayHi=function(){
            console.log("Hello to "+this.name);
        }
    }
    var person1=new Person("zhangsan",20);
    var person2=new Person("lisi",21);
    person1.sayHi();
    person2.sayHi();
    //上述代码优化为：
    function Person(name,age){
        this.name=name;
        this.age=age;
    }
    Person.prototype.sayHi=function(){
        console.log("Hello to "+this.name);
    }
    var person1=new Person("zhangsan",20);
    var person2=new Person("lisi",21);
    person1.sayHi();
    person2.sayHi();
    