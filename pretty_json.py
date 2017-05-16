import json

with open("data.txt") as ff:
	content = ff.readlines()
	content = ''.join(content)
	parsed_json = json.loads(content)
	print json.dumps(parsed_json, indent=4)
