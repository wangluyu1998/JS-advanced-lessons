/*
* Created by wangluyu on 2019/4/8.
*/
/**对象属性的相关操作 */
//1111111————添加属性
    var obj={
        x:1
    }

    //直接添加属性的常用方法
    obj.age=20;
    console.log(obj);

    //这种.的添加属性的方式，会出现错误
    var z="age";
    obj.z=20;
    console.log(obj);//属性名成了z

    //这种[]的添加属性的方式，也可以用（[]里面一般都是变量）
    var z="age";
    obj[z]=20;
    console.log(obj);//s属性名是想要添加的age，没有错误


//2222222————删除属性
var obj={
    x:1,
    age:20
}
delete obj.age;
console.log(obj);