/* 
1768. Merge Strings Alternately
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
*/

// Q: can words be empty strings?

var mergeAlternately = function(word1, word2) {
    const l1 = word1.length;
    const l2 = word2.length;
    if (l1 == 0 || l2 == 0) return word1 + word2; // if any of the word is empty, then just return the other
    // initialize 2 pointers
    let i = 0;
    let j = 0;
    let result = '';
    while (i < l1 && j < l2) {
        result += word1[i] + word2[j];
        i++;
        j++;
    }
    if (l1 < l2) {
        result +=  word2.substring(l2 - l1)
    }
    if (l1 > l2) {
        result +=  word1.substring(l1 - l2)
    }
    return result;
}

//Runtime 42ms Beats 97.70%
