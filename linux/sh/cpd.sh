#!/bin/bsh
cpu(){
local user system idle await steal
user=$(vmstat|awk 'NR==3{print $13}')
system=$(vmstat|awk 'NR==3{print $14}')
idle=$(vmstat|awk 'NR==3{print $16}')
steal=$(vmstat|awk 'NR==3{print $17}')
echo "$user $system $idle $await $steal"
}
