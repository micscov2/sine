#!/usr/bin/python

import psycopg2

class DataManager(object):
	"""
	Used to maintain data 
	
	Args:

	Returns:
	"""
	connection_init = False
	def __init__(self, hostname='localhost', username='postgres', password='abc', database='pitsdb'):
		self.hostname = hostname
		self.username = username
		self.password = password
		self.database = database
		self.connection = None

	def get_connection(self):
		if DataManager.connection_init:
			return self.connection

		conn = psycopg2.connect(host=self.hostname, user=self.username, password=self.password, dbname=self.database)
		conn.autocommit = True
		DataManager.connection_init = True
		self.connection = conn

		return conn
				
	def get_all(self, query):
		cur = self.get_connection().cursor()
		cur.execute(query)

		lst = []
		for fst, snd in cur.fetchall():
			json_data = {}		
			json_data[fst] = snd
			lst.append(json_data)
		cur.close()

		return lst

	def save(self, query1, query2):
		cur = self.get_connection().cursor()
		cur.execute(query1, query2)
		cur.close()

	def remove(self, query1, query2):
		cur = self.get_connection().cursor()
		cur.execute(query1, query2)
		cur.close()

	def clear(self):
		self.get_connetion().close()

