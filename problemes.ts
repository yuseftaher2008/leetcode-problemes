/*Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
*/

function smallingMissingNumber(array: number[]): number {
     
    const sortedArray: number[] = array.sort((a: number, b: number) => a-b)
    console.log(sortedArray)
    const positveArray: number[] = sortedArray.filter((num: number) => num >= 0)
    
    let expectedValue: number = 1
    if (!(positveArray[0] === 1)){
        console.log(1)
        return 1
    }
    for (let i: number = 0; i<positveArray.length;i++){
        if (expectedValue === positveArray[i] ){
            
            expectedValue ++

        }else if (expectedValue < positveArray[1]){
            break
        }
        

    }
    console.log(expectedValue)
    return expectedValue
}

// link to probleme on leetcode: https://leetcode.com/problems/first-missing-positive/description/
