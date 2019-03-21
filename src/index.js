module.exports = function getZerosCount(number, base) {
  let result = 0;
  for (let i = 1; (5)**i < number; i++) {
    result +=  Math.floor(number / ((5)**i));
  }
  console.log('result = ', result);
  return result;
}