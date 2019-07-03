/**
 * Created by wangluyu on 2019/5/5.
 */


/*
    new Date(年份，月份，日，时，分，秒，毫秒)
*/
    var date1=new Date("2019","05","05");
    console.log(date1);
/*
    new Date(时间格式字符串)——有固定格式
*/
    var date2=new Date("2019-05-05");
    console.log(date2);

    var millionSeconds=Date.now();
    var date3=new Date(millionSeconds);
    console.log(date3);


/*时间分类：
    当地时间
    世界标准时间 UTC GMT 
*/