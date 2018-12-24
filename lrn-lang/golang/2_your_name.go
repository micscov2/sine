package main

import (
    "os"
    "bufio"
    "fmt" // Module for printing strings, enhancement of go's builtin println
)

func main() {
    reader := bufio.NewReader(os.Stdin)
    fmt.Print("Enter text: ")
    usrInpt, _ := reader.ReadString('\n')
    fmt.Println(usrInpt) // Methods with upper case are exposed to outer modules 
}
