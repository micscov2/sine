def counter():
	x = 0
	def abc():
		x += 1
		return x
	return abc

c = counter()
print(c())
print(c())
print(c())
