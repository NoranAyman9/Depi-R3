// problem (13): Basic Mathematical Operations

function Operations(operation, value1, value2) {
    switch (operation) {
        case '+':
        return value1 + value2;
        case '-':
        return value1 - value2;
        case '*':
        return value1 * value2;
        case '/':
        return value1 / value2;
        default:
            console.log("Invalid operation");
    }
}
console.log(Operations('+', 1, 7)); // 8
console.log(Operations('-', 9, 6)); // 3
console.log(Operations('*', 5, 5)); // 25
console.log(Operations('/', 49, 7)); // 7
