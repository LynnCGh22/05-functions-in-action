function greetUser(name) {
  return `Welcome back, ${name}!`;
}
const input = document.getElementById("username");
const button = document.getElementById("greetBtn");
const greetingDisplay = document.getElementById("greeting");

button.addEventListener("click", function() {
  const name = input.value.trim();

  const message = greetUser(name); // 👈 Reuse function

  greetingDisplay.textContent = message;

  input.value = ""; // Optional: clear input
});

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    button.click();
  }
});

console.log(greetUser("Alice"));
console.log(greetUser("Bob"));