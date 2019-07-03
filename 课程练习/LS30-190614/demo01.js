/**
    Created by wangluyu on 2019/6/14.
 */
/*  ES6遍历器  */

//使用ES5实现一个遍历器的效果
function createIbterator(arr){
    var i=0; 
    return{
        next:function(){
            return i < arr.length ?
            {value:arr[i++],done:false} :
            {value:undefined,done:true};
        }
    }
}
let iterator1 = createIbterator([1,2,3,4]);
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

/* 
    为各种数据结构，提供一个统一的、简便的访问接口
*/
let str="abcd";
let arr1=[1,2,3,4];
let m1=new Map({name:"zhangsan",age:20});
let s1=new Set([1,2,3,1]);
/*普通对象无法使用遍历器遍历 */
let obj={name:"zhangsan",age:20};

/*
判断某种数据结构能否使用遍历器： 
    只需查看该数据是否具有Symbol.iterator属性    
*/
let arr1=[1,2,3,4];
console.log(arr1[Symbol.iterator]);

let str1="abcd";
console.log(str1[Symbol.iterator]);

let obj={name:"zhangsan",age:20};
console.log(obj[Symbol.iterator]);//undefined,对象不能使用该遍历器

/* 遍历器的应用 */
let [head,...detail]=[1,2,3,4];
console.log(detail);