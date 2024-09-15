# Sorting Algorithms

This section icludes different sorting algorithms examples.

## Bubble Sort - [bubbleSort.js](./HandsOn/bubbleSort.js)
`How It Works:`


    Imagine you have a list of numbers lined up.
    You start by looking at the first two numbers in the list.
    Compare Adjacent Numbers:

    Compare the first number with the second number.
    If they are in the wrong order (for example, the first number is bigger than the second when sorting in ascending order), you swap them.
    If they are in the correct order, you leave them as they are.
    Move to the Next Pair:

    Move one position forward and compare the second and third numbers.
    Again, swap them if they are in the wrong order.
    Repeat Until the End:

    Continue this process of comparing and swapping adjacent numbers until you reach the end of the list.
    After the first pass, the largest number "bubbles up" to the end of the list.
    Multiple Passes:

    Start again from the beginning for another pass through the list.
    This time, you don't need to compare the last number because it's already in its correct position.
    With each pass, you have to check one less number at the end.
    Keep Going Until Sorted:

    Repeat these passes through the list until no more swaps are needed.
    When you go through a whole pass without any swaps, it means the list is fully sorted.

    -- Summary:

    Bubble sort repeatedly steps through a list, compares adjacent items, and swaps them if they are in the wrong order. This process continues until the list is sorted, with larger elements moving towards the end with each     pass.
    ----

## Selection Sort [selectionSort.js](./HandsOn/selectionSort.js)
`How it works:`


    Start with the First Element:

    Begin at the first position in the list.
    Assume the first element is the smallest (or largest, if sorting in descending order).
    Find the Minimum (or Maximum) in the Remaining List:

    Look through the rest of the list to find the smallest (or largest) element.
    Compare each element with the current minimum (or maximum).
    Swap if Necessary:

    If you find an element smaller (or larger) than your current minimum (or maximum), update your minimum (or maximum) to this new element.
    After finishing the search, swap the smallest (or largest) found element with the element at the starting position.
    Move to the Next Position:

    Move to the next position in the list.
    Repeat the process for the remaining unsorted portion of the list.
    Repeat Until Sorted:

    Continue these steps until you have gone through the entire list.
    With each pass, the next smallest (or largest) element is placed in its correct position.

## Insertion Sort [InsertionSort.js](./HandsOn/insertionSort.js)

`How It Works:`

    Start with the First Element:

    Consider the first element of the list as a sorted sublist of one item.
    Pick the Next Element:

    Take the next element from the unsorted portion of the list.
    Find the Correct Position:

    Compare this element with the elements in the sorted sublist, moving from right to left.
    Shift each element in the sorted sublist that is greater than the current element one position to the right.
    Insert the Element:

    Place the current element into the position where all elements to its left are smaller (or equal), and all elements to its right are larger.
    Repeat:

    Continue this process for each element in the unsorted portion until the entire list is sorted.

## Merge Sort [mergeSort.js](./HandsOn/mergeSort.js)

`How It Works:`

    Divide the List:

    Split the list into two roughly equal halves.
    Continue splitting each half recursively until each sublist contains only one element or is empty.
    Conquer (Sort) the Sublists:

    Since a list with one element is already sorted, you start merging the sublists.
    Merge the Sublists:

    Compare the elements of the sublists and merge them into a new sorted list.
    Repeat this process of merging until all sublists are merged back into a single sorted list.

## Quick Sort [quickSort.js](./HandsOn/quickSort.js)

`How It Works:`

    Choose a Pivot Element:

    Select an element from the list to act as the "pivot."
    Common choices for the pivot include the first element, the last element, or a random element.
    Partition the List:

    Rearrange the list so that:
    All elements less than the pivot come before it.
    All elements greater than the pivot come after it.
    The pivot is now in its correct sorted position.
    Recursively Apply the Above Steps:

    Apply the same logic to the sublist of elements less than the pivot.
    Apply the same logic to the sublist of elements greater than the pivot.
    Continue this process until the entire list is sorted.
