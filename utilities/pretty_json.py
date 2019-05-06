#!/usr/local/bin/python2.7

# Script to beautify json
import argparse
import sys
import json
import simplejson

"""
simplejson is also used along with json library for proper
error reporting
"""


def do_py_specific_conditioning(line):
	"""
		This method is for doing python specific json conversion for
		example None is valid in python but not in json
		Hence, this method converts it to 'None'

		Returns
			str
	"""
	line = line.replace("False", "'False'")
	line = line.replace("True", "'True'")

	line = line.replace("null", "'null'")
	line = line.replace("None", "'None'")

	return line


def get_file_str(filename, parse_args_dict):
	"""
		This method takes file location and returns string which is
		supposed to be a json string
		Moreover it calls some utility methods to convert string which would
		be valid for json

		Returns
			str
	"""
	output = ''
	with open(filename) as fw:
		for line in fw.readlines():
			if parse_args_dict.removeraw:
				line = line.replace("u'", "'")
				line = line.replace('u"', '"')

			if parse_args_dict.pyspecific:
				line = do_py_specific_conditioning(line)

			if parse_args_dict.repldouble:
				line = line.replace("'", '"')

			output += line

	return output


def main(filename, parse_args_dict):
	"""
		Driver function which takes filename and command line argument dictionary
		This first gets json in string format, then calls json library's load to
		parse the json, in case of error it calls simplejson library's load to
		actually pin point the error

		Returns
			None
	"""
	data_str = get_file_str(filename, parse_args_dict)
	try:
		parsed = json.loads(data_str)
		print(json.dumps(parsed, indent=4, sort_keys=True))
	except ValueError:
		parsed = simplejson.loads(data_str)


def create_args_logic():
	"""
		This method creates command line argument processing logic

		Returns
			command line args object
	"""
	parser = argparse.ArgumentParser(description='Prettify json')
	parser.add_argument('filename', help='Name of .json file')
	parser.add_argument('--repldouble', '-r', action='store_true',
						help='Replace single quotes with double quotes')
	parser.add_argument('--pyspecific', '-p', action='store_true',
					    help='Convert None into "None" and so on..')
	parser.add_argument('--removeraw', '-w', action='store_true',
					    help='Remove raw characters eg. convert u" to "')
	parser.add_argument('--verbose', '-v', action='store_true',
						help="Prints exceptions and other processing logic on shell: TBD")
	parse_args_dict = parser.parse_args()

	return parse_args_dict


if __name__ == '__main__':
	parse_args_dict = create_args_logic()
	file_name = parse_args_dict.filename

	main(file_name, parse_args_dict)
