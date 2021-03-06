"use strict";
function formatString(string, maxLength = 40) {
  const arrey = string.split("");
  if (arrey.length > maxLength) {
    return arrey.slice(0, maxLength).join("") + "...";
  } else {
    return arrey.join("");
  }
}

// console.log(formatString);
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'
