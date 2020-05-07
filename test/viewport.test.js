beforeEach(function(){
    browser.url('Hidden-Elements/index.html')
})
describe('Test elements are visible with viewport--->' ,function () {
    //setting window size
    browser.setViewportSize({
        width: 1200,
        height: 800
    })
    browser.pause(4000);

    //printing the window size
    // const windwonSize = browser.windowHandle();
    // console.log(windwonSize.value);
});

it('should detect if an element is visible ', function () {
    const viewport = browser.isVisibleWithinViewport('#not-displayed')
    console.log(viewport)

    const viewport1 = browser.isVisibleWithinViewport('#visibility-hidden')
    console.log(viewport1)

    const viewport2 = browser.isVisibleWithinViewport('#zero-opacity')
    console.log(viewport2)

    const viewport3 = browser.isVisibleWithinViewport('h1')
    console.log(viewport3)

    const width = browser.getViewportSize('width')
    console.log(width)

    const height = browser.getViewportSize('height')
    console.log(height)
});