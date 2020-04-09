import formAuthenticationPage from "../../pages/formAuthentication.page";
import inputs from "../../data/inputs.json"


describe('As a user, test the invalid username input', () => {


    it('Given, I am on the Form Authentication page', () => {
        formAuthenticationPage.goToFormAuthentication()
    });

    it('When, I input the incorrect username', () => {

        formAuthenticationPage.formAuthenticationUsernameField.waitForDisplayed();
        
        formAuthenticationPage.formAuthenticationUsernameField.setValue(inputs[0].un);
        
    });

    it('And, I input the correct password', () => {

        formAuthenticationPage.formAuthenticationPasswordField.waitForDisplayed();

       formAuthenticationPage.formAuthenticationPasswordField.setValue(inputs[0].pw);
    });

    it('And, I click Login', () => {
        formAuthenticationPage.formAuthenticationLoginBtn.click();
    });

    it('Then, I validate the invalid username message', () => {
        formAuthenticationPage.formAuthenticationFlash.waitForDisplayed();

        //formAuthenticationPage.formAuthenticationFlash.getText().includes(inputs[0].expectedBanner);


        //formAuthenticationPage.assert(formAuthenticationPage.formAuthenticationFlash.getText().match(inputs[0].expectedBanner));

        formAuthenticationPage.assert(formAuthenticationPage.formAuthenticationFlash.getText().includes(inputs[0].expectedBanner))

    });
});
