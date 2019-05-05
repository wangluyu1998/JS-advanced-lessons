/*
* Created by wangluyu on 2019/4/4.
*/

/*JS变量的作用域*/
//part111111111111—————全局变量和局部变量：
    var a=1;
    var b=2;
    function fn1(){
        var b=3;
        var d=4;
        console.log(b);
        function fn2(){
            b=5;
            var e=6;
        }
        fn2();
    }
    fn1();//结果为3
          //局部b不会影响全局b(局部b也用var关键字声明的前提下)
          //每个函数内部都会生成一个作用域
          //当fn2函数的作用域出现变量b时，他会现在自己的作用域中寻找变量b的定义
          //若没有，会向外一层即fn1函数的作用域继续寻找，找到为止
          //如果找不到，fn2的作用域下会自动定义一个b
    console.log(b);//以全局变量2输出

    var f2=function(){
        var x="局部";
        //x="全局";
        console.log(x);
    }
    f2();
    console.log(x);//如果函数内有var此行会报错，如果函数内没有var此行输出全局x值


//part22222222222222——————作用域的静态性：

    //函数一经定义，它的作用域就确定了
    //不会因为函数在哪被调用而发生改变，与代码的执行顺序无关
    var username="jack";
    function foo(){
        console.log(username);
    }
    function bar(){
        var username="bill";
        foo();
    }
    bar();//结果为jack

    //通过New Function创建的对象不遵循作用域的静态性原则

//part33333333————ES5无块级作用域：

    //ES5没有块级作用域的时候，可能会出现变量覆盖或者变量共享
    //ES5对此的解决方法：匿名函数包裹范围，并立即执行
    if(true){
        var z = 23;
    }
    console.log(z);//正常输出 23

    if(true){
        (function(){
            var z = 23;
        })()          
    }
    console.log(z);//报错 z is not a function

    //ES5对于没有块级作用域的解决方法：
    //使用let完成块级作用域中的定义
    if(true){
        var a=1;
    }
    console.log(a);//，由于没有块级作用域，结果为1

    if(true){
        let a=1;
    }
    console.log(a);//报错：a is not a function