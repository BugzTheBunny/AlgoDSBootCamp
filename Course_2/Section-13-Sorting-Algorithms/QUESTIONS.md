# Interview Question.

Here you can see 8 cases of "Which algo would you select", and the answer to that.


### 1 - Sort 10 schools around your house by distance

`Algorithm: Insertion Sort` : [Visualization](https://www.toptal.com/developers/sorting-algorithms/nearly-sorted-initial-order)


Explanation: With only 10 schools to sort, the dataset is small. Insertion Sort is efficient for small datasets due to its simplicity and low overhead. It allows for quick sorting with minimal computational resources.  

### 2 - eBay sorts listings by the current Bid amount

`Algorithm: Merge Sort` : [Visualization](https://www.toptal.com/developers/sorting-algorithms/random-initial-order)

Explanation: eBay handles a large number of listings that need to be sorted efficiently. Merge Sort provides a stable sort with a time complexity of O(n log n), ensuring that items with the same bid amount remain in their original order, which is important for fairness and accuracy in listings.

### 3 - Sport scores on ESPN

`Algorithm: Counting Sort`

Explanation: Sports scores are integer values within a known and limited range. Counting Sort is ideal for such data as it can sort integers efficiently in linear time, making it faster than comparison-based sorts for this specific case.

### 4 - Massive database (can't fit all into memory) needs to sort through past year's user data

`Algorithm: External Merge Sort`

Explanation: When the data exceeds available memory, External Merge Sort is the go-to algorithm. It divides the data into manageable chunks, sorts each chunk in memory, and then merges them, efficiently handling large datasets without requiring all data to be loaded at once.

### 5 - Almost sorted Udemy review data needs to update and add 2 new reviews

`Algorithm: Insertion Sort`

Explanation: Insertion Sort is highly efficient for nearly sorted data and small updates. It can quickly insert the two new reviews into the already almost sorted list with minimal comparisons and shifts, resulting in an overall efficient update process.

### 6 - Temperature Records for the past 50 years in Canada

`Algorithm: Bucket Sort`

Explanation: Temperature records fall within a specific range and can be distributed into buckets representing temperature intervals. Bucket Sort efficiently sorts continuous data by dividing it into these buckets and then sorting each bucket individually, leading to a faster overall sort for this type of data.

### 7 - Large user name database needs to be sorted. Data is very random

`Algorithm: Radix Sort`

Explanation: Radix Sort is effective for sorting large sets of strings (usernames) by processing individual characters or digits. It handles random data efficiently by grouping names based on characters at each position, leading to a linear time complexity relative to the input size and string length.

### 8 - You want to teach sorting for the first time

`Algorithm: Bubble Sort`

Explanation: Bubble Sort is one of the simplest sorting algorithms to understand and visualize. Its straightforward approach makes it ideal for educational purposes, helping beginners grasp the fundamental concepts of sorting through step-by-step iteration and comparison.
