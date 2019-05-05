/**
 * Created by wangluyu on 2019/4/22.
 */

// Part111111111111方法中函数嵌套 this缺陷
    var point = {
        x:0,
        y:0,
        moveTo:function (x,y) {
            //内部嵌套函数
            function moveToX() {
                this.x = x;//多层函数嵌套的时候，内部函数this指向window
            }
            //内部嵌套函数
            function moveToY() {
                this.y = y;
            }
            moveToX();
            moveToY();
        }
    };
    point.moveTo(2,2);//0 0
    console.log(point);

// Part2 方法中函数嵌套 this缺陷 解决办法
// 解决方案一：软绑定
    var point = {
        x:0,
        y:0,
        moveTo:function (x,y) {
            var that = this;//关键的一行，软绑定
            //内部嵌套函数
            function moveToX() {
                that.x = x;//this改为that
            }
            //内部嵌套函数
            function moveToY() {
                that.y = y;//this绑定到了哪里？
            }
            moveToX();
            moveToY();
        }
    };
    point.moveTo(2,2);
    console.log(point);//2 2
    console.log(window.x,window.y);//2 2

//解决方案二：通过call和apply来解决
    var point = {
        x:0,
        y:0,
        moveTo:function (x,y) {
            function moveToX() {
                this.x = x;//this绑定到了哪里？
            }
            function moveToY() {
                this.y = y;//this绑定到了哪里？
            }
            moveToX.call(this,x);//->this.moveToX()->point.MoveToX()
            moveToY.call(this,y);
        }
    };
    point.moveTo(2,2);
    console.log(point);

//解决方案三：通过bind来解决
//bind()和call()不同的是它会新生成一个函数，其中的this指向后面括号里指明的point
    var point = {
        x:0,y:0,
        moveTo:function (x,y) {
            function moveToX() {
                this.x = x;//this绑定到了哪里？
            }
            function moveToY() {
                this.y = y;//this绑定到了哪里？
            }
            moveToX.bind(point)();
            moveToY.bind(point)();
        }
    };
    point.moveTo(2,2);
    console.log(point);