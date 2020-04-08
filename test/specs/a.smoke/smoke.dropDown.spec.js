import dropDownPage from "../../pages/dropDown.page";


describe('As a User, smoke test the Dropdown page', () => {

    it('Given, I go to the Dropdown page', () => {
        dropDownPage.goToDropDown()
    });

    it('Then, I verify the elements exist', () => {
        dropDownPage.dropDownField.isDisplayed();

        //validate with Chai.. attempted validation..????
        //dropDownPage.dropDownOptions.should.equal(3);

        //Validate without Chai
        dropDownPage.assert(dropDownPage.dropDownOptions.length==3);
        dropDownPage.assert(dropDownPage.dropDownOptions.length!==2);
        dropDownPage.assert(dropDownPage.dropDownOptions.length!==4);
        dropDownPage.footerAnker.isDisplayed();

    });


});

