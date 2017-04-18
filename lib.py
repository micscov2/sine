def get_entries_as_set(fileloc):
	set_entries = set()

	with open(fileloc) as f:
		for entry in f.readlines():
			set_entries.add(entry)

	return set_entries


def get_enries_as_list(fileloc):
	with open(fileloc) as f:
		return f.readlines()
