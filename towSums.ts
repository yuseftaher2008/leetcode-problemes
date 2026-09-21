function sumOfTowNums(nums:number[],target:number){
    for (let i = 0 ; i<= nums.length; i++){
        for (let j = i+1 ; j<= nums.length; j++){
            let equalTarget :number = nums[i]+nums[j]
            if (equalTarget == target){
                let output : number[] = []
                output.push(i,j)
                return output
            }
        }
    }
}
