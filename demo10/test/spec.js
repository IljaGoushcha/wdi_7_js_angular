var DemoPage = function() {
    this.pageHeader = element(by.tagName('h2'));
    this.users = element.all(by.repeater('user in users'));
    this.firstNameField = element(by.css('#first_name'));
    this.lastNameField = element(by.css('#last_name'));
    this.submitBtn = element(by.css('form[name="createUserForm"] button[type="submit"]'));

    this.get = function() {
        browser.get('http://localhost:5000');
    };
};

describe('demo page', function() {
    var demoPage;

    beforeEach(function() {
        demoPage = new DemoPage();
        demoPage.get();
    });

    it('should have a h2 tag with the correct text', function() {
        expect(demoPage.pageHeader.getText()).toEqual('Users');
    });

    it('should have three users', function() {
        expect(demoPage.users.count()).toEqual(3);
    });
<<<<<<< HEAD

    it('should add a local user', function() {
=======
    
    it('should add a user', function() {
>>>>>>> 8ef709cf85e245f01a50979fa56565d183770eb1
        expect(demoPage.users.count()).toEqual(3);

        demoPage.firstNameField.sendKeys('John');
        demoPage.lastNameField.sendKeys('Smith');

        demoPage.submitBtn.click();

        expect(demoPage.users.count()).toEqual(4);
    });
});
