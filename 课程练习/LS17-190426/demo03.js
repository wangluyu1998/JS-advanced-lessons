/**
 * Created by wangluyu on 2019/4/26.
 */

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

//Student.prototype.__proto__=Person.prototype;//直接把后者添加到前者的__proto__上，不会发生覆盖
    //console.log(Student.prototype);
Student.prototype=Object.create(Person.prototype);//会覆盖掉Student.prototype
    //console.log(Student.prototype);
Student.prototype.constructor=Student;

var s1=new Student("张三",20,"20170123")
console.log(s1);
console.log(s1.constructor);

//P.S.构造函数的prototype上都会有constructor，它指向构造函数自身