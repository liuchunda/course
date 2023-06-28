#!/bin/bash
read -p "请输入你的用户名" -t 10 username
echo "\n"
read -p "请输入你的性别[m/f]" -n 1 gender
echo "\n"
read -p "请输入密码" -s password
echo "\n"
echo "你的用户名是${username},你的性别是${gender},你的密码是${password}"
