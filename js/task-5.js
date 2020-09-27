function checkForSpam(str) {
  "use strict";
  // Write code under this line
  const array = str.toLowerCase();

  return array.includes("spam") || array.includes("sale") ? true : false;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
