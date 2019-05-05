/**
 * Created by wangluyu on 2019/4/15.
 */
// 要求掌握下述方法的使用
// Object.keys() 返回所有自有（非继承）可枚举属性的键
// Object.getOwnPropertyNames()返回所有自有（非继承）键，包括不可枚举
// Object.prototype.hasOwnProperty() 判断自身是否有该属性，包括不可枚举的属性
// Object.prototype.propertyIsEnumerable() 判断自身是否有该属性并检测该属性是否可枚举
// in  检测一个对象是否有某个属性，包括继承的属性，包括不可枚举的属性
// for...in 遍历一个对象的属性，包括继承的属性，但不包括不可枚举的属性
// 思考Object静态方法和Object.prototype原型方法的区别（都共享了方法，使用上有什么区别）
var o3={};
o3.y="yyy";
Object.defineProperty(o3,"x",{
    value:"xxx",
    configurable:true,
    enumerable:false,
    writable:true,
})
console.log(Object.keys(o3));//确实包含所有自身上的可枚举的属性
console.log(Object.getOwnPropertyNames(o3));//确实包含所有自身上的所有属性，可枚举的+不可枚举的

console.log(o3.hasOwnProperty("x"));//true
console.log(o3.propertyIsEnumerable("x"));//false

for(var k in o3){
    console.log(k,o3[k]);//遍历不到x属性
}
console.log("x" in o3);//true
console.log("y" in o3);//true

console.log(o3.hasOwnProperty("x"));//true
console.log(o3.hasOwnProperty("y"));//true

/*
    遍历属性的综合实例 
*/
var o4 = {};
o4.a = "aaa";
Object.defineProperty(o4,"b",
    {
        value:"bbb",
        configurable:true,
        enumerable:false,
        writable:true,
    }
);
var o5 = Object.create(o4);
o5.c=24;
Object.defineProperty(o5,"d",{
    value:567,
    enumerable:false
});

for(var k in o5){
    if(o5.hasOwnProperty(k)){
        console.log("o5 自有可遍历属性：",k,o5[k]);
    }else {
        console.log("o5 非自有可遍历属性：",k,o5[k]);
    }
}

console.log(
    o5.propertyIsEnumerable("a"),//true-->false，因为这个方法首先会判断自身有没有该属性，其次判断是否可枚举
    o5.propertyIsEnumerable("b"),//false
    o5.propertyIsEnumerable("c"),//true
    o5.propertyIsEnumerable("d")//false
);

console.log("a" in o5,"b" in o5,"c" in o5,"d" in o5);//都是true

console.log(Object.keys(o5));//只显示自身可枚举的属性

console.log(Object.getOwnPropertyNames(o5));//返回一个数组：只包含自身的，可枚举+不可枚举