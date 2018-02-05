# We'll see 3 examples of decorators
# First example normal basic decorator, then decorator inside decorator
# Then decorator with args

# Decorator is a function which takes a function and returns a decorated function
# Python considers it's functions as first class citizens, which means
# you can pass and return function from function

# Let's see a basic example of decorator
# The decorator takes function as first argument
# Whatever method is defined inside decorator takes
# Argument of method as argument
def signed_by_pzk(func):
    def wrapper(cert):
        return func(cert) + " has been signed by Pzk"
    
    return wrapper

def key_cert(cert):
    return "!- " + cert + " -!"

# Given below is an example of decorator, signed_by_pzk is a decorator
# which is taking key_cert function and decorating it
my_first_dec = signed_by_pzk(key_cert)
print(my_first_dec("Cisco Systems"))


# Python provides syntactic sugar for decorator, we can put @ symbol with
# decorator name and python is recognize it as a decorator
@signed_by_pzk
def key_cert_sync(cert):
    return "!- " + cert + " -!"

print(key_cert_sync("Flipkart Inc."))
 
# Let's see decorator inside a decorator with an example 
def signed_by_pzk_inner(func):
    def outer_wrapper(cert):
        
        def inner_wrapper(cert):
            return func(cert) + " has been signed by Pzk"

        return inner_wrapper(cert) + " and by K"
    
    return outer_wrapper
  
# Let's test above method
@signed_by_pzk_inner
def key_double_cert(cert):
    return "!- " + cert + " -!"

print(key_double_cert("Google Inc"))


# Let's pass some arguments to decorator function
# Passing argument to a decorator is bit complex
# We need to have a function which takes argument 
# and inside that we'll have actual decorator
def decorator_with_args(num):
    print("Arg(s) passed to decorator " + str(num))
    def real_decorator(func):
        def wrapper(cert):
            return func(cert) + " has been signed By Real Pzk"
        return wrapper
    return real_decorator

@decorator_with_args(23)
def cert_sync(cert):
    return "!- " + cert + " -!"

print(cert_sync("InMobi"))
