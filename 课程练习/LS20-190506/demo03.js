/**
 * Created by wangluyu on 2019/5/6.
 */
/* 
    字符的集合 
    [abcdefg] :从中括号集合中任取一个字符
    [^abcdef] :排除中括号内的字符的任意一个字符
*/
    var reg1=/[abc]\d/gi;
    var str1="a1b2c3d4dfdfdfd";
    str1.replace(reg1,"x");//"xxxd4dfdfdfd"


    var reg2=/[abc][0-9]/gi;
    var str2="a1b2c3d4";
    str2.replace(reg2,"x"); //"xxxd4"

    var reg3=/[abc][^0-9]/gi;
    var str3="a1b2c3d4ae";
    str3.replace(reg3,"x");//"a1b2c3d4x"

/*练习：
    匹配开头字符是数字 第二个字符是a-f 第三个字符是空格,如下：
*/
    var reg4=/\d[a-f]\s/gi;
    var str4="0a d1b d";
    str4.replace(reg4,"x");