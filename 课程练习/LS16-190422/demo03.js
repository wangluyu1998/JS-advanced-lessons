/**
 * Created by wngluyu on 2019/4/22.
 */

 /** 间接调用中的this的指向——call()*/

    var objA={name:'AA',x:1}
    var objB={name:'BB',x:2}
    function test(){
        console.log(this.name,this.x)
    }
    objA.fun=test;
    objA.fun();
    /*函数也是对象，函数对象
      函数对象的构造函数 Function
      函数对象.__proto__==Function.prototype
    */
 objA.fun.call(objB);//即objB.fun()


    var objA={name:'AA',x:1}
    var objB={name:'BB',x:2}
    function test(arg1){
        this.name=arg1;
        console.log(this.name,this.x)
    }
    objA.fun=test;
    objA.fun();
    objA.fun.call(objB,'cc');