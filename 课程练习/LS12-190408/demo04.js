/**
 * Created by wangluyu on 2019/4/8.
 */

 //设置新（数据）属性或设置（数据）属性特性————defineProperty(对象，属性名，属性描述符)

 //设置属性的可枚举属性：
    var obj={
        x:1
    };
    Object.defineProperty(obj,"y",{
        value:"2",
        enumerable:false
    });
    console.log(obj);//obj中既有x属性又有y属性

    for(var i in obj){
        console.log(i,obj[i]);//由于enumerable设false，只能遍历到x属性
    }
//设置属性的可写和可配置属性：
    var person={
        name:"jack"
    };
    Object.defineProperty(person,"name",{
        //是否可枚举 for...in能否遍历到
        enumerable:false,
        //是否可配置 能否delete删除属性
        configurable:false,
        //是否可写
        writable:false,
        //属性值
        value:"Mike"
    });
    for(var i in person){
        console.log(i,person[i]);
    }
    person.name = "Lucy";
    console.log(person.name);//true——Lucy,false——Mike

    delete person.name;
    console.log(person);//true——可删，false——不可删

//注意：
//直接添加的属性，其所有特性默认都是true，
//通过Object.defineProperty方法添加的属性：
//除了手动修改，其所有特性的默认值都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
//console.log(obj.w);//有w，但上边for...in遍历不到