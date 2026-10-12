function binarySearch (value:number,list:number[]){

    let l:number = 0;
    let h:number = list.length -1;
    while(l <= h){
        let m:number = Math.floor((l+h) / 2)
        if (value === list[m])
        {
            return true;
        }else if(value < list[m]){
            h = m -1
        }else{
            l = m +1
        }
       
    }

    return false 
}


console.log(binarySearch(10 , [5,10,15,20,25,30,35,40]));
