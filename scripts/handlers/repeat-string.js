'use strict';
// fix the bugs

console.log('--- loading: repeat string');

function repeatStringHandler() {
    debugger;
    console.log('\n--- action: repeat string ---');

    let range = Number(prompt('How many times you want to repeat?'));

    console.log('range:', typeof range, '\n', range);


    // read inputs from user
    const stringToRepeat = prompt('enter a string to repeat');
    console.log('stringToRepeat:', typeof stringToRepeat, '\n', stringToRepeat);

    if (stringToRepeat === null) {
        return;
    }

    // perform core logic
    let repeatedString = "";
    for (let i = 1; i < range; i++) {
        repeatedString += stringToRepeat;
    }
    console.log('repeatedString:', typeof repeatedString, '\n', repeatedString);

    // alert result for the user
    alert(repeatedString);
}