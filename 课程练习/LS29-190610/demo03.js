/**
    Created by wangluyu on 2019/6/10.
 */
/*
    ES6中新增的数据结构Map:
    类似于对象，也是键值对的集合，但不限于“字符串-值”的对应，还可以是“值-值”
*/
let m1=new Map();
let o={"x":1};
m1.set(o,2);
console.log(m1);
m1.get(o);
m1.has(o);//true
m1.delete(o);

let m2=new Map(
    [["username","zhangsan"],["age","20"]]
);
for(let i of m2){
    console.log(i);
}