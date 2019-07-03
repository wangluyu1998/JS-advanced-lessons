/**
    Created by wangluyu on 2019/6/14.
 */
/*  
    ES6生成器 :生成遍历器
*/
function* helloGenerator(){
    yield "hello";
    yield "world";
    return "ending";
}
let iterator1=helloGenerator();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

/* 
    生成器的应用：
    给对象添加一个遍历器
 */
let myiterator={};
myiterator[Symbol.iterator]=function*(){
    yield {name:"zhangsan"};
    yield {age:20};
    return;
}
for(let i of myiterator){
    console.log(i);
}
console.log([...myiterator]);