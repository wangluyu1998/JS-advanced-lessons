/**
 * Created by wangluyu on 2019/5/6.
 */

/*
    正则表达式的结构：
        /正则表达式文本/标识符
    [xxx]:从中括号中的字符中任意选一个
    i标识符：是否忽略大小写
    g标识符：是否从全局检索（global）
*/
    var reg1=/[bcf]at/i;//字面量定义

    var reg2=new RegExp(/[bcf]at/,"gi");//常见形式,通过RegExp构造函数实例化得到
    var reg3=new RegExp("[bcf]at","gi");

    var str1="bat cat fat Fat difijfi";
    str1.match(reg2); //match()方法：检索返回一个字符串匹配正则表达式的结果


/* 
    元字符：没有任何修饰符，最简单的
    12345 abcdefg
*/
var reg1=/ab/gi;
var str1="abcdefg";
str1.replace(reg1,"x");//"xcdefg"