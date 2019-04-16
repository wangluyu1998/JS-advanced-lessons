/**
 * Created by wangluyu on 2019/4/8.
 */

//设置（访问器）属性的特性
//即通过Object.defineProperty来添加和改变的get /set的属性特性

    //添加访问器：
    var obj1={
        _name:"jack"
    };
    Object.defineProperty(obj1,"name",{
        get:function (){//只定义了get 特性，因此只能读不能写
            return this._name;
        }
    });
    console.log(obj1.name);//jack
    obj1.name="lily";//只定义了getter访问器，因此写入失效
    console.log(obj1.name);//jack

    //改变访问器属性特性 注意添加访问器和修改访问器特性的写法的区别
    var obj2={
        _name:"jack",
        set name(val){this._name = val;},
        get name(){return this._name;}
    };
    Object.defineProperty(obj2,"name",{
        get:function (){
            return this._name;
        },
        set:function (val) {
            this._name = val;
        }
    });
    console.log(obj2.name);//jack
    obj2.name="lily";
    console.log(obj2.name);//lily

    //属性特性描述符
    var obj = {x:5};
    Object.defineProperty(obj,"y",{
        configurable:false,
        writable:false,
        enumerable:true,
        value:6
    });
    Object.defineProperty(obj,"z",{
        configurable:false,
        value:7
    });
    Object.getOwnPropertyDescriptor(obj,"x");
    //Object.getOwnPropertyDescriptor(obj,"y");
    //Object.getOwnPropertyDescriptor(obj,"z");