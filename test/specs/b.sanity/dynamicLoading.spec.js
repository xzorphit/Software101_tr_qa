import dynamicLoadingPage from "../../pages/dynamicLoading.Page";


describe('As a User, test Dynamic Loading page example 1', () => {

    it('Given, I go to the Dynamic Loading page', () => {
        dynamicLoadingPage.goToDynamicLoading()
    });

    it('When, I click on example 1', () => {
        dynamicLoadingPage.clickExample1();

        
    });

    it('And, I click start on the example 1 page', () => {
        dynamicLoadingPage.clickEx1StartBtn();

        
    });
    
    it('Then, I validate that "Hello World!" exists', () => {
        dynamicLoadingPage.dynLoadEx1Finish.waitForExist();
        $('h4*=Hello').waitForDisplayed();

        //Does not work with dynamically loading pages
        //dynamicLoadingPage.assert(dynamicLoadingPage.dynLoadEx1Finish.getText().includes('Hello World!'));
        
    });
    
});


describe('As a User, test Dynamic Loading page example 2', () => {

    it('Given, I go to the Dynamic Loading page', () => {
        dynamicLoadingPage.goToDynamicLoading()
    });

    it('When, I click on example 2', () => {
        dynamicLoadingPage.clickExample2();

        
    });

    it('And, I click start on the example 2 page', () => {
        dynamicLoadingPage.clickEx2StartBtn();

        
    });
    
    it('Then, I validate that "Hello World!" exists', () => {
        dynamicLoadingPage.dynLoadEx2Finish.waitForExist();
        $('h4*=Hello').waitForDisplayed();

        //Does not work with dynamically loading pages
        //dynamicLoadingPage.assert(dynamicLoadingPage.dynLoadEx1Finish.getText().includes('Hello World!'));
        
    });

});
