import falcon
import json
import logging
import settings
import utils
import data_manager

get_api_hit = 0
save_api_hit = 0
remove_api_hit = 0

utils.load_logconfig()
data_mgr = data_manager.DataManager()

class PITSResource(object):
    def on_get(self, req, res):
	global get_api_hit
	utils.log_apihit("[GET]", get_api_hit)
	get_api_hit += 1

	res.status = falcon.HTTP_200
        res.body = json.dumps(data_mgr.get_all(settings.SELECT_QUERY)) + "\n"


    def on_post(self, req, res):
	global save_api_hit
	utils.log_apihit("[POST]", save_api_hit)
	save_api_hit += 1
	
	json_data = utils.read_all_data(req.stream)
	utils.log_it('Request body: ' + json_data)
    	keymap = json.loads(json_data)

	try:
		data_mgr.save(settings.INSERT_QUERY, (keymap['id'], json_data))
		res.status = falcon.HTTP_200
        	res.body = '{"Status": "Added Successfully"}\n'
	except Exception:
		res.status = falcon.HTTP_400
		res.body = '{"Status": "Id already exists"}\n'
        


    def on_delete(self, req, res):
	global remove_api_hit
	utils.log_apihit("[DELETE]", remove_api_hit)
	remove_api_hit += 1
        
	json_data = utils.read_all_data(req.stream)
	keymap = json.loads(json_data)
	data_mgr.remove(settings.DELETE_QUERY, (keymap['id'],))

	res.status = falcon.HTTP_200
        res.body = '{"Status": "Deleted Successfully"}\n'


    def on_put(self, req, res):
	res.status = falcon.HTTP_501
        res.body = '{"Status": ""}\n'


app = falcon.API()
things = PITSResource()

app.add_route('/pits', things)
