/* Maximum and minimum of an array using minimum number of comparisons: 
Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
              Maximum element is: 9

Input: arr[] = {22, 14, 8, 17, 35, 3}
Output:  Minimum element is: 3
              Maximum element is: 35 */
    
              
/* Given an array of size N. The task is to find the maximum and the
 minimum element of the array using the minimum number of comparisons. */

    /* Way 1 : write minFunction and maxFunction with min initial value as INT_MAX and max initial value as INT_MIN
    Iterate through the array, and if an element is larger/smaller than the current max/min, update max/min to that element.
    Return the final value of maxi/min */
    
    // User function Template for Java
   // User function Template for Java


      class Pair<K, V> {
         private final K key;
         private final V value;

         public Pair(K key, V value) {
            this.key = key;
            this.value = value;
         }

         public K getKey() {
            return key;
         }

         public V getValue() {
            return value;
         }
      }

// Java users need to return result in Pair class
// For Example -> return new Pair(minimum,maximum)


class Solution {
   public Pair<Long, Long> getMinMax(int[] arr) {
       // Code Here
       //way1 
       
       // Arrays.sort(arr);
       // return new Pair(arr[0], arr[arr.length-1]);
       
       //way2 
       int letMin = Integer.MAX_VALUE;
       for(int i=0;i<arr.length;i++){
           if(arr[i]<letMin)
               letMin = arr[i];
       }
       
        int letMax = Integer.MIN_VALUE;
       for(int i=0;i<arr.length;i++){
           if(arr[i]>letMax)
               letMax = arr[i];
       }
       
       return new Pair(letMin, letMax);
   }
}




    /* Way 2: sort the array first, using any inbuilt sort function or write a new function to sort
    and then the first element from the sorted array will be the min value and its last element would be the
    max value */




    /* Way 3: using Linear search , Initialize values of min and max as minimum and maximum of the first
    two elements respectively. Starting from 3rd, compare each element with max and min, and change
    max and min accordingly (i.e., if the element is smaller than min then change min, else if the
    element is greater than max then change max, else ignore the element) */




    /* Way 4: Tournament Method, The idea is to divide the array into two parts and compare the
    maximums and minimums of the two parts to get the maximum and the minimum of the whole array. */



    

    /* Way 5: by comparing in pairs: The idea is that when n is odd then initialize min and max as
    the first element. If n is even then initialize min and max as minimum and maximum of the first 
    two elements respectively. For the rest of the elements, pick them in pairs and compare their 
    maximum and minimum with max and min respectively. */