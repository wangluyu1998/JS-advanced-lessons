/**
 * Created by wangluyu on 2019/5/6.
 */
/* 
    边界字符 :
    ^m: 匹配以m字符开头的字符串
    n$: 匹配以n字符结尾的字符串
*/
    var reg1=/^a\d/gi;
    var str1="a1fgdgrhbh";
    str1.replace(reg1,"x");//"xfgdgrhbh"

    var reg2=/\s\da$/gi;
    var str2=" 1a";
    str2.replace(reg2,"x");//"x"


/*
    数量词：
    a*: 匹配a出现0次或多次;
    m?: 匹配m出现0次或者1次;
    n+: 匹配n出现1次或者多次;
    p{m,n}: 表示p至少出现m次，至多出现n次;
    p{m,}:表示p至少出现m次，至多不限;
*/
    var reg3=/a?bcd/gi;
    var str3="abcd bcd aabcd";
    str3.replace(reg3,"x");//"x x ax"

    var reg4=/a+bcd/gi;
    var  str4="abcd bcd aabcd aaabcd";
    str4.replace(reg4,"x");//"x bcd x x"

    var reg5=/a{1,3}bcd/gi;
    var str5="abcd bcd aabcd aaabcd aaaabcd";
    str5.replace(reg5,"x");//"x bcd x x ax"