/**
 * Created by wnagluyu on 2019/5/31.
 */

/**
对象的结构赋值:
    根据键名匹配变量，将键值赋值给对应变量;
    若左侧为键值对，需要注意：键名只用于匹配，真正赋给的是对应的键值；
*/
let{foo2,bar2}={bar2:"bar2",foo2:"foo2"};
console.log(foo2,bar2);

let{k1:v1,k2:v2}={k1:"aaa",k2:"bbb"};
console.log(v1,v2);//"aaa" "bbb"