/**
 * Created by wangluyu. 
 */
//访问器属性：
var o={
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x=val;
    }
};
console.log(o.x);
o.x=2;
console.log(o.x,o.x);

var o={
    "username":"zhangsan",
    "age":20
}
var newPro="sex";
o[newPro]="male";
console.log(o.sex);//错误，把sex当成了属性名，而非变量
for(var i in o){
    console.log(o[i]);
}