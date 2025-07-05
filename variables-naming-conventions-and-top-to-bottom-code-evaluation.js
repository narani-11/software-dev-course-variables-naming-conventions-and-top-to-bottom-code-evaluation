/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let customerName = "Alice";
let numberOfItems = 5;
let totalCost = 20;
let itemName = "books";
let storeName = "The Novel";
let purchaseSummary = customerName + " bought " + numberOfItems + "    " + itemName + " for $" + totalCost + " at " + storeName + ".";

console.log(purchaseSummary);

Output: Alice bought 5 books for 20$ at The Novel

Things to reflect on: 

Why is it important to use meaningful variable names?
Meaningful variable names make the code self-explanatory, so immediately understand what each value represents. This prevents confusion and reduces the need for extra comments. It also makes it easier to maintain or debug the code later.

What are common pitfalls to avoid when naming variables?
•	Using vague names like a, b, data, or temp.
•	Using inconsistent styles (e.g., mixing camelCase, snake_case, PascalCase).
•	Making names too long or overly complex.
•	Using misleading names that don’t match the data’s purpose.

How do clear variable names benefit team collaboration?
Clear, consistent names mean everyone can quickly understand and work with the code, even if they didn’t write it. It makes onboarding new developers easier, improves code reviews, and reduces bugs caused by misunderstanding what a variable holds.

