class Solution {
    public int[] sortedSquares(int[] A) {
        int firstPositive = -1;
        if(A[0] < 0){
            firstPositive = reverseToZeroth(A);
            printArr(A);
        }
        if(firstPositive > 0) {
            int p0 = 0;
            int p1 = firstPositive;
            while(p0 < firstPositive) {
                System.out.println("Shifting " + A[p0]);
                while(A[p1] > -A[p0]){
                    p0++;
                }
                shiftRight(A, p0, p1);
                A[p0] = temp;
                p0++;
            }
        }
        for(int i = 0; i < A.length; i++){
            A[i]= A[i]*A[i];
        }
        return A;
    }
    private void printArr(int[] A){
        String output = "[";
        for(int i = 0; i < A.length; i++){
            output = output + " " + A[i];
        }
        output = output + "]";
        System.out.println(output);
    }
    private void shiftRight(int[] A, int p0, int p1){
        for(int i = p1; i > p0; i--){
            A[i] = A[i-1];
        }
    }
    private int reverseToZeroth(int[] A) {
        int firstPositive = 0, first = 0, last = -1;
        while(A[firstPositive] <=0){
            firstPositive++;
            last = firstPositive -1;
            if(firstPositive >= A.length){
                firstPositive = -1;
                break;
            }
        }
        if(last < 0){
            return -1;
        }
        while(first < last) {
            int temp = A[first];
            A[first] = A[last];
            A[last] = temp;
            first++;
            last--;
        }
        return firstPositive;
    }
}