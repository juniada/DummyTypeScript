// Function to check if a number is prime
function isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
  
    if (n % 2 === 0 || n % 3 === 0) return false;
  
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  // Dummy test cases
  const numbersToTest = [1, 2, 3, 4, 5, 13, 16, 19, 20, 97, 100];
  
  numbersToTest.forEach((num) => {
    console.log(`Is ${num} a prime number? ${isPrime(num)}`);
  });