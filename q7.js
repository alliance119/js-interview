/**
 * Created by maryna-yelakova on 21.05.16.
 */
function char_freq(someStr){
    var charFreqResult={};
    for (var i=0;i<someStr.length;i++){
        if (charFreqResult.hasOwnProperty(someStr[i])){
            charFreqResult[someStr[i]]++;

        }else{
            charFreqResult[someStr[i]] = 1;
        }
    }
    return charFreqResult;
}
console.log (char_freq("ababagalamaga"));

function char_freqV2(someStrV2){

    var result ={};
    for(var j=0;j<someStrV2.length;j++){
        if(!result.hasOwnProperty[someStrV2[j]]){
            result[someStrV2[j]] = someStrV2.split(someStrV2[j]).length -1;
        }
    }

    return result;
}
console.log(char_freqV2("ababagalamaga"));