/**
 * Created by wangluyu on 2019/4/22.
 */
/**
 * 构造函数中的this的指向 :
 * JS中的构造函数充当了类的角色，
 * 如果不使用new调用，就和普通函数一样，
 * 当作为构造函数正常调用时,this就会绑定到新创建的对象上
*/
function Point(x,y){
    this.x=x;
    this.y=y;
}
var p=new Point(2,3);
console.log(p);

Point(5,6);
console.log(window.x,window.y);//5,6