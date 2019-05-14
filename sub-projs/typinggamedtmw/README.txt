Typing game v1.0
----------------

Notes:
1. It runs on WAMP (Windows Apache Mysql Php) stack
2. Database can be created by running schema.sql manually.
3. TBD.. (other approach of db creation)

The name of database is
typeddb

We need 5 tables
1. users
2. words
3. top_twenty
4. User specific scores table will be created on sign up
5. [v2.0] Should display top users from last 24 hours

words.sql
It contains initial set of words (85) insertion queries which can be increased later 
These queries should be run after running of schema.sql

.....[797]

Dated: May 14 2019
CentOS release 6.9 (Final)
Instead of WAMP (Windows) installed it on LEMP (Linux eNginx MariaDB PHP)
Nginx - nginx version: nginx/1.10.2
MariaDB - mysql  Ver 15.1 Distrib 10.1.40-MariaDB, for Linux (x86_64) using readline 5.1
PHP - PHP 5.3.3 (fpm-fcgi) (built: Mar 22 2017 12:28:05) [fpm is fastCGI process manager]

Installation
1. Install nginx 
2. Install mysql (mariadb)
3. Configure mariadb by creating databases as mentioned in above steps)
4. Configure nginx 
  i. fastcgi_pass unix:/var/run/php-fpm/php-fpm.sock;
  ii. location ~ \.php$ {
  iii. Above configuration ensures that .php files are processed by php-fpm 
5. Restart php-fpm using
  i. service php-fpm restart
  
Pitfalls
Got this warning on console log of browser:
- Sychronous XMLHTTPRequest on method thread is deprecated

Had to comment out following lines from service files, probably some issue with service configuration
in that particular OS
# Source networking configuration.
#. /etc/sysconfig/network
