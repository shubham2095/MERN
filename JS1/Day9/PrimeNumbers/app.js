var n = 1000
  var i = 2
  var isPrime = true

  // while(i < n)
  // while(i < n / 2)
  while (i * i < n) {
    if (n % i == 0) {
      isPrime = false
    }
    i++
  } 
  if(isPrime) {
    console.log(`${n} is a prime number`)
  }
  else {
    console.log(`${n} is not a prime number`)
  }