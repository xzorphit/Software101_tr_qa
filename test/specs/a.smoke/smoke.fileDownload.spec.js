import fileDownloadPage from "../../pages/fileDownload.page";


describe('As a User, smoke test the File Download page', () => {

    it('Given, I go to the File Download page', () => {
        fileDownloadPage.goToFileDownload()
    });

    it('Then i verify the elements exist', () => {
        fileDownloadPage.fileDownloadPara1.waitForDisplayed();
        fileDownloadPage.fileDownloadPara2.waitForDisplayed();
        //fileDownloadPage.fileDownloadexmpleAnkers.waitForDisplayed();
        fileDownloadPage.assert(fileDownloadPage.fileDownloadexmpleAnkers==2);
        fileDownloadPage.footerAnker.waitForDisplayed();
    });


});

