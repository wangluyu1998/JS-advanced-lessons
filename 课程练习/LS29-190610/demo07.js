/*
    Created by wangluyu on 2019/6/10.
*/
/* class中的继承 */

/*
    super:
    在子类的构造函数中，可以指向父类的构造函数
    在子类的实例方法中，可以指向父类的原型对象，即可以调用到父类的原型方法
*/
class Parent{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    show(){
        console.log(this.x);
    }
}
class Child extends Parent{
    constructor(x,y,z){
        super(x,y);//指向父类的构造函数constructor
        this.z=z;
    }
    show(){
        super.show();
    }
}
let c1 = new Child(1,2,3);
console.log(c1.show());