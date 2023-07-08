function primaSegiEmpat(wide: number, high: number, start: number): string {
  let currentNumber = start;
  let primesSum = 0;
  let result = "";

  for (let i = 0; i < high; i++) {
    let row = "";

    for (let j = 0; j < wide; j++) {
      while (!isPrime(currentNumber)) {
        currentNumber++;
      }

      row += currentNumber + " ";
      primesSum += currentNumber;
      currentNumber++;
    }

    result += row.trim() + "\n";
  }

  return result.trim() + "\n" + primesSum;
}

function isPrime(number: number): boolean {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(primaSegiEmpat(2, 3, 13));
/*
    17 19
    23 29
    31 37
    156
    */

console.log(primaSegiEmpat(5, 2, 1));
/*
    2  3  5  7 11
    13 17 19 23 29
    129
    */
