/*
    Created by wnagluyu on 2019/6/10. 
*/
/* 类当中的静态方法和原型方法 */

/* 
    静态方法：
    使用static定义
    静态方法中this指向类本身
*/
class Person{
    static walk(){
        console.log(this);
    }
    say(){
        console.log(this);
    }
}
Person.walk();//静态方法只能通过类来调用
let p1=new Person();
p1.say();//原型方法通过实例化对象来调用
p1.walk();//报错


//ES6暂不支持静态属性
