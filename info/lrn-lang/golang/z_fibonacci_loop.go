package main

import (
    "fmt"
)

func Fibonacci(num int) {
    fst := 0
    snd := 1

    if num == 1 {
        fmt.Println("Fib(1) = 0")
        return
    }

    if num == 2 {
        fmt.Println("Fib(2) = 1")
        return
    }

     ctr := 2

    for ctr < num {
        tmp := snd
        snd = snd + fst
        fst = tmp
        ctr += 1
    }

    fmt.Printf("Fib(%d) = %d\n", num, snd)
}

func main() {
    Fibonacci(7)
    Fibonacci(1)
    Fibonacci(2)
    Fibonacci(3)
    Fibonacci(5)
}
