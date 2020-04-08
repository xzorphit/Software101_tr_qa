import basePage from "./base.page";

class dropDown extends basePage {

    get dropDownHeader(){         return $('//*[@id="content"]/div/h3') }

    get dropDownField(){        return $('//*[@id="dropdown"]') }

    get dropDownOptions(){        return $$('//*[@id="dropdown"]/option')}

    goToDropDown() {

        console.log('step: going to dropdown page')

        browser.url('/dropdown')

        this.dropDownHeader.waitForDisplayed()

        console.log('step: on the dropdown page')

    }


    
}

export default new dropDown()