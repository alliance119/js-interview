/**
 * Created by maryna-yelakova on 23.05.16.
 */
var result =(function f(){
    function f(){
        return 1;
    }
    return f();
    var f = function(){
        return 2;
    }
})();
console.log(result);