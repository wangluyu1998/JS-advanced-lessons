/**
 * Created by wangluyu. 
 */
//c和d的输出互不影响
//c、d相互独立，作用域相互独立，各自的参数n也相互独立
function counter(){
    var n=0;
    return{
        count:function(){
            return ++n;
        },
        reset:function(){
            n=0;
            return n;
        }
    }
}
var c=counter();
var d=counter();
console.log(c==d);//false
console.log(c.count());//1
console.log(d.count());//1
console.log(c.reset());//0
console.log(c.count());//1
console.log(d.count());//2



function foo() {
    var i = 0;
    function bar() {
        console.log(++i);
    }
    return bar;
}
var a = foo();
var b = foo();
a();//1
a();//2
b();//1