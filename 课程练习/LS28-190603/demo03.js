/**
 * Created by wangluyu on 2019/6/3.
 */
/*
    ES6简化写法
    不兼容ie
*/
var username="jack";
var person={
    username,
    show(){
        console.log(this.username);
    }
}
person.show();

let bar="doo";
let obj={
    [bar]:"obj1"
}
console.log(obj);