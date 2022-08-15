#!/bin/sh
var=0
for i in $(ls *.png)
do
    mv $i ''$var.png''
    echo ''Cambio $i por $var.png ''
    var=$((var+1))

done
