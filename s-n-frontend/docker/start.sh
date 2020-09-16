#!/bin/bash

set -e

#while ! exec 6<>/dev/tcp/${CONVERTOR_DB_HOST}/${CONVERTOR_DB_PORT}; do
#  echo "Trying to connect to DB ${CONVERTOR_DB_HOST}/${CONVERTOR_DB_PORT}"
#  sleep 10
#  echo "Retrying..."
#done

#echo "Running migrations and seeds..."

#yarn migrate:run

echo "Starting the converter_instance..."

case "$NODE_ENV" in
  "local" | "development")
      npm run start
    ;;
  "production")
      npm run start
    ;;
esac
