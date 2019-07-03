/*
Created by wangluyu on 2019/5/31.
*/
/*函数参数的解构赋值:
    适用于函数参数较多或者结构较复杂的情况
*/
function move2({x,y}={x:0,y:0}){
    return [x,y];
}
console.log(move2());//默认[0,0]
console.log(move2({y:2,x:1}));//[1,2]
console.log(move2({}));//undefined undefined