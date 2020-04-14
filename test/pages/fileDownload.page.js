import basePage from "./base.page";

class fileDownload extends basePage {

    get fileDownloadHeader(){   return $('//*[@id="content"]/div/h3') }

    get fileDownloadPara1(){        return $('//*[@id="content"]/div/p[1]') }

    get fileDownloadPara2(){        return $('//*[@id="content"]/div/p[2]') }

    get fileDownloadexmpleAnkers(){        return $$('//*[@id="content"]/div/a').length }

    get links() { return $$('a')}

    get firstlink() {return $$('//*[@id="content"]/div/a[1]')}

    goToFileDownload() {

        console.log('step: going to file download page')

        browser.url('/download')

        this.fileDownloadHeader.waitForDisplayed();

        this.links[0].waitForDisplayed();

        console.log('step: on the file download page')

    }


    
}

export default new fileDownload()