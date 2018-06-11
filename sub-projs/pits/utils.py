import logging


# Utilities methods 

def load_logconfig():
	logging.basicConfig(filename='logs/debug.log', level=logging.DEBUG, format='%(asctime)s %(name)s %(message)s')


def log_apihit(api_name, api_count, log_level='INFO'):
	if api_count == 0:
		logging.info("+-------------------+")
		logging.info("| First Request     |")
		logging.info("+-------------------+")

	if log_level == 'INFO':
		logging.info("{}, Total API count: {}".format(api_name, api_count))


def log_it(message, log_level=logging.DEBUG):
	if log_level == 'INFO':
		logging.info(message)
	elif log_level == 'DEBUG':
		logging.debug(message)
	elif log_level == 'WARN':
		logging.warn(message)
	else:
		logging.error(message)


def read_all_data(cust_stream):
	output = ""
	while True:
		chunk = cust_stream.read(4096)
		if not chunk:
			break
		output += chunk

	return output


