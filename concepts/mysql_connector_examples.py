import mysql.connector
import sys
import time

config = { 
                'host' : 'localhost',
            'database' : 'test',
                'user' : 'root',
            'password' : 'root'
        }

# Global named-reference to store pooled connections
conn_pool = mysql.connector._get_pooled_connection(pool_name='pool_1', pool_size=10, **config)

def no_op(data):
    pass

def run_non_pool_example():
    # Normal example (without connection pooling)
    conn = mysql.connector.connect(**config)
    cur = conn.cursor()
    cur.execute("show databases;")
    for data in cur.fetchall():
        no_op(data)

def run_pool_example():
    # Connection pooling example
    cur = conn_pool._cnx.cursor()
    cur.execute("show databases;")
    for data in cur.fetchall():
        no_op(data)

def main(sys_argv):
    curr_time = time.time()
    for i in xrange(0, times):
        run_non_pool_example()
    print("Time taken by non-pooled: {}".format(time.time() - curr_time))

    curr_time = time.time()
    for i in xrange(0, times):
        run_pool_example()
    print("    Time taken by pooled: {}".format(time.time() - curr_time))



if __name__ == '__main__':
    times = 100
    if len(sys.argv) == 2:
        times = int(sys.argv[1])
    main(times)
