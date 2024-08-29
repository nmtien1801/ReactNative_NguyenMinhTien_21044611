// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Print the odd numbers less than 100
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

// 3. Print the multiplication table with 7
for (let i = 1; i <= 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}

// 4. Print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 5. Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(`The sum of numbers from 1 to 10 is ${sum}`);

// 6. Calculate 10!
let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
}
console.log(`10! = ${factorial}`);

// 7. Calculate the sum of even numbers greater than 10 and less than 30
let sumEven = 0;
for (let i = 12; i < 30; i += 2) {
  sumEven += i;
}
console.log(
  `The sum of even numbers greater than 10 and less than 30 is ${sumEven}`
);

// 8. Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(`0°C is equal to ${celsiusToFahrenheit(0)}°F`);

// 9. Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(`32°F is equal to ${fahrenheitToCelsius(32)}°C`);

// 10. Calculate the sum of numbers in an array of numbers
let numbers = [1, 2, 3, 4, 5];
let sumArray = 0;
for (let i = 0; i < numbers.length; i++) {
  sumArray += numbers[i];
}
console.log(`The sum of numbers in the array is ${sumArray}`);

// 11. Calculate the average of the numbers in an array of numbers
let average = sumArray / numbers.length;
console.log(`The average of numbers in the array is ${average}`);

// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
function positiveNumbers(numbers) {
  let positive = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positive.push(numbers[i]);
    }
  }
  return positive;
}
console.log(positiveNumbers([-1, 2, -3, 4, -5]));

// 13. Find the maximum number in an array of numbers
let numbers2 = [10, 5, 8, 3, 12];
let maxNumber = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
  if (numbers2[i] > maxNumber) {
    maxNumber = numbers2[i];
  }
}
console.log(`The maximum number in the array is ${maxNumber}`);

// 14. Print the first 10 Fibonacci numbers without recursion
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib);

// 15. Create a function that will find the nth Fibonacci number using recursion
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10));

// 16. Create a function that will return a Boolean specifying if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));

// 17. Calculate the sum of digits of a positive integer number
function sumDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log(sumDigits(123));

// 18. Print the first 100 prime numbers
let count = 0;
let num = 2;
while (count < 100) {
  if (isPrime(num)) {
    console.log(num);
    count++;
  }
  num++;
}

// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”
function firstPrimeNumbers(p, n) {
  let primes = [];
  let num = n + 1;
  while (primes.length < p) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes;
}
console.log(firstPrimeNumbers(10, 100));

// 20. Rotate an array to the left 1 position
let array = [1, 2, 3, 4, 5];
let first = array.shift();
array.push(first);
console.log(array);

// 21. Rotate an array to the right 1 position
let last = array.pop();
array.unshift(last);
console.log(array);

// 22. Reverse an array
array.reverse();
console.log(array);

// 23. Reverse a string
let string = "hello";
let reversed = "";
for (let i = string.length - 1; i >= 0; i--) {
  reversed += string[i];
}
console.log(reversed);

// 24. Create a function that will merge two arrays and return the result as a new array
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2], [3, 4]));

// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
function uniqueNumbers(arr1, arr2) {
  let unique = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      unique.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      unique.push(arr2[i]);
    }
  }
  return unique;
}
console.log(uniqueNumbers([1, 2, 3], [3, 4, 5]));

// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
function diffArray(arr1, arr2) {
  return arr1.filter((element) => !arr2.includes(element));
}
console.log(diffArray([1, 2, 3], [3, 4, 5]));
