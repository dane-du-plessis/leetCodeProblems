/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsetsWithDup = function(nums) {
    nums.sort()     // keep duplicates next to each other. 
    let subset = []  // keeps track of the next permutation
    let answer = [] // array of subsets without duplicate subsets
    let index = 0   // index of element to in/ex-clude

    backtrackingSearch(nums, subset, index, answer)

    return answer
};

var backtrackingSearch = function(nums, subset, index, answer) {
    // add the stack to the array of answers
    answer.push(subset.slice())

    for(let i = index; i < nums.length; i++){
        if(i > index && nums[i] === nums[i-1]) continue

        // include element nums at index i in subset
        subset.push(nums[i])

        //solve with that selection
        backtrackingSearch(nums, subset, i+1, answer)

        // exclude it
        subset.pop()
    }
}

console.log(subsetsWithDup([1,2,2]))

/*
////////////////////////////////////////////////////////////////
Backgracking pattern
////////////////////////////////////////////////////////////////

bool solve(configuration) {
    if (no more choices) 
        return configuration === goal state
    
    for (all available configuration c) {
        try c
        if (solve(configuration c)) return true
        unmake c
    }

    return false
}

////////////////////////////////////////////////////////////////
Other solutions
////////////////////////////////////////////////////////////////

class Solution {
    List<List<Integer>> res = new ArrayList<>();
    
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);
        res.add(new ArrayList<>());
        for (int i = 1; i <= nums.length; i++) {
            dfs(0, i, nums, new ArrayList<Integer>());
        }
        return res;
    }
    
    private void dfs(int start, int len, int[] nums, List<Integer> temp) {
        int count = temp.size();
        if (len == count) {
            res.add(new ArrayList<>(temp));
            return;
        }
        if (nums.length - start < len - count)
            return;
        for (int i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1])
                continue;
            temp.add(nums[i]);
            dfs(i+1, len, nums, temp);
            temp.remove(count);
        }
    }
}

*/