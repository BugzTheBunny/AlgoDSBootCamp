from typing import List


def first_and_last(array: List, target: int) -> List:  # O(n)
    start, end = -1, -1  # O(1)
    for i in range(len(array)):  # O(n)
        if array[i] == target and start == -1:
            start = i
            end = i
        elif array[i] == target:
            end = i
    return [start, end]


def find_start(array: List, target: int) -> int:
    if array[0] == target:
        return 0

    left, right = 0, len(array) - 1
    while left <= right:
        mid = (left + right)


print(first_and_last([1, 5, 5, 9, 5, 6, 5, 1], 5))
