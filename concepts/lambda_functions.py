# This script is used to for demonstrating these three programs in python
# 1. Create a function that returns a lambda
# 2. Usage of filter, map, reduce 
# 3. Prime number computation using 'Sieve of Eratosthenes'
import math

# Global variables, never use them
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9]
nlst = range(2, 100)

def func():
    return lambda x: x + 2


if __name__ == '__main__':
    f = func()
    print(f(1))
    print(f(2))

    print("List = " + str(lst))

    # Prints all even numbers
    print("Even numbers = " + str(filter(lambda x: x % 2 == 0, lst)))

    # Increases all numbers by 2
    print("Numbers increased by 2 = " + str(map(lambda x: x + 2, lst)))

    # Sums up all numbers in the list
    print("Sum of all numbers in lst = " + str(reduce(lambda x, y: x + y, lst)))
    
    # Computing prime numbers using Sieve Eratosthenes
    check_upto = int(math.sqrt(len(nlst))) + 1
    for i in range(2, check_upto):
        nlst = filter(lambda x: x == i or x % i != 0, nlst)

    print("Prime numbers from 1 to 99 = " + str(nlst))


