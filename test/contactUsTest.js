browser
    // .init()
    .url('/')
    .getTitle().then(function(title) {
    console.log('Title is: ' + title);

})
    .click("#contact-us")
    .pause(3000)
