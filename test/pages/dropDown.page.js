import basePage from "./base.page";

class dropDown extends basePage {

    get dropDownHeader(){
        return $('//*[@id="content"]/div/h3') }

    get dropDownField(){
        return $('//*[@id="dropdown"]') }

    get dropDownOptions(){
        return $$('//*[@id="dropdown"]/option')}

    get dropDownOption1(){
        return $('//*[@id="dropdown"]/option[2]') }
    
    get dropDownOption2(){
        return $('//*[@id="dropdown"]/option[3]') }

    goToDropDown() {

        console.log('step: going to dropdown page')

        browser.url('/dropdown')

        this.dropDownHeader.waitForDisplayed()

        console.log('step: on the dropdown page')

    }


    
}

export default new dropDown()