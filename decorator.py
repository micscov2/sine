def dec(func):
	print("inside decorator")
	def wrap(*args, **kwargs):
		print("wrap called")
		func(*args, **kwargs)
	return wrap

print("decorator declared")

@dec
def abc():
	print("method called")


print("before calling")
abc()
