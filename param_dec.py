print("1")
import pdb; pdb.set_trace()
def dec_2(func):
	print("inside 2 dec_2")
	def wrap(*args, **kwargs):
		print("inside 2 wrap")
	return wrap
print('2')
def dec(argsz):
	#import pdb; pdb.set_trace()
	def r_dec(func):
		print("inside r_dec")
		def wrap(*args, **kwargs):
			print("inside wrap")
		return wrap
	return r_dec
print('3')
@dec_2
@dec(('abc', 'pqr'))
def abc():
	return 3343
print('4')
print(abc())
print('5')
