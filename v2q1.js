/**
 * Created by maryna-yelakova on 23.05.16.
 */
var x = 1;
if((function f(){})()){
     x +=typeof f;
}
console.log(x);