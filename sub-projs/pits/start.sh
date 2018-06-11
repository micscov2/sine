#!/bin/bash

nohup gunicorn server:app & &> /dev/null
