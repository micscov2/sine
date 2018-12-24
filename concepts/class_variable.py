class MyClass(object):
    cache = {}

    def __init__(self):
        print("Init called for MyClass")


if __name__ == '__main__':
    m_class1 = MyClass()
    m_class2 = MyClass()

    # Modify in one
    m_class1.cache['apple'] = 'fruit'

    # Access from other
    print(m_class2.cache['apple'])

    # Access from Class
    print(MyClass.cache['apple'])

    # Creating one more class
    m_class3 = MyClass()

    # Accessing from third class
    print(m_class3.cache['apple'])

    # Accessing from class variable
    print(MyClass.cache['apple'])
