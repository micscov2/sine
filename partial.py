from functools import partial

def partial_impl(x):
	def wrap(*args, **kwargs):
		self_dict[args] = kwargs
	return wrap

self_dict = {}

abc = partial(partial_impl, self_dict)()
abc(3, 4, x=5)

xyz = partial(partial_impl, self_dict)()
xyz(1, 2, x=900)

print(self_dict)
