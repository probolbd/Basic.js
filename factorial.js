var result= fact(5);
function fact(n){
    if (n==0){
        return 1;
    }
    
    else{
        return n * fact(n-1);
    }
}

console.log(result);