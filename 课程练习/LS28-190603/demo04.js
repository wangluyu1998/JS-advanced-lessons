/**
 * Created by wangluyu on 2019/6/3.
 */
/**ES6中对Object新增的静态方法 */

/**
    Object.assign()
    用于将所有可枚举属性的值从一个或多个源对象复制到目标对象
    返回目标对象
 */
let target={"username":"zhangsan"};
let source1={"age":20};
let source2={"sex":"male"};
console.log(Object.assign(target,source1,source2));


/**
    Object.values()
    返回一个给定对象自身的所有可枚举属性值的数组
 */
let obj1={
    "username":"zhangsan",
    "age":20,
    "sex":"male"
}
let values=Object.values(obj1);
for(let i of values){
    console.log(i);
}