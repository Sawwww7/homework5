const reverseString = (str) => {
  let i = 0; 
  let reverString =" ";
  while (i < str.length) {
    reverString = `${str[i]}${reverString}`;
    i = i+1;
  }
  return reverString;
};

console.log(reverseString("Hi, how are you!")); // !uoy era woh ,iH

const isPalindrome = (str) => {  
  let i = 0;
    let stringCheck = '';
  while (i < str.length) {    
    stringCheck = `${str[i]}${stringCheck}`;    
    i = i + 1;
  }  
  if (stringCheck === str) {    
    return `введений рядок ${str} є паліндромом`;
  }   
};

console.log(isPalindrome("!ooleHeloo!"))//введений рядок !ooleHeloo! є паліндромом

const findGCD = (a, b) => {
  let divisorA = [];
  for (x = 1; x <= a; x++) {
    if (a % x === 0) {
      divisorA.push(x);
    }
  }
  let divisorB = [];
  for (y = 1; y <= b; y++) {
    if (b % y == 0) {
      divisorB.push(y);
    }
  }

  identicalElements(divisorA, divisorB);
  function identicalElements(errA, errB) {
    const commonDivisor = [];
    for (let i = 0; i < errA.length; i++) {
      for (let j = 0; j < errB.length; j++) {
        if (errA[i] === errB[j]) {
          commonDivisor.push(errA[i]);
        }
      }
    }
    result = Math.max(...commonDivisor);
  }
  return result;
};

console.log(findGCD(54, 24)); //6


//Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.
//Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.
//Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД.
