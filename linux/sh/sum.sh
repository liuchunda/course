#!/bin/bash
num1=$1
num2=$2
sum=$((num1+num2))
echo "\033[32m \$*:$* \033[0m"
echo "\033[32m \$@:$@ \033[0m"
echo "\033[32m \$#:$# \033[0m"
echo "${num1}+${num2}=$sum"
