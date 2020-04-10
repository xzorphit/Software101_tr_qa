import dropDownPage from "../../pages/dropDown.page";

describe('As a User, test the dropdown page\'s default setting', () => {

    it('Given, I go to the Dropdown page', () => {
        dropDownPage.goToDropDown();
    });

    it('Then, I verify the the default option is selected', () => {
        dropDownPage.assert(dropDownPage.dropDownField.$$('option')[0].isSelected());

        dropDownPage.assert(dropDownPage.dropDownField.$$('option')[0].getText().includes('Please select'));

        //loop through all options, if the text !== Please selectan option, then it should not be selected

        dropDownPage.dropDownField.$$('option').forEach((opt)=>{
            if (opt.getText()!== 'Please select an option') {
                dropDownPage.assert(!opt.isSelected())
                
            }
        })
    });
});


describe('As a User, test the dropdown page\'s option 1', () => {

    it('Given, I go to the Dropdown page', () => {
        dropDownPage.goToDropDown();
    });

    it('When I select option 1', () => {
        dropDownPage.dropDownField.selectByVisibleText('Option 1')
    });

    it('Then, I verify that option 1 is selected', () => {
        dropDownPage.assert(dropDownPage.dropDownField.$$('option')[1].isSelected());

        dropDownPage.dropDownField.$$('option').forEach((opt)=>{
            if (opt.getText()!== 'Option 1') {
                dropDownPage.assert(!opt.isSelected())
                
            }
        })
    });
});


/*  describe('As a user, I test option 1 on the Dropdown page', () => {
    
    it('Given, I go to the dropdown page', () => {
        dropDownPage.goToDropDown();
        
    });

    it('When, I click the drop down field', () => {
        dropDownPage.dropDownField.waitForDisplayed();
        dropDownPage.dropDownField.click();
        
    });

    it('And, I select option 1', () => {
        dropDownPage.dropDownOption1.waitForDisplayed();
        dropDownPage.dropDownOption1.click();
        
    });

    it('Then, I validate that option 1 is selected', () => {
        dropDownPage.dropDownOption1.isSelected();

    });

    it('Then, I validate that option 1 is visible', () => {
        dropDownPage.dropDownOption1.isDisplayed();
    });
});   */


describe('As a User, test the dropdown page\'s option 2', () => {

    it('Given, I go to the Dropdown page', () => {
        dropDownPage.goToDropDown();
    });

    it('When I select option 1', () => {
        dropDownPage.dropDownField.selectByVisibleText('Option 2')
    });

    it('Then, I verify that option 1 is selected', () => {
        dropDownPage.assert(dropDownPage.dropDownField.$$('option')[2].isSelected());

        dropDownPage.dropDownField.$$('option').forEach((opt)=>{
            if (opt.getText()!== 'Option 2') {
                dropDownPage.assert(!opt.isSelected())
                
            }
        })
    });
});