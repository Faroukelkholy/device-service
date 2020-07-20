FROM mongo

COPY all-devices.json /all-devices.json
CMD mongoimport --host mongoDevice --db katulu --collection devices --type json --file /all-devices.json --jsonArray