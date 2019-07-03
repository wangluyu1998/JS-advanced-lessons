/*
    Created by wangluyu on 2019/6/10.
*/
/* 
    ES6中新增的数据结构 Set
    类数组结构，但其成员都是唯一的，没有重复元素
 */
let s1=new Set([1,2,3,4,5,6,7,8,9,1,2,3]);
console.log(s1); 
for(let i of s1){
    console.log(i);
}
//console.log(s1.values()); 此结果相当于直接遍历
console.log(s1.size);//9

//添加元素简单直接：add()方法，重复元素添加不进去
s1.add(5);//添加不进去