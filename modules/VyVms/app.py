from flask import Flask
import json
from logging import getLogger
import paramiko

logger = getLogger(__name__)

class SshHelper(object):
    def __init__(self, host, username, password):
        self.ssh_client = paramiko.client.SSHClient()
        self.host = host
        self.username = username
        self.password = password

    def _connect(self):
        self.ssh_client.load_system_host_keys()
        self.ssh_client.connect(self.host, username=self.username, password=self.password)

    def run_ls(self):
        self._connect()
        stdin, stdout, stderr = self.ssh_client.exec_command('ls -l')
        print(stdout.read() + "\n")

class ConfigLoader(object):
    def __init__(self):
        self.json_obj = None

    def load_json(self, filename=None):
        if not filename:
            filename = "config.json"

        json_str = ""
        with open(filename) as fp:
            json_str += fp.read()

        if not json_str:
            logger.error("Empty json file")

        self.json_obj = json.loads(json_str)

def start_application():
    app = Flask(__name__)

    @app.route("/ping")
    def ping():
        return str({ "hello": "world" }) + str("")

    @app.route("/servers")
    def list_all_servers():
        return ""

    if __name__ == '__main__':
        app.run(host="0.0.0.0", port=17777)

if __name__ == '__main__':
    config_loader = ConfigLoader()
    config_loader.load_json()
    for key in config_loader.json_obj.keys():
        config_obj = config_loader.json_obj[key]
        ssh_helper = SshHelper(config_obj['name'], config_obj['username'], config_obj['password'])
        ssh_helper.run_ls()

