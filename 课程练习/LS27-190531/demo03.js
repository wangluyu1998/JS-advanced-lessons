/**
 * Created by wnagluyu on 2019/5/31.
 */
/**
 *  如果=右侧不是一个对象时，会转化成一个对象
 */

 //字符串解构赋值
let[a1,b1,c1,d1]="hello";
console.log(a1,b1,c1);


//数字解构赋值
let{toString:s}=123;
console.log(s);

let num=new Number(123);
let {toString:s1}=num;
console.log(s==Number.prototype.toString);