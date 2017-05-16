from functools import partial

def xyz(x, y):
	return x + y

print(partial(xyz, 1, 2)())
