/*
* Created by wangluyu on2019/4/5.
*/
//代码执行的上下文
    //指的是代码执行的时候，相关的上下文环境
    //函数的调用栈、this的指向、作用域及作用域中的变量
    //使用开发者模式-sources-Snippets-Call Stack（调用栈）进行调试
    var a=1;
    var b=2;
    function fn1(){
        var c=3;
        var d=4;
        console.log(b);
        function fn2(){
            var e=5;
            var f=6;
        }
        fn2();
    }
    fn1();
    
//执行上下文
    console.log("小明回家");
    var xx=["书桌","书包","铅笔盒"];
    console.log("在家-做作业中");
    function goToStore(){
        var yy=["文具店老板","出售的文具"];
        console.log("在文具店-买文具中");
        console.log("在文具店-买文具中  发现没带钱");
        goToBank();
        console.log("在文具店-买好文具  返回家");
    }
    function goToBank(){
        var zz=["银行职员","柜员机"];
        console.log("在银行-取钱  返回文具店");
    }
    console.log("在家-做作业中  发现笔没油了");
    goToStore();
    console.log("在家-继续写作业");

//IIFE模式：立即执行的函数表达式
    //写法一：
    (function max(x,y){
        return x>y?x:y;
    }(2,3));
    //写法二：
    (function max(x,y){
        return x>y?x:y;
    })(2,3);



//IIFE解决的问题：没有块级作用域，变量污染

    var userId=2;
    document.onclick=function(){
        alert(userId);
    }
    // 很长一段代码
    if(true){
        var userId=20;
    }
    //结果为20，发生了变量污染、覆盖

    //  ||
    //  ||    
    // \||/

    //使用IIFE模式，增加作用域，限制变量生命周期：
    (function(){
        var userId=2;
        document.onclick=function(){
            alert(userId);
        }
    })();
    (function(){
        if(true){
            var userId=20;
        }
    })();



    //解决的问题：变量的非期望共享

    function foo(){
        var arr1=[];
        for(var i=0;i<10;i++){
            arr1[i]=function(){
                return i;
            }
            //只有函数的定义，是不知道i值的
            function fn1(){
                console.log(i);
            }
        
        }
        fn1();//i值都是一样的 循环结束之后都是最后那个值
        return arr1;
    }
    var arr2=foo();
    arr2[0]();
    //for 循环过程中，不能确定函数里面的i值是多少

    //使用IFEE解决
    function foo(){
        var arr1=[];
        for(var i=0;i<10;i++){

            (function(j){
                arr1[j]=function(){
                    return j;
                }
            })(i)//0

            (function(j){
                arr1[j]=function(){
                    return j;
                }
            })(i)//1

            (function(j){
                arr1[j]=function(){
                    return j;
                }
            })(i)//2

            (function(j){
                arr1[j]=function(){
                    return j;
                }
            })(i)//3

            (function(j){
                arr1[j]=function(){
                    return j;
                }
            })(i)//4

            (function(j){
                arr1[j]=function(){
                    return j;
                }
            })(i)//5

            (function(j){
                arr1[j]=function(){
                    return j;
                }
            })(i)//6

            (function(j){
                arr1[j]=function(){
                    return j;
                }
            })(i)//7

            (function(j){
                arr1[j]=function(){
                    return j;
                }
            })(i)//8

            (function(j){
                arr1[j]=function(){
                    return j;
                }
            })(i)//9
        } 
        return arr1;
    }
    var arr2=foo();
    arr2[0]();//0
    arr2[5]();//
