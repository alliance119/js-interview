/**
 * Created by maryna-yelakova on 21.05.16.
 */
function getChars(strArray){
    var resultArray = [];
    for (var i =0; i<strArray.length;i++){
        resultArray[i] = strArray[i][i];
    }
    return resultArray.join("");
}
console.log(getChars(["JavaScript","is cool", "123"]));