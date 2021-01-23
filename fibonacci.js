// fibonacci holo amon akti ganatik dhara j sonkha hoila agar 2 ta sonkar jok fal
var fibo =[0,1];
for (var i=2; i<=12; i++){
    fibo[i]= fibo[i-1]+ fibo[i-2];
    // console.log(fibo[i], fibo[i-1], fibo[i-2]);
}
console.log(fibo);

var a = 5;
var b = 7;
// console.log('Fefore swat a =', a, 'Before Swap B=', b);

var temp = a;
a =b;
b =temp;
// console.log('After swap a =', a, ' b=', b);

var P =6;
var k = 8;

[ P, k]=[k, P];
// console.log(P, k);

var business = 450;
var minister = 350;
if( business > minister){
    console.log('i am business man');
}
else{
    console.log('I am not business man');
}