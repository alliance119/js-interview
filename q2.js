/**
 * Created by maryna-yelakova on 21.05.16.
 */
function foo(a,b,c) {
    console.log(arguments.length);
    return a * b * c;
}
var d =  foo(1,5);
console.log(d);

