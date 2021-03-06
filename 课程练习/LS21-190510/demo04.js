/**
 * Created by wangluyu on 2019/5/10. 
 */

var reg1=/(.*)\.(rar|zip|7zip|tgz)$/;
/*
    功能：匹配【文件名+小数点+后面这些压缩文件类型之一】的字符串
    拆解上述字符：
    (.*)  .任意一个字符 *前面的字符出现0或多次
    (.+)更合适

    \.  对.做转义处理

    (rar|zip|7zip|tgz)  任意取一个

    $  以前面分组结尾的
*/


var reg2=/^#[a-fA-F0-9]{6}$/;
/* 
    ^#：表示以#开头
    [a-fA-F0-9]：从[]集合中取任意一个字符 a-fA-F0-9
    {6}：表示前面的字符出现6次
    $：以前面集合中的任意一个字符结尾
*/

// var reg3=/^#[a-fA-F0-9]$/;
// var str5="#fA9";
// str5.replace(reg3,"x");