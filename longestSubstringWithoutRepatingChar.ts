/*3. Longest Substring Without Repeating Characters
Medium
Topics
premium lock iconCompanies
Hint

Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

Constraints:

    0 <= s.length <= 105
    s consists of English letters, digits, symbols and spaces.

*/

function longestSubstringWithoutRepatingChar(s: string): number {
    
    const unique: Set<string> = new Set();

    let left: number = 0;
    let maxLength: number = 0;

    for (let right: number = 0; right < s.length; right++) {

        // If the current character already exists
        while (unique.has(s[right])) {
            unique.delete(s[left]);
            left++;
        }

        // Add the current character
        unique.add(s[right]);

        // Calculate the current window length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;

}

longestSubstringWithoutRepatingChar("pwwkew")
