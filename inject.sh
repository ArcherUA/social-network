#yarn --cwd  common build
#services=("convertor_instance")

#for i in ${!services[*]}
#do
#  service="${services[$i]}"
#  nmpath="$service/src/common"
##  rm -rf dist || true
#  mkdir "$service/src/common" || true
#  rm -rf "$nmpath" || true
#  cp -r convertor_gateway/src/common $nmpath
#done

#!/bin/sh
service="convertor_instance"
nmpath="$service/src/common"
#  rm -rf dist || true
mkdir "$service/src/common" || true
rm -rf "$nmpath" || true
cp -r convertor_gateway/src/common $nmpath
