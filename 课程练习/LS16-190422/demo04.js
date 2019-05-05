/**
 * Created by wangluyu on 2019/4/22.
 */
 /** 间接调用中的this的指向——apply()*/
    var animal={weight:'',name:'animal'};
    var dog={height:'30cm',name:"lily"};

    animal.breathe=function(){
        console.log(this.name+' can breathe');
    }

    animal.breathe();
    animal.breathe.apply(dog);
