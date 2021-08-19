

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, ArrayList<String>> hashMap = new HashMap();
        for(int i = 0; i < strs.length; i++){
            char[] chars = strs[i].toCharArray();
            Arrays.sort(chars);
            String sorted = new String(chars);
            System.out.println(sorted);
            if(hashMap.containsKey(sorted)){
                hashMap.get(sorted).add(strs[i]);
                continue;
            }
            ArrayList<String> newArr = new ArrayList();
            newArr.add(strs[i]);
            hashMap.put(sorted,newArr);
        }
        List<List<String>> result = new ArrayList();
        for(Map.Entry<String, ArrayList<String>> entry : hashMap.entrySet()){
            result.add(entry.getValue());
        }
        return result;
    }
}
