/**
 * Created by wangluyu on 2019-6-10.
 */
/*
    ES6新增数据类型：Symbol 
    使用Symbol方法，生成一个Symbol的变量 具有唯一性
    不可转化其他数据类型
*/
let s1=Symbol("s1");
let s2=Symbol("s1");
console.log(s1 === s2);//false


//添加属性：

//first:
let s1=Symbol("s1");
let obj={};
obj[s1]="hello";

//second：
let obj1={
    [s1]:"world"
}

//third:
let s1=Symbol("s1");
let obj2={
    [s1]:3
};
let s2=Symbol("s2");
Object.defineProperty(obj2,s2,{value:2});

Object.getOwnPropertySymbols(obj2);//(2) [Symbol(s1), Symbol(s2)]

/*
    Symbol.for():
    用Symbol.for()方法创建的的 symbol 会被放入一个全局 symbol 注册表中;
    Symbol.for()并不是每次都会创建一个新的 symbol,它会首先检查给定的 key 是否已经在注册表中了;
    假如是，则会直接返回上次存储的那个;
    否则，它会再新建一个
*/
let f1=Symbol("f1");
console.log(Symbol.for("f1")==f1);//false

console.log(Symbol.for("f1")==Symbol.for("f1"));//true