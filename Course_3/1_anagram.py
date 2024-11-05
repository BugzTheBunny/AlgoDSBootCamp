from collections import Counter


# Solution A - O(n)
# T(n) = O(n) + O(n) + O(n) = O(n)
# S(n) = O(n) + O(n)
def are_anagrams(string1: str, string2: str) -> bool:
    # Checking if the two strings are the same length
    if len(string1) != len(string2):
        return False
    word1_dict = {}  # O(n)
    word2_dict = {}  # O(n)
    # Adding all characters from the first string to the word dict - O(1)
    for char in string1:
        if char in word1_dict:
            word1_dict[char] += 1
        else:
            word1_dict[char] = 1
    # Adding all characters from the second string to the second word dict - O(1)
    for char in string2:
        if char in word2_dict:
            word2_dict[char] += 1
        else:
            word2_dict[char] = 1
    # Verifying that the dicts are the same - O(1)
    for key in word1_dict:
        if key not in word2_dict or word1_dict[key] != word2_dict[key]:
            return False

    # If everything is kosher, we return True, as the words are an anagram.
    return True


# Solution B - O(n)
def are_anagrams_builtin(string1: str, string2: str) -> bool:
    if len(string1) != len(string2):
        return False
    return Counter(string1) == Counter(string2) # O(n) + O(n)


# Solution C - O(n log n)
def are_anagrams_sort(string1: str, string2: str) -> bool:
    if len(string1) != len(string2):
        return False

    return sorted(string1) == sorted(string2)  # O(n log n) + O(n log n)
