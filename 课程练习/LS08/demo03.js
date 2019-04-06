/*
* Created by wangluyu on 2019/4/4.
*/
if(true){
    var i = 0;
}

function foo(){
    console.log("j:",j);
    var j = 10;
    console.log("j:",j);
}
foo();//undefined 10

console.log("i:",i);//0
console.log("j:",j);//报错

//上边代码等价于

var i;
if(true){
    i = 0;
}

function foo(){
    var j;
    console.log("j:",j);
    j = 10;
    console.log("j:",j);
}
foo();

console.log("i:",i);
console.log("j:",j);