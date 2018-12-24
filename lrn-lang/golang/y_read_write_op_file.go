package main

import (
    "fmt"
    "log"
    "os"
    "io/ioutil"
)

func main() {
    file, err := os.Open("file1.txt")
    if err != nil {
        log.Fatal(err)
    }

    data, err := ioutil.ReadAll(file)
    if err != nil {
        log.Fatal(err)
    }

    fmt.Printf("%s", data)
    for indx, _ := range data {
        if data[indx] != 10 {
            data[indx] += 1
        }
    }
    
    err = ioutil.WriteFile("file1.txt", data, 0666)
}
