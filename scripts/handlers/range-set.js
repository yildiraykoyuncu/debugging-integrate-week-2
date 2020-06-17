'use strict';
console.log('--- loading: set range');

function setRangeHandler() {
  debugger;
  console.log('\n--- action: set range ---');
  console.log('range (before):', typeof range, '\n', range);

  const input = prompt('enter your desired number of range');
  const newRange = Number(input);
  console.log('newRange:', typeof newRange, '\n', newRange);
  if (Number.isNaN(newRange)) {
    alert('not a valid number');
    return;
  }

  range = newRange;
  console.log('range (after):', typeof range, '\n', range);

  displayRangeHandler();
}
