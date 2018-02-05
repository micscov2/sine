import sys

# This method is used to return the 
# nth fibonacci number
def fibonacci(num):
    num = int(num)

    if num in [0, 1]:
        return 0

    if num == 2:
        return 1

    fst = 0
    snd = 1

    for i in xrange(2, num):
        trd = fst + snd
        fst = snd
        snd = trd

    return snd

# To confirm that script is not executed if opened in REPL
if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] is not None:
        print(fibonacci(sys.argv[1]))
    else:
        print("Please enter one command line argument!!")
