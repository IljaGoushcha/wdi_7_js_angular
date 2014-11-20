var UsersPage = function() {
    this.pageHeader = element(by.tagName('h1'));
    this.users = element.all(by.repeater('user in users'));
    this.firstNameField = element(by.css('#first_name'));
    this.lastNameField = element(by.css('#last_name'));
    this.submitBtn = element(by.css('form[name="createUserForm"] button[type="submit"]'));

    this.get = function() {
        browser.get('http://localhost:5000/#/users');
    };
};

describe('Users page', function() {
    var usersPage;

    beforeEach(function() {
        usersPage = new UsersPage();
        usersPage.get();
    });

    it('should have a h1 tag with the correct text', function() {
        expect(usersPage.pageHeader.getText()).toEqual('Users page');
    });

    it('should have two users', function() {
        expect(usersPage.users.count()).toEqual(2);
    });

    it('should add a local user', function() {
        expect(usersPage.users.count()).toEqual(2);

        usersPage.firstNameField.sendKeys('John');
        usersPage.lastNameField.sendKeys('Smith');

        usersPage.submitBtn.click();

        expect(usersPage.users.count()).toEqual(3);
    });
});
