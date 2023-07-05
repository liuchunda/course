#!/bin/bash
  nginx_number=$(ps -ef|grep nginx |grep -v "grep"|wc -l)
  if [ $nginx_number -ge 2 ]; then
    echo "nginx is runing!"
  else
    echo "nginx is down"
  fi
