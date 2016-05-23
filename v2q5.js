/**
 * Created by maryna-yelakova on 23.05.16.
 */
function range(start,end){
    var arr =[];
    var j=0;
    if(start<end){
        for (var i=start; i<=end; i++){

            arr[j]=i;
            j++;
        }
    }else{
        for (i=start;i>=end;i--){
            arr[j]=i;
            j++;
        }

    }
    return arr.join(", ");

}
console.log(range(30,20));