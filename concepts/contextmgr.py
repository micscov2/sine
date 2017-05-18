from contextlib import contextmanager

@contextmanager
def some_ctrmgr(arg1):
	print("Inside some_ctrmgr")
	print("Arg = {}".format(arg1))
	class P():
		def __init__(self):
			self.x = 3	
		def print_value(self):
			print(self.x)
	
	yield P()

	print("Returning from some_ctrmgr")

with some_ctrmgr("Monkey D. Luffy") as s_ctr:
	s_ctr.print_value()
