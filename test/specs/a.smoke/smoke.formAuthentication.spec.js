import formAuthenticationPage from "../../pages/formAuthentication.page";


describe('As a User, smoke test the Form Authentication page', () => {

    it('Given, I go to the Form Authentication page', () => {
        formAuthenticationPage.goToFormAuthentication()
    });

    it('Then, I verify the elements exist', () => {
        formAuthenticationPage.formAuthenticationSubheader.waitForDisplayed();
        formAuthenticationPage.formAuthenticationUsername.waitForDisplayed();
        formAuthenticationPage.formAuthenticationUsernameField.waitForDisplayed();
        formAuthenticationPage.formAuthenticationPassword.waitForDisplayed();
        formAuthenticationPage.formAuthenticationPasswordField.waitForDisplayed();
        formAuthenticationPage.footerAnker.waitForDisplayed();

        
    });


});

