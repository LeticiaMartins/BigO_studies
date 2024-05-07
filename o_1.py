from time import time

def get_first_elem_in_arrray(args): # O(1)
    return args[0]

array = [x for x in range(1_000)]
# array = [x for x in range(10_000)]
# array = [x for x in range(100_000)]
# array = [x for x in range(1_000_000)]
# array = [x for x in range(10_000_000)]



def exec():
    now = time()
    get_first_elem_in_arrray(array)
    elapsed_time = time() - now
    print('Elapsed time: {:.2f} seconds'.format(elapsed_time))

exec() #python o_1.py