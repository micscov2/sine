def fib_iterative(num):
    fst = 0
    snd = 1

    if num in [0, 1]: 
        return fst

    if num == 2:
        return snd

    indx = 3

    while indx <= num:
        tmp = fst
        fst = snd
        snd = tmp + fst
        indx += 1

    return snd
