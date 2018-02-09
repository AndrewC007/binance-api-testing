#!/bin/bash

npm install
npm run build
rm /var/www/html/*
cp -a ./dist/. /var/www/html/
systemctl reload nginx