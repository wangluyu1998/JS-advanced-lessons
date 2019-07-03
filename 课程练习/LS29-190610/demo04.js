/*
    Created by wangluyu on 2019/6/10.
*/
function Point(x,y){
    this.x=x;
    this.y=y;
}
Point.prototype.show=function(){
    console.log(this.x);
}
let p1=new Point(1,2);
p1.show();
//构造函数形式
//  ||
//  ||
//  ||
// \  /
//  \/
// 类的形式(类的本质和构造函数相同)
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    showX(){
        console.log(this.x);
    }
    showY(){
        console.log(this.y);
    }
}
let p2=new Point(1,2);
let p3=new Point(2,3);
console.log(p2.__proto__==p3.__proto__);//true
console.log(p2.__proto__==Point.prototype);//true
p2.showX();
p2.showY();