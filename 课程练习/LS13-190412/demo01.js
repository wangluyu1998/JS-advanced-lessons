/**
 * Created by wnagluyu on 2019/4/12.
 */

/**属性特性描述符 */
    var obj = {
        x:5
    };
    Object.defineProperty(obj,"y",{
        configurable:false,
        writable:false,
        enumberable:true,
        value:6
    });
    Object.getOwnPropertyDescriptor(obj,"x");
    Object.getOwnPropertyDescriptor(obj,"y");

/**属性特性的继承 */
    var o1 = {x:1};
    var o2 = Object.create(o1);
    //o2._proto_=o1;
    //往o2自身上添加属性
    o2.x=2;
    //只能删除o2自身的属性
    delete o2.x;



    var o1={x:1};
    var o2=Object.create(o1);
    console.log(o2._proto_);
    console.log(o2._proto_._proto_);
    console.log(o2._proto_._proto_._proto_);


//链式关系：
var objProto={
    z:3
};
var obj=Object.create(objProto);
obj.x=1;
obj.y=2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

"z" in obj;
obj.hasOwnProperty("z");//false

var obj={x:3};
obj.hasOwnProperty("y");

//字符串str之所以可以调用indexof方法，是因为自动装箱成了字符串对象
var str="absdefg";
str.indexOf("abc");
console.log(str._proto_._proto_==string.prototype);
