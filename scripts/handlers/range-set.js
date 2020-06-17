console.log('--- loading: set range');

function setRangeHandler() {
  'use strict';
  debugger;

  const input = prompt('enter your desired number of range');
  const newRange = Number(input);

  range = newRange;

  console.log('\n--- action: set range ---');
  console.log('range:', typeof range, '\n', range);

  displayRangeHandler();

}
