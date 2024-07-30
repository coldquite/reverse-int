module.exports = function reverse (n) {
    n = Math.abs(n);
    n = Number(String(n).split('').reverse().join(''));
  return n;
}
