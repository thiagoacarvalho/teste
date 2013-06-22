function is_prime(number) {
  if (number == 2) return true;

  sq = Math.ceil(Math.sqrt(number));
  for (i = 2; i <= sq; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

var number = 2;

var primes = new Array();

while (primes.length < 100) {
  if (is_prime(number)) {
     primes.push(number);
  }
  number++;
}

var fs = require('fs');
var outfile = "primes.txt";


fs.writeFileSync(outfile, primes);
