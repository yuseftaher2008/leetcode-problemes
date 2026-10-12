function selectionSort (list:number[]){
    for (let i = 0; i< list.length -1; i++){
        let minIndex = i


        for (let j = i+1; j < list.length; j++){
            if (list[j] < list[minIndex]){
                minIndex = j;
            }

        }
        // swap the elements 
        let temp = list[i]
        list[i] = list[minIndex]
        list[minIndex] = temp
    }
    return list
}
console.log(selectionSort([7,3,9,15,22]));
