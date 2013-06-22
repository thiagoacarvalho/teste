function is_prime(number) {
  if (number == 2) return true;

  sq = Math.ceil(Math.sqrt(number));
  for (i = 2; i <= sq; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

var number = 2;

Array Primes = new Array();

while (Primes.length < 100) {
  if (is_prime(number)) {
     Primes.push(number);
     console.log(number);
  }
  number++;
}
