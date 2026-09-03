function palindromeNumber(number){
    let stringNum = number.toString();
    reversed = stringNum.split("").reverse().join("");
    if (reversed == number){
        console.log(true);
    }else{
        console.log(false);
    }
}

palindromeNumber(121);