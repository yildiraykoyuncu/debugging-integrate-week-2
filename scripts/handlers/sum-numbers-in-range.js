'use strict';
// fill in the blanks

console.log('--- loading: sum numbers in range');

function sumNumbersInRangeHandler() {
    debugger;

    let range = Number(prompt("enter the range of numbers "));

    console.log('\n--- action: sum numbers in range ---');
    console.log('range:', typeof range, '\n', range);



    // perform core logic
    let sum = 0;
    for (let i = 0; i <= range; i++) {
        sum += i;
    }
    console.log('sum:', typeof sum, '\n', sum);

    // alert result for the user
    alert(sum);
};