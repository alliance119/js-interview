/**
 * Created by maryna-yelakova on 23.05.16.
 */
function multiplier (x){
    return function (arr){
        for (var i =0; i<arr.length;i++){
            arr[i]=arr[i]*x;
        }
        return arr;
    };
}
var multiplierBy5 = multiplier(5);
console.log(multiplierBy5([3,6,7,9,0]));
