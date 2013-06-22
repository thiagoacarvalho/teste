function is_prime(number) {
  if (number < 2) return false;
  if (number == 2) return true;

  sq = Math.ceil(Math.sqrt(number));
  for (i = 2; i <= sq; i++) {
    if (number % i == 0) return false;
  }
  return true;
}

var prime = 2;
var prime_counter = 0;

while (true) {
  if (is_prime(prime)) {
    prime_counter++;
    if (prime_counter == 10001) {
      console.log("10001st prime: " + prime);
      break;
    }
  }
  prime++;
}
