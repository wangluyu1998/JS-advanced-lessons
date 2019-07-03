/*
Created by wangluyu on 2019/5/31.
*/
/**
 * 解构赋值的应用：
 */
//part111111111111.交换变量的值：
//简洁、易读、语义清晰
var [x,y]=["a","b"];
[x,y]=[y,x];
console.log(x,y);

//part2222222222222.获取多个返回值：
// 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。
// 有了解构赋值，取出这些值就非常方便

//返回一个数组：
function example(){
    return[1,2,3];
}
var[a,b,c]=example();
console.log(a,b,c);

//返回一个对象,解构所有属性
function example() {
    return {
        foo: 1,
        bar: 2
    };
}
var {foo, bar}=example();