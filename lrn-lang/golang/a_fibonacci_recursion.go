package main

import (
    "fmt"
)

func FibonacciRecurse(num int) (int) {
    if num == 0 || num == 1 {
        return 0
    }

    if num == 2 {
        return 1
    }
    
    return FibonacciRecurse(num - 1) + FibonacciRecurse(num - 2)
}

func Fibonacci(num int) {
    fmt.Printf("Fib(%d) = %d\n", num, FibonacciRecurse(num))
}

func main() {
    Fibonacci(7)
    Fibonacci(1)
    Fibonacci(2)
    Fibonacci(3)
    Fibonacci(5)
}
