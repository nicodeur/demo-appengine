# Deploiement de la version NodeJS
```
gcloud app deploy app.yml  --no-promote -v "VERSION NAME"
```
# liste des versions du service
```
gcloud app versions list -s demo-preprod
```

# liste des versions du service servant du trafic
```
gcloud app versions list --hide-no-traffic  -s demo-preprod
```

# Restart an old version
```
gcloud app versions start VERSIONS v2 -s demo-preprod
```
# Split traffic 
Option for split by : based on cookie, IP address or random.
SPLIT_BY must be one of: cookie, ip, random.

```
> gcloud app services set-traffic demo-preprod  --splits v2=.2,v3=.8 --split-by=random

Setting the following traffic allocation:
 - gleaming-tube-275212/demo-preprod/v2: 0.2
 - gleaming-tube-275212/demo-preprod/v3: 0.8
NOTE: Splitting traffic by random.
Any other versions of the specified service will receive zero traffic.
Do you want to continue (Y/n)?  Y

Setting traffic split for service [demo-preprod]...done. 
```
