/**
 * Created by wangluyu on 2019/4/8.
 */

/*为什么属性链上有些属性找不到 */
    var objProto={
        z:3
    }

    var obj=Object.create(objProto);
    obj.x=1;
    obj.y=2;

    console.log(obj.x);//1
    console.log(obj.y);//2
    console.log(obj.z);//3

    console.log(obj.toString);

    for(var k in obj){//通过for...in遍历所有原型链上的属性
        console.log(k,obj[k]);//是否能遍历到toString？————不能
    }