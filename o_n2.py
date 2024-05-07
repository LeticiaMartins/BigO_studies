from time import time

def print_pairs(array1, array2): 
    for i in array1:
        for j in array2:
            print(i,j)

array1 = [x for x in range(100)]
array2 = [x for x in range(100)]

# array1 = [x for x in range(150)]
# array2 = [x for x in range(150)]

# array1 = [x for x in range(200)]
# array2 = [x for x in range(200)]


def exec():
    now = time()
    print_pairs(array1, array2)
    elapsed_time = time() - now
    print('Elapsed time: {:.2f} seconds'.format(elapsed_time))

exec()