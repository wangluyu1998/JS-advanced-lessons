/**
 * Created by wangluyu on 2019/4/22.
 */

/**严格模式和非严格模式下的this指向*/

function thisText(){
    console.log(this==window);
}
thisText();//true 即非严格模式下，this指向window

function thisText(){
    'use strict'
    console.log(this);
}
thisText();//undefined 严格模式下，指向undefined

//因此，可以通过这种this的判断来进行严格模式的检测：

//'use strict'
function isStrictMode(){
    return this==undefined?true:false;
}
isStrictMode();
