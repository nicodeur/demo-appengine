

# Artillery tools installation
Documentation : 
https://artillery.io/docs/

```
npm install -g artillery
npm install -g artillery-plugin-metrics-by-endpoint
```

# Lanch test
```
artillery run -o report_demo_appengine.json load_test.yml
```

# View result HTML format
```
artillery report report_demo_appengine.json
```
