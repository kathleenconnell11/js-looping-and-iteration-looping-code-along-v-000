// Code your solutions in this file

function printBadges(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`);
  }

  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5;
}
function tailsNeverFails() {
  let counter = 0;

  while (maybeTrue()) {
    counter++;
  }
  return `You got ${counter} tails in a row!`;
}
