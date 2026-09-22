function climbStairs(n: number): number {
    
    if (n <= 2) {
        return n;
    }
    let prev:number = 1;
    let current:number = 2;
    for (let i = 3;i <= n;i++){

        let next:number= current+prev ;
        prev = current;
        current=next
    }
    return current;
   

};

climbStairs(3);