/**
 * Created by wangluyu on 2019/5/6.
 */
/*字符分类：
    \d: 匹配阿拉伯数字 [0-9];
    \D: 匹配不是一个阿拉伯数字 [^0-9];
    \w: 匹配所有的字母、数字，以及下划线 [A-Z a-z 0-9 _];
    \W: 匹配不是字母、数字、下划线的字符 [^ A-Z a-z 0-9 _];
    \s: 匹配一个空白字符;
    \S: 匹配一个非空白字符;
    . : 匹配任意一个字符;
    x|y:表示匹配x字符或者y字符;
*/
var reg1=/a\d/gi;
var str1="a1vdsa4";
str1.replace(reg1,"x");//"xvdsx"

var reg2=/a\D/gi;
var str2="asbcda3efag";
str2.replace(reg2,"x");//"xbcda3efx"

var reg3=/a\w/gi;
var str3="abcdaefa123a_";
str3.replace(reg3,"x");//"xcdxfx23x"

var reg4=/a\W/gi;
var str4="abaea1a_a$";
str4.replace(reg4,"x");//"abaea1a_x"

var reg5=/\sa\d/gi;
var str5=" a1 a3a4a5";
str5.replace(reg5,"x");//"xxa4a5"

var reg6=/\Sa\d/gi;
var str6=" a1 a3a5";
str6.replace(reg6,"x");//" a1 ax"