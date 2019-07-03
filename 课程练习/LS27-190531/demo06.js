/*
Created by wangluyu on 2019/5/31.
*/
/* ES6对内置对象的扩展 */

// ES6为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历
let str="abcdefg";
for(let i of str){
    console.log(i);
}

let arr=["a","b","c","d"];
for(let j of arr){
    console.log(j);
}

//提供新的方法用于查找、判断和生成字符串
var s = 'Hello world!';
s.startsWith('Hello'); // true
s.endsWith('!'); // true
s.includes('o'); // true

//第二个参数，表示开始搜索的位置
var s = 'Hello world!';
s.startsWith('world', 6); // true
s.endsWith('Hello', 5); // true
s.includes('Hello', 6); // false

//repeat方法返回一个新字符串，表示将原字符串重复n次
let str1="hello world  ";
str1.repeat(3);