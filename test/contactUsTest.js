var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('https://www.webdriveruniversity.com/')
    .getTitle().then(function(title) {
    console.log('Title is: ' + title);

})
    .click("#contact-us")
    .pause()
    .end();
