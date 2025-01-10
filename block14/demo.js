// Fruit Salad
// Modify the array using various array methods:
// .pop(), .push(), .unshift(), .shift()

// As you modify the array, check the array.length to see how the array changes.

const fruits = ["lemon", "strawberry", "grape", "orange", "lime"];

// 👉 STEP 1: Remove lime from the end of fruits array.
fruits.pop();
console.log(fruits);

// 👉 STEP 2: Remove orange from the end of fruits array.

// 👉 STEP 3:  Add lime to the end of the fruits array.

// 👉 STEP 4: Add banana and dragonfruit to the end of the fruits array.

// 👉 STEP 5: Remove the first fruit in the fruits array.

// 👉 STEP 6: Add apple to the beginning of the fruits array.

// 👉 STEP 7: Add peach and watermelon to the beginning of the fruits array.

/**
 * 👉 STEP 8: Create a function that
 * takes an index and prints the even
 * fruits using a for loop starting
 * from that index
 * 
 * 
 *
 * @param {number} index number of which element to start in the array
 */

const evenFruits = (index) => {

    for (let i = index; i < fruits.length; i++) {
        if (i % 2 === 0) {
            console.log(fruits[i]);
        }
    }

}

console.log("--------------------");

/**
 * 👉 STEP 9: Create a function to print the odd fruits using a while loop
 *
 * @param {number} idx number of which element to start in the array
 */
function oddFruits(idx) {
    while (idx < fruits.length) {
        if (idx % 2 !== 0) {
            console.log(fruits[idx]);
        }
        idx++;
    }
}

evenFruits(0);