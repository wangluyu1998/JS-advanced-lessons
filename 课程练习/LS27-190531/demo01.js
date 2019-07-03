/**
 * Created by wangluyu on 2019/5/31.
 */
/*
数组的解构赋值:
    进行两侧的模式匹配，完成对应位置上变量的赋值。
*/
let[,,third]=["bar","foo","baz"];
console.log(third);// "baz"

let [a,b,c]=[1,2,3];
console.log(a,b,c);//1 2 3

let [head,...tail]=[1,2,3,4];
console.log(head,tail);//1  [2, 3, 4]