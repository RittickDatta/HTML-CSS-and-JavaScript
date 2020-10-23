const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const remainer = (a, b) => {
  return a % b;
};

const addHelper = (arr) => {
  let sum = 0;
  for(let elem of arr) {
    sum += elem
  }
  return sum;
}

const addAdvanced = (...numbers) => {
  let sum = 0;
  for(let elem of numbers) {
    if(Array.isArray(elem)){
      for(let el of elem) {
        if(Array.isArray(el)) {
          sum += addHelper(el)
        } else {
          sum += el;
        }
      }
    }
    sum += elem;
  }
  return sum;
}

console.log(addAdvanced(1, [2, 3], 4));


console.log(add(1, 2));
console.log(subtract(3, 2));
console.log(multiply(4, 5));
console.log(divide(20, 4));
console.log(remainer(13, 2));
