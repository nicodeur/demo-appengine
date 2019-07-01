

# Artillery tools installation
Documentation : 
https://artillery.io/docs/
https://github.com/Nordstrom/artillery-plugin-cloudwatch

```
npm install -g artillery
npm install -g artillery-plugin-metrics-by-endpoint
npm install -g artillery-plugin-cloudwatch
```

# Lanch test
```
AWS_REGION=eu-west-1 artillery run -o report_demo_appengine.json load_test.yml
```

# View result HTML format
```
artillery report report_demo_appengine.json
```