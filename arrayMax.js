var mark=[76, 34, 46, 75, 23, 46];
var max = mark[0];
for (var i=0; i<mark.length; i++){
    var element= mark[i];
    if(element>max){
        max=element;
    }
}
console.log(max);