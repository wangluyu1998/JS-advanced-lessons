/*
    Created by wangluyu on 2019/6/10.
*/
/* js中的继承的实现方式 */

let obj1 = {x:1};
let obj2 = Object.create(obj1);

let obj3 = {};
obj3.__proto__ = obj1;


function Parent(x,y){
    this.x = x;
    this.y = y;
}
function Child(x,y,z){
    Parent.call(this,x,y);
    this.z=z;
}
let c1 = new Child(1,2,3);
console.log(c1);