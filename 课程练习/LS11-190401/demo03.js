/**
 * Created by wangluyu. 
 */
//闭包的实际应用案例
function closure(objId,content,delay){
    setTimeout(function(){
        console.log(objId,content);
    },delay);
}
closure("myDiv","Closure is Create", 2000);
