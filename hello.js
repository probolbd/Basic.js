var bananaPrice =12;
console.log(bananaPrice)
var khatalPrice =14;
var totalPrice =bananaPrice-khatalPrice;
console.log(totalPrice);
console.log(typeof totalPrice);
var number = 12.5;
var result = Math.ceil(number);
console.log(result);
result = Math.round(number)
console.log(result);
result = Math.floor(number)
console.log(result);
result = Math.abs(number)
console.log(result);
result = Math.random(number)
console.log(result);

var biscutPrice = 10;
if(biscutPrice =10){
    console.log('I will buy buscit')
}
else{
    console.log('I will not buy buscit')
}

var subjectNumber =32;

if( subjectNumber >=80){
    console.log('Grade-A+');
}
else if(subjectNumber <=79 && subjectNumber >=70){
    console.log('Grade-A')
}
else if(subjectNumber <=69 && subjectNumber >=60){
    console.log('Grade-A-')
}
else if(subjectNumber <=59 && subjectNumber >=50){
    console.log('Grade-B')
}
else if(subjectNumber <=49 && subjectNumber >=40){
    console.log('Grade-C')
}
else if(subjectNumber <=39 && subjectNumber >=33){
    console.log('Grade-D')
}
else{
    console.log('Fail');
}