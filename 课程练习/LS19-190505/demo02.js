/**
 * Created by wangluyu on 2019/5/5.
 */

 //时间戳
 var millionSeconds=Date.parse("2019-05-05");
 console.log(millionSeconds);

 var next=millionSeconds+86400000;
 var date1=new Date(next);
 console.log(date1);

 //getDay():
 //取值范围0-6
 var weeks=["周日","周一","周二","周三","周四","周五","周六"];
 var currentDay=(new Date()).getDay();
 console.log(weeks[currentDay]);

 var months=[];
 var currentMonth=(new Date()).getMonth();
 console.log(months[currentMotnth]);

//getMonth():
//取值范围0-11