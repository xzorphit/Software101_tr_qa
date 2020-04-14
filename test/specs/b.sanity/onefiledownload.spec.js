import fileDownloadPage from "../../pages/fileDownload.page";
import { TIMEOUT } from "dns";

const fs = require('fs')
const path = require('path')

const downloadDir = './tempDownload'

let titles = [] 




describe('As a User, test the File Download page', () => {
    before('setup',() => {

        //if downloadDir sync doesnt exist then make it, just a bit of extra cushion in case the code above doesnt work completely
        if (!fs.existsSync(downloadDir)) {
            fs.mkdirSync(downloadDir)
        }

        //Suppossedly used for when running headless but breaks the script
        //browser.sendCommand('Page.setDownloadBehavior', { 'behavior':'allow','downloadPath': downloadDir });

        
        
    });
    
    it('Given, I got to the File Download page', () => {
        fileDownloadPage.goToFileDownload();
        
    });
    
    it('When I click all of the downloads', () => {
        fileDownloadPage.firstlink.forEach(link => {
            if (!link.getHTML().includes('GitHub') && link.getText() !== 'Elemental Selenium') {
                
                //get the name of the link
                titles.push(link.getText());
                //click the link
                link.click();
                //browser.debug()
                browser.pause(2000)
            }
        });
    
    
    });

    it('Then, I verify all of the downloads were successful', () => {
       //all of this is outside of webdriverIO. its all NodeJS, thats why we dont have to say getText

        const files = fs.readdirSync(downloadDir)
        files.forEach(file =>{
            console.log(file)
            fileDownloadPage.assert(titles.includes(file))
        });
    });


});