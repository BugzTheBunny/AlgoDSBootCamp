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

## Selection Sort [selectionSort](./HandsOn/selectionSort.js)
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
