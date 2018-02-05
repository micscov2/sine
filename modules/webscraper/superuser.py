#StackOverflow Scrapper

from bs4 import BeautifulSoup
from urllib2 import urlopen
import time
import traceback
import pdb
from mysql_helper import insert_data
import re

N = 23000
BASE_URL = "http://superuser.com/.com/questions?page=%s&sort=frequent"
QUESTIONS_BASE_URL = "http://superuser.com/"

def get_question_urls(section_url):
	lst_urls = []
	for i in xrange(1, N):
		try: 
			url = BASE_URL % str(i)
			html = urlopen(url  + section_url)
			soup = BeautifulSoup(html, "lxml")
			something = soup.find_all("a", "question-hyperlink")
			for item in something:
				yield item['href']
		except Exception as e:
			pass

def get_related_data_to_question(ques_url):
	html = urlopen(QUESTIONS_BASE_URL + ques_url)
	soup = BeautifulSoup(html, "lxml")
	question_summary = soup.find("a", "question-hyperlink").text
	question_desc = soup.find("div", "post-text").text

	user_details = soup.find("div", "user-details")
	user = user_details.find('a').text
	profile_url = user_details.find('a')['href']
	profile_url = QUESTIONS_BASE_URL + profile_url
	rating = user_details.find('span').text
	tags =  soup.find_all("div", "post-taglist")
	tags = str(tags[0].text.split(' '))
	category = ""
	answer = soup.find("div", "answer").text
	insert_data(question_short=question_desc, user=user, rating=rating, tags=tags, profile_url=profile_url, source_website=BASE_URL, answer=re.escape(answer), correct_answer=re.escape(answer), category=category)

def run_now():
	for url in get_question_urls(""):
		try: 
			get_related_data_to_question(url)
		except Exception as e:
			pass
	
