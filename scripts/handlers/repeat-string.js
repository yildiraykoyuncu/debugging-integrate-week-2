// fix the bugs

console.log('--- loading: repeat string');

function repeatStringHandler() {
  'use strict';
  debugger;

  // read inputs from user
  const stringToRepeat = alert('enter a string to repeat');

  // before moving on ... type check!
  if (typeof stringToRepeat !== 'String') { throw new TypeError(); }

  // perform core logic
  let repeatedString;
  for (let i = 1; i < range; i++) {
    repeatedString += repeatedString;
  }

  // alert result for the user
  alert(stringToRepeat);

  // log action for the developer
  console.log('\n--- action: repeat string ---');
  console.log('range:', typeof range, '\n', range);
  console.log('stringToRepeat:', typeof stringToRepeat, '\n', stringToRepeat);
  console.log('repeatedString:', typeof repeatedString, '\n', repeatedString);

}
