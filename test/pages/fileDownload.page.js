import basePage from "./base.page";

class fileDownload extends basePage {

    get fileDownloadHeader(){   return $('//*[@id="content"]/div/h3') }

    get fileDownloadPara1(){        return $('//*[@id="content"]/div/p[1]') }

    get fileDownloadPara2(){        return $('//*[@id="content"]/div/p[2]') }

    get fileDownloadexmpleAnkers(){        return $$('//*[@id="content"]/div/a').length }

    goToFileDownload() {

        console.log('step: going to file download page')

        browser.url('/dynamic_loading')

        this.fileDownloadHeader.waitForDisplayed()

        console.log('step: on the file download page')

    }


    
}

export default new fileDownload()