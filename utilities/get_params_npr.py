from xlrd import open_workbook

PATTERN_TO_CHECK_IN_ALL_FILE = "Some_Pattern"
PRE_PATTERN = "Pre_Pattern"
POST_PATTERN = "Post_Pattern"

FILE_ALL_PARAMS = ".xlsx"
FILE_CURRENT_PARAMS = ""
FILE_SUPPORTED_PARAMS = ""

def process_xlsx_file():
	wb = open_workbook(FILE_ALL_PARAMS)

	wsheet = wb.sheets()[1]
	nrows = wsheet.nrows
	ncols = wsheet.ncols	
	all_p = set()
	curr_p = set()
	all_s_p = set()

	with open(FILE_CURRENT_PARAMS) as f:
		for entry in f.readlines()[1:]:
			curr_p.add(entry.split(",")[3])
	
	with open(FILE_SUPPORTED_PARAMS) as f:
		for entry in f.readlines():
			if PATTERN_TO_CHECK_IN_ALL_FILE in entry:
				param = entry.split("['")[1].split("']")[0]
				all_s_p.add(param)

	for i in xrange(1, nrows - 1):
		param = wsheet.cell(i, 1).value + "." + wsheet.cell(i, 2).value
		all_p.add(param)

	for item in all_p:
		if item not in curr_p and item in all_s_p:
			print("{}{}{}".format(PRE_PATTERN, item, POST_PATTERN))


if __name__ == '__main__':
	process_xlsx_file()
