# web_scraper

Installation
1. Install python 2.7
2. Install mysql 
3. Install MySQLdb

Steps to run:
1. First change passwod in mysql_helper.py
2. Run python app.py

Creating table
 CREATE TABLE `question_answers` (
  `question_short` varchar(700),
  `question_desc` varchar(2000) Default NULL,
  `user` varchar(200) DEFAULT NULL,
  `profile_url` varchar(1000) DEFAULT NULL,
  `rating` varchar(1000) DEFAULT NULL,
  `answer` varchar(1000) DEFAULT NULL,
  `source_website` varchar(1000) DEFAULT NULL,
  `tags` varchar(1000) DEFAULT NULL,
  `category` varchar(1000) DEFAULT NULL,
  `correct_answer` varchar(1000) DEFAULT NULL,
   PRIMARY KEY ( `question_short` )
);
