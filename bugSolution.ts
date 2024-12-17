function greeter(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(", ");
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane Doe", "John Smith"];

console.log(greeter(user)); // Correct! Also handles single strings correctly
console.log(greeter("Jane Doe")); // Correct!