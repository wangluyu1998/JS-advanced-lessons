/**
 * Created by wangluyu on 2019/4/12.
 */
/*
    批量添加属性并设置属性特性 book实例
*/

var book={};
//调用Object.defineProperties(对象名，要添加的属性)方法，为对象一次定义多个属性(1.数据属性)(2.访问器属性)
Object.defineProperties(book,{
    //先添加了两个数据属性(_year,edition):
    _year:{
        value:2004,
        writable:true
    },
    edition:{
        value:1,
        writable:true
    },
    //添加访问器属性(year)
    year:{
        //调用get方法读取属性：
        get:function(){
            return this._year;
        },
        //调用set方法写入属性：
        set:function(newValue){
            if(newValue>2004){
                this._year=newValue;
                this.edition+=newValue-2004;
            }
        }
    }
});
book.year=2006;
console.log(book);


/*  
    关于Object.create的第二个属性，
    思考x是empty自身属性还是obj2的自身属性？
*/
var empty = {};
var obj2=Object.create(empty,{
    x:{
        value:1
    },
    y:{
        value:2,
        enumerable:true
    }
});
console.log(obj2);
console.log(obj2.hasOwnProperty("x"));//true 即x是obj2自身的属性
console.log(obj2.hasOwnProperty("y"));//true