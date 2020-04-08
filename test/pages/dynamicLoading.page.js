import basePage from "./base.page";

class dynamicLoading extends basePage {

    get dynamicLoadingHeader() { return $('//*[@id="content"]/div/h3')  }
    
    get dynLoadPara1() { return $('//*[@id="content"]/div/p[1]')  }
    
    get dynLoadPara2() { return $('//*[@id="content"]/div/p[2]')  }

    get dynLoadEx1() { return $('//*[@id="content"]/div/a[1]')  }

    get dynLoadEx2() { return $('//*[@id="content"]/div/a[2]')  }

    get dynLoadEx1StartBtn() { return $('//*[@id="start"]/button')  }

    get dynLoadEx2StartBtn() { return $('//*[@id="start"]/button')  }

    get dynLoadEx1StartBtn() { return $('//*[@id="start"]/button')  }

    get dynLoadEx2StartBtn() { return $('//*[@id="start"]/button')  }

    get dynLoadEx1Finish() { return $('//*[@id="finish"]/h4')  }

    get dynLoadEx2Finish() { return $('//*[@id="finish"]/h4')  }





    goToDynamicLoading() {

        console.log('step: going to dynamic loading page')

        browser.url('/dynamic_loading')

        this.dynamicLoadingHeader.waitForDisplayed()

        console.log('step: on the dynamic loading page')

    }

    
    clickExample1(){
        this.dynLoadEx1.waitForDisplayed();
        this.dynLoadEx1.click();
    }

    clickEx1StartBtn(){
        this.dynLoadEx1StartBtn.waitForExist();
        this.dynLoadEx1StartBtn.click();


    }
    clickExample2(){
        this.dynLoadEx2.waitForDisplayed();
        this.dynLoadEx2.click();
    }

    clickEx2StartBtn(){
        this.dynLoadEx2StartBtn.waitForExist();
        this.dynLoadEx2StartBtn.click();
    }



}

export default new dynamicLoading()