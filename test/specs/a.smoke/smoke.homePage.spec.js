import basePage from "../../pages/base.page";

const homePage = new basePage()

describe('Smoke test the home page', () => {
    
    it('Given, I go to the Home page', () => {
        homePage.goToHomePage()
    });

    it('Then, I validate all header and footer texts', () => {
        homePage.assert(homePage.mainHeader.getText().includes('Welcome to the-internet'));
        homePage.assert(homePage.subHeader.getText().includes('Available'));
        
        //this works too
        //$('h2*=Available').waitForDisplayed();

        homePage.assert(homePage.mainHeader.getText() !== '404');
        homePage.assert(homePage.footerAnker.getText().includes('Elemental Selenium'));

    });


});









