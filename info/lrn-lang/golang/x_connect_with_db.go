package main

import (
    "fmt"
    "github.com/go-bongo/bongo"
)

type Person struct {
    bongo.DocumentBase `bson:",inline"`
    FirstName string
    LastName string
    Gender string
}

// Debug this later
//func saveAPerson(FirstName, LastName, Gender string) {
//    fmt.Println(FirstName)
//    myPerson := &Person{
//        FirstName: FirstName,
//        LastName: LastName,
//        Gender: Gender,
//    }
//
//    return myPerson
//}

func main() {
    config := &bongo.Config{
        ConnectionString: "localhost",
        Database: "test",
    }
    
    conn, err := bongo.Connect(config)
   
    if err != nil {
        fmt.Println("Eror while connecting to DB")
        return
    }

    fmt.Println("Connection successful localhost:27017/test mongo")

    myPerson := &Person{
        FirstName: "Parvez",
        LastName: "J",
        Gender: "Male",
    }
    conn.Collection("person").Save(myPerson)
    fmt.Println("Person saved successfully in mongodb")
}
