// function fibonacciIterative(n) {
//     let fib = [0, 1];

//     for (let i = 0; i < n; i++) {
//         fib
//     }
// };
// console.log(fibonacciIterative(3));

function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    };

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}
console.log(fibonacciRecursive(3));