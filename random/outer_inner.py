# Will confirm that python has only read access from outer
# scope to inner scope

def outer_func():
    OUTER_STR = "I am outer variable"
    outer_var = OUTER_STR

    def inner_func():
        print("Inner function called")
        outer_var = "I am inner variable"

    # Calling inner function
    inner_func()

    # This will fail if value was changed by inner function call
    assert outer_var == OUTER_STR

outer_func()
