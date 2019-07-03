/**
 * Created by wangluyu on 2019/5/10.
 */
/* 正则表达式用到的一些String.prototype方法：*/

/*111111:
    str.match():在字符串中执行查找匹配的String方法,
    匹配成功：返回一个数组
    匹配失败：返回null
*/
    var reg=/\d(aa)/gi;
    var str="1aa hello";
    str.match(reg);// [1aa]

/*222222:
    str.search():在字符串中测试匹配的String方法,
    匹配成功时，返回匹配到的位置索引
    匹配不成功，返回-1
*/
    var reg=/\d(aa)/gi;
    var str="1aa hello";
    str.search(reg);// 0