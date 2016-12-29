// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  if (cardNumber.length === 14 && (cardNumber.substring(0,2) === "38" || cardNumber.substring(0,2) === "39")) {
  	return "Diner\'s Club";
  } else if (cardNumber.length === 15 && (cardNumber.substring(0,2) === "34" || cardNumber.substring(0,2) === "37")) {
  	return "American Express";
  } else if (cardNumber.length === 16) {
  	if (cardNumber.substring(0,1) === "4") {
  		return "Visa";
  	} else if (cardNumber.substring(0,1) === "5") {
  		if (cardNumber.substring(0,1) === "1" || cardNumber.substring(0,1) === "2" || cardNumber.substring(0,1) === "3" || cardNumber.substring(0,1) === "4" || cardNumber.substring(0,1) === "5") {
  			return "MasterCard";
  		} else {
  			return "Credit card network not supported";
  		}
  	} else {
  		return "Credit card network not supported";
  	}
  } else if ((cardNumber.length === 13 || cardNumber.length === 19) && cardNumber.substring(0,1) === "4") {
  	return "Visa";
  }
  else {
  	return "Credit card network not supported";
  }
};


