/**
 * Created by wangluyu on 2019/5/10.
 */
/*
    正则表达式的分组：
    用（）包裹的规则内容，称之为分组；
*/

    //RegExp.exec():在一个指定字符串中执行搜索匹配,返回一个结果数组或null
    //数组结构:[整个正则表达式匹配到的内容，分组匹配到的内容]
    var reg1=/(ss)\da(\dxx)/gi;
    var str1="ss1a2xxbcdefg";
    console.log(reg1.exec(str1));
    // ["ss1a","ss","2xx"]



/* 
    分组的反向引用 
*/
    var reg2=/(\dss)a\1/gi;
    //"\1"反向的引用了前面的分组，相当于:
    var reg2=/(\dss)a(\dss)/gi;

    var reg3=/(\dss)a\1/gi;
    var str3="1ssa";
    str3.replace(reg3,"x");

    var reg4=/(ab){3}/gi;
    var str4="abababcdef";
    str4.replace(reg4,"x");


/*
    断言：
*/