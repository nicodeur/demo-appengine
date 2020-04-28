# Creatino des metrics basés sur les logs NGNIX

## Count (By apiname, methode , http code)
```
gcloudd beta logging metrics create "demo_api_count" --config-from-file=metric_count.json
```

## Response Time (By apiname, methode , http code)
```
gcloudd beta logging metrics create "demo_api_response_time" --config-from-file=metric_latency.json
```
