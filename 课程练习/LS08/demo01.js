/*
 * Created by wangluyu on 2019/4/4.
*/

/*JS预解析：主要工作————变量声明和函数声明提升【在当前作用域内提升】*/

//part111111111111————变量声明提前：
    //JS属脚本语言：非提前编译，而是边编译边执行，所以效率较低
    console.log(a);//undefined
    var a=2;
    //对于以上两行，解析器角度看到的代码：
    var a;
    console.log(a);//undefined
    a=2;
    console.log(a);//结果 2

    //思考如下代码输出什么 (值类型)
    console.log(a,b);//undefined undefined
    var b = 23;
    console.log(a,b);//undefined 23
    var a = b;
    console.log(a,b);//23 23
    //P.S.:只是变量声明提前而已，相当于：
    var a;
    var b;
    console.log(a,b);
    var b = 23;
    console.log(a,b);
    var a = b;
    console.log(a,b);

    //思考如下代码输出什么（引用类型)
    console.log(obj1,obj2);//undefined undefined 
    var obj1 = {x:23};
    console.log(obj1,obj2);//{x:23} undefined
    var obj2 = obj1;
    console.log(obj1,obj2);//{x:23} {x:23}
    obj2.x =25;
    console.log(obj1,obj2);//{x:25} {x:25}
    //P.S.:也只是变量的声明提前，注意引用类型传递的是变量的地址，所以原对象也被修改了
    
    if(true){
        var a=1;
    }
    console.log(a);//结果 1
    
    if(false){
        var b=2;
    }
    console.log(b);//undefined


//part222222222222222函数声明提前
    //函数声明的提前：该函数必须是显式声明的
    //例：
    foo();
    function foo(){
        console.log("f_1");
    }
    function foo(){
        console.log("f_2");
    }
    //结果 f_2(结果是f_2是因为在ES5中，函数及变量声明重复的话，相当于覆盖)
    //上述代码相当于：
    function foo(){
        console.log("f_1");
    }
    function foo(){
        console.log("f_2");
    }
    foo();

    //函数不进行声明提前的情况有两种：

    //第一种
    //当同时有var和function关键字时
    //function前有运算符，认定为表达式，不提升,如下：
    foo();
    var foo=function(){
        console.log("balabala");
    }
    //出现报错：foo is not a function

    //上述代码等效如下：
    var foo;
    foo();
    foo=function(){
        console.log("foo");
    }
    //同样出现报错：foo is not a function

    //思考为什么以下代码不会出现报错？？？？？？？
    console.log(foo);
    var foo=function(){
	    console.log("foo");
    
    }
    foo();//结果  f(){console.log("foo")}   foo


    //第二种
    //当同时有var和function关键字时，
    //变量名同函数名的情况下，不进行提前，如下：
    var AA=function AA(){
        console.log("AA_2");
    }
    AA();
    //结果 AA_2

    AA();
    var AA=function AA(){
        console.log("AA_2");
    } 
    //结果 AA_2
    
    AA();
    function AA(){
        console.log("AA_1");
    }
    //结果 AA_1

    AA();
    function AA(){
        console.log("AA_1");
    }
    var AA;
    //结果也为 AA_1