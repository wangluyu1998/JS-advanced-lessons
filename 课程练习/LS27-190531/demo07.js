/**
 * Created by wangluyu on 2019/5/31.
 */

//正则表达式的两种定义：
 let reg1=/xyz/gi;//通用
 let reg2=new RegExp(/xyz/gi);
 let reg3=new RegExp('xyz','gi');


/*
    ES6中关于正则表达式提供的新属性：
*/

/*
    正则对象.flags:
    返回正则表达式的修饰符
    */
console.log(reg1.flags);


/*
    粘性修饰符：y
    粘性匹配，从上一次匹配结束的lastIndex位置开始匹配   
    匹配成功返回结果数组    
    匹配失败返回null；
    正则对象.sticky:判断是否设置了粘性修饰符
*/

let str='aaa_aa_a';
//let reg5=/a+/gi;

let reg6=/a+/y;

//console.log(reg5.exec(str));["aaa"]
//console.log(reg5.exec(str));["aa"]

console.log(reg6.exec(str)); //["aaa"]
console.log(reg6.lastIndex); // 3
console.log(reg6.exec(str)); //null (即匹配不到)
console.log(reg6.sticky); //true
