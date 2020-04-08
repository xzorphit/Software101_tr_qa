import dynamicLoadingPage from "../../pages/dynamicLoading.Page";


describe('As a User, smoke test the Dynamic Loading page', () => {

    it('Given, I go to the Dynamic Loading page', () => {
        dynamicLoadingPage.goToDynamicLoading()
    });

    it('Then, I verify the elements exist', () => {
        dynamicLoadingPage.dynLoadPara1.waitForDisplayed();
        dynamicLoadingPage.dynLoadPara2.waitForDisplayed();
        dynamicLoadingPage.dynLoadEx1.waitForDisplayed();
        dynamicLoadingPage.dynLoadEx2.waitForDisplayed();
        dynamicLoadingPage.footerAnker.isDisplayed();
        
    });


});

