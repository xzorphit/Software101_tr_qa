import basePage from "./base.page";

class dynamicLoading extends basePage {

    get dynamicLoadingHeader() { return $('//*[@id="content"]/div/h3')  }
    
    get dynLoadPara1() { return $('//*[@id="content"]/div/p[1]')  }
    
    get dynLoadPara2() { return $('//*[@id="content"]/div/p[2]')  }

    get dynLoadEx1() { return $('//*[@id="content"]/div/a[1]')  }

    get dynLoadEx2() { return $('//*[@id="content"]/div/a[2]')  }
    

    goToDynamicLoading() {

        console.log('step: going to dynamic loading page')

        browser.url('/dynamic_loading')

        this.dynamicLoadingHeader.waitForDisplayed()

        console.log('step: on the dynamic loading page')

    }



}

export default new dynamicLoading()