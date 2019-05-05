/**
 * Created by wangluyu on 2019/4/15
 */
/**
 * 定义一个car对象，有属性：height、width、weight
 * 再定义一个smaller对象，自身具有color,seatNum属性
 * 让smaller继承car的所有属性，使用create和构造函数分别实现
 */
    //create方法：

    var car={
        height:150,
        width:200,
        weight:2000
    };
    var smaller=Object.create(car);
    smaller.color='black';
    smaller.seatNum=25;
    console.log(smaller);

    //构造函数方法：

    var car={
        height:150,
        width:200,
        weight:2000
    };
    function CreateSmaller(color,seatNum){
        this.color=color;
        this.seatNum=seatNum;
    }
    CreateSmaller.prototype=car;

    var smallerCar=new CreateSmaller("red",25);
    console.log(smallerCar);
    console.log(smallerCar.__ptoro__==CreateSmaller.prototype);
    console.log(smallerCar.color,smallerCar.seatNum);
    console.log(smallerCar.weight,smallerCar.width,smallerCar.height);
