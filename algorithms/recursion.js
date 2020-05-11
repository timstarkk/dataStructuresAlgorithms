// function fibonacci(n) {
//     let fib = [];
//     for (let i = 0; i <= n; i++) {
//         if (i <= 1) {
//             fib.push(i);
//         } else {
//             fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//         }
//     }
//     return fib[fib.length - 1];
// };

// console.log(fibonacci(6));

function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(35));
