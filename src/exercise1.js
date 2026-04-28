function calculateAverage(numbers) {
  if(numbers.length===0) return 0
  const sum = numbers.reduce((acc, curr)=>acc+curr, 0)
  return sum/numbers.length
}

function greet(name) {
  return name? `Hello ${name}`: 'Hello'
}

function reverseString(str) {
  return str.split('').reverse().join('')
}

function findEvenNumbers(numbers) {
  return numbers.filter(num=>num%2===0);
}

function calculateFactorial(n) {
  if (n === 0 || n === 1) return 1
  return n * calculateFactorial(n-1)
}

function maxNumber(a, b, c) {
    return Math.max(a,b,c)
}
