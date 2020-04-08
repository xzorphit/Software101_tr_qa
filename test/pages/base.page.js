

export default class basePage {

    get mainHeader() {
        return $('h1')
    }

    get subHeader() {
        return $('h2')
    }

    get footerAnker(){return $('//*[@id="page-footer"]/div/div/a')}

    goToHomePage() {

        console.log('step: going to home page')

        browser.url('/')

        this.mainHeader.waitForDisplayed()

        console.log('step: on the home page')

    }

    //** Utilities */

    /* assert(assertion, timeout) {
        browser.waitUntil(()=>{
            return assertion;
        }, timeout)
    } */

    assert(watev) {
        browser.waitUntil(()=>{
            return watev;
        
    })}


}

