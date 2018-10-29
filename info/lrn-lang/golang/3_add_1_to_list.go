package main

import (
    "fmt"
)

func main() {
    arr := []int{1, 2, 4, 3, 5}
    
    for indx, _ := range arr {
        arr[indx] += 1
    }

    for _, val := range arr {
        fmt.Print(val, " ")
    }
    fmt.Println("")
}
