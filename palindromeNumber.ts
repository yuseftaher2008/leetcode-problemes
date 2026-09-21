function palindromeNumber(number: number): void {
    const stringNum: string = number.toString();
    const reversed: string = stringNum.split("").reverse().join("");
    if (reversed === number.toString()){
        console.log(true);
    }else{
        console.log(false);
    }
}

palindromeNumber(121);
