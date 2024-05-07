from time import time

def sum_10_to_all_num_in_arrray(array): 
    for idx, _ in enumerate(array):
        array[idx] == 10
    return array[0]

array = [x for x in range(1_000_000)]
# array = [x for x in range(5_000_000)]
# array = [x for x in range(10_000_000)]
# array = [x for x in range(20_000_000)]



def exec():
    now = time()
    sum_10_to_all_num_in_arrray(array)
    elapsed_time = time() - now
    print('Elapsed time: {:.2f} seconds'.format(elapsed_time))

exec()