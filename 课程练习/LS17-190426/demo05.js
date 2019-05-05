/**
 * Created by wangluyu on 2019/4/29.
 */
/*公有属性、私有属性*/

//涉及到访问私有属性时，需将间接访问私有变量的函数定义在构造函数中
//而不再定义在构造函数的prototype上：
function A(id){
    this.publicId=id;
    var privatedId=456;
    this.getId=function(){
        console.log(this.publicId,privatedId);
    } 
}