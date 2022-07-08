let numberOne : number = 5;
const numberTwo : number = 100;
numberOne = 7;

const additionResult : number = numberOne + numberTwo;
console.log(`${numberOne} plus ${numberTwo} is... ${additionResult}`);

const arrOne : number [] = [1, 2, 3];
const arrTwo : number[] = [4, 5, 6];
const joinedArr : number[] = arrOne.concat(arrTwo)
console.log(`Array addition: ${arrOne} + ${arrTwo} is... ${joinedArr}`);

const rectangle = { width: 4, height: 10 };
const area = rectangle.width * rectangle.height; // an easy typo to make!
console.log(
  `Rectangle area: ${rectangle.width} x ${rectangle.height} is... ${area}`
);

// Salman was here