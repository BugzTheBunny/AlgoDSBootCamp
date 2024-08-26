# Big O Calculation Rules / Tips


## 1. Worst Case.

- Big O cares only about the worst case, meaning, you you have a loop, and you have a breakpoint in it, which makes the loop run **N-5** times and not **N** times, it does not matter, it will still be **O(n)** so we can ignore them while we calculate the **BigO**.

## 2. Remove Constant.

- You need to ignore every constant you can, that is not affected by the elements number, even if inside the function, you get **N/2** or **N*2**, it does not matter, it will still be **O(n)** as the complexity is till determined linearly depeding on the input.

    ```
    function calc(input){
        for (let i = 0; i < input.length / 2; i++) {
            console.log(i)
        }
    }
    ```
## 3. Different terms for inputs.
- You need to take to note different terms for different inputs, different inputs might mean that they are depending on eachother, so for example in the example below, the BigO is Quadtriple time, as each new element, will quadriple the amount of operations needed.
    ```
    function logAllPairsOfArray(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                console.log(array[i], array[j]);
            }
        }
    }
    ```

## 4. Drop Non Dominants.
- You can ignore the non dominate elements in the function, meaning if there is a part of the function that is **N**, and a part that is **N^2**, we don't really care about the **N**, and the runtime complexity is **O(n^2)**.