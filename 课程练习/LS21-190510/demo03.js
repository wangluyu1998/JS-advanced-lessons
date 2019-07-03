/**
 * Created by wangluyu on 2019/5/10.
 */
/* 正则中用到的RegExp.prototype上的方法： */

/*
    RegExp.test():验证字符串是否符合正则表达式的规则，
    符合返回true
    不符合返回false
*/
    var regExp = /a/i;
    console.log(regExp.test("ab"));
    
/* 
    RegExp.exec():在一个指定字符串中执行搜索匹配,
    匹配成功返回一个结果数组
    匹配不成功返回null
*/