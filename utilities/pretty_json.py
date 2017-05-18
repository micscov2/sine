import json
import sys
import os

if not os.path.exists("data.txt"):
	print("data.txt doesn't exist in current directory, exiting...")
	sys.exit(1)

with open("data.txt") as ff:
	content = ff.readlines()
	content = ''.join(content)
	parsed_json = json.loads(content)
	print json.dumps(parsed_json, indent=4)
