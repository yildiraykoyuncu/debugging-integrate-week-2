// write the logic

console.log('--- loading: evens or odds');

function evensOrOddsHandler() {
  'use strict';
  debugger;

  // read user input
  const displayEvens = confirm('would you like to see even numbers?');

  // perform core logic
  /* create a comma-separated list if all the evens or odds in the range
    if range is 5 and the user asks for evens:
      "2, 4, "
    if range is 5 and the user asks for odds:
      "1, 3, 5, "
    if range is 8 and the user asks for evens:
      "2, 4, 6, 8, "
    ...
  */
  let listedNumbers = '';
  for (_; _; _) {

  }

  // alert result for the user
  alert(listedNumbers);

  // log action for the developer
  console.log('\n--- action: sum numbers in range ---');
  console.log('displayEvens:', typeof displayEvens, '\n', displayEvens);
  console.log('range:', typeof range, '\n', range);
  console.log('listedNumbers:', typeof listedNumbers, '\n', listedNumbers);

}
