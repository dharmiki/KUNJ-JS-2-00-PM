let n = 1;

while (n <= 50) {
  let output = "";

  if (n % 3 === 0) output += "Fizz";
  if (n % 5 === 0) output += "Buzz";
  if (output === "") output = n;

  console.log(output);
  n++;
}
