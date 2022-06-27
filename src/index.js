module.exports = function reverse (n) {
     n = Math.abs(n);
    // n = n.toString();
    // if(n.charAt(0) == '-'){n.substring(1)}
  return n.toString().split('').reverse().join('')
}
