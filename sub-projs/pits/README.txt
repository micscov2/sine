# PZK Issues Tracking System (PITS)

# Starting the app
Run:
    ./start.sh

# Components
- Falcon
- Gunicorn
- Psycopg2

# Gunicorn
Gunicorn is a WSGI (Web Server Gateway Interface). Before its introduction
there were limited choices for python users to implement webserver. For more 
details refer to PEP-333.

# Commands for installation
pip install falcon
pip install gunicorn
apt-get install python-psycopg2
apt-get install libpq-dev
pip install psycopg2

# For further information about configuration see
docs folder
