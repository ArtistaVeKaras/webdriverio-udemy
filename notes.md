###run single test with node
type: node test/wdiov4.test.js

### selenium server
no need to start the server when wdio config file is setup to use selenium-server

###run test through the wdio.config file
1- ./node_modules/.bin/wdio --spec test/wdioV4.test.js 
2- wdio --spec test/wdiov4.test.js  --> runs a specific file
3- wdio wdio.config.js --> this will run all the test inside the test dir

###run with npm 
npm test --> stops the selenium server from running our tests
npm test -- --spec=test/chai --> runs a specific test

###setting a diff baseurl through the command line
npm test -- --baseUrl=hhtp://www.google.com

###run with a diff env
SERVER=prod npm test

###log test with verbose
npm tet -- --loglevel=verbose
