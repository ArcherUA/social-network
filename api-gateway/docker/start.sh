#!/bin/bash

set -e
#
#while ! exec 6<>/dev/tcp/${NETWORK_DB_HOST}/${NETWORK_DB_PORT}; do
#  echo "Trying to connect to DB ${NETWORK_DB_HOST}/${NETWORK_DB_PORT}"
#  sleep 10
#  echo "Retrying..."
#done
#
#echo "Running migrations and seeds..."
#
## yarn migrate:run

echo "Starting the convertor..."

case "$NODE_ENV" in
  "debug")
      npm run start:debug
    ;;
  "local" | "development")
      npm run start:dev
    ;;
  "production")
      npm run start:prod
    ;;
esac
