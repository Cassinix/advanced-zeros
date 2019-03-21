module.exports = function getZerosCount(number, base) {

 const maxPrimeFactorization = (num) => {
  let result = 1;
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
          result = i;
        while (num % i === 0) {
          num = num / i;
        }
      }
    }
    return result;
  }

  const primeFactorization = (num) => {
    let result = {};
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        if (result[i] === undefined) {
          result[i] = 1;
          num = num / i;
        }
        while (num % i === 0) {
          result[i]++;
          num = num / i;
        }
      }
    }
    return result;
  }

  const devisior = maxPrimeFactorization(base);
  const acc = primeFactorization(base)[devisior];
  
  let result = 0;
  for (let i = 1; devisior**i < number; i++) {
    result +=  (Math.floor(number / devisior**i)) / acc;
  }
 console.log('base = ', base);
 console.log('primeFactorization = ', primeFactorization(base));
 console.log('maxPrimeFactorization = ', devisior, acc);
 console.log('result = ', result);
  return Math.floor(result);
}
