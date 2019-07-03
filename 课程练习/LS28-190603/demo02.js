/**
 * Created by wangluyu on 2019/6/3.
 */
//ES6中 Array新增的原型方法：


/**
    Array.prototype.copyWithin(target,start,end):
    target:复制的目标位置
    start :复制的起始位置
    end   :复制的结束位置（不包含）
 */
 let arr1=[0,1,2,3,4,5];
 arr1.copyWithin(0,3,4);//(6) [3, 1, 2, 3, 4, 5]

 /**
    Array.prototype.find():
    查找符合特定条件的元素
    并返回第一个符合条件的元素
  */
 let arr2=[10,20,30,40,50];
 let el=arr2.find(function(element){
    return element>19;
 })
 console.log(el);

/*
    findIndex():
    查找符合条件的元素
    并返回第一个符合条件的元素的下标
*/
 let arr2=[10,20,30,40,50];
 let elIndex=arr2.findIndex(function(element){
    return element>29;
 })
console.log(elIndex);


/**
    fill(value,填充的起始位置,填充的结束位置)
    不包含结束位置
 */
let arr3=[1,2,3,4];
arr3.fill(0,0,3);//[0,0,0,4]


/**
    keys() 获取到的是数组的索引0,1,2
    
    values() 获取到的是数组的元素值

    entries() 既有索引又有元素值

    includes() 是否包含元素（返回true 或者 false）

    可以使用for...of进行遍历
 */