/* 
This solution focuses on the memory complexity rather than the time complexity.
Intuition
To select a random node in a linked list we have to generate a random nubmer which represents the node to be selected (It has to be greater than or equal zero and less than the list length). Hence we need to get the list length when an object is created, So we call countListLength(). This function iterates through the list and count its length. In the getRandom() we generate a new random index and iterate through the list till we find and return it.

Approach
Initialize the head of the linked list
Calling the countListLength() to count list length
Calling srand() to Set a different starting point using time(0)
Generating every time getRandom() is called a new index between [0, length)
Iterating through the list to reach the desirde node which matches the generated index to return its value

Note: In the C++ solution I used the rand() and the srand(), The reason I called srand() in the constructor is that it sets the starting point for producing a series of random integers. If srand() is not called, the rand() seed is set as if srand(1) were called at the program start. This will lead to the rand() producing the same sequence of integers every time it is called. So I have called the srand() in the constructor and pass it the seed value by calling time(0) as it returns a time_t value which varies every time. For further reading check this article.

Complexity
Time complexity: $$O(n * m)$$
Where the n is length of the linked list and m is the number of times of calling getRandom().

Space complexity: $$O(1)$$
*/
class Solution {
    length;
    head;

    constructor(h) {
        // Asigning the head node to the head attribute
        this.head = h;
        // Calling the countListLength function to assign the length of the list to the length attribute
        this.countListLength();
    }

    // A function to iterate through the list and count its length
    countListLength() {
        this.length = 0;
        let node = this.head;

        // Keep increasing the length attribute until reaching a NULL node
        while (node !== null) {
            node = node.next;
            this.length++;
        }
    }

    getRandom() {
      // Generating random number where (0 <= indx < length)
        let indx = Math.floor(Math.random() * this.length);

        let node = this.head;

// Iterating through the list to reach the desirde node to return its value
        while (indx-- && node)
            node = node?.next;

        return node ? node.val : Infinity;
    }
}
