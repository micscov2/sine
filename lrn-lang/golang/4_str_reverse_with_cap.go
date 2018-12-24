package main

import (
    "fmt"
)

func main() {
    x := "dlrow olleh"
    run_arr := []rune(x)
    cp_run_arr := []rune(x)
    fst := true
    sz := len(run_arr)
    var indx int
 
    for i, _ := range run_arr {
        indx = sz - 1 - i
        if string(run_arr[indx]) != " " {
            if fst {
                cp_run_arr[i] = run_arr[indx] - 32
            } else {
                cp_run_arr[i] = run_arr[indx]
            }
            fst = false
        } else {
            fst = true
            cp_run_arr[i] = run_arr[indx]  
        }
    }
    fmt.Println(string(cp_run_arr))
}
