function calculator(var1, var2, operator) {
    if (operator === "+") {
        return var1 + var2;
    } else if (operator === "-") {
        return var1 - var2;
    } else if (operator === "*") {
        return var1 * var2;
    } else if (operator === "/") {
        return var1 / var2;
    } else {
        return "Invalid operator";
    }
}

// Example usage:
console.log(calculator(10, 5, "+")); // Output: 15
console.log(calculator(10, 5, "-")); // Output: 5