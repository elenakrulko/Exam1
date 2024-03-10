import loginPage from '../support/pages/LoginPage';
import userData from '../fixtures/user.json';

describe('Login', () => {
    const email = userData.email;
    const password = userData.password;

    it('Login positive', () => {
        loginPage.regUser(userData.email, userData.password);
        loginPage.visit();
        loginPage.dismissPopupsL();
        loginPage.goToLoginForm();
        loginPage.fillLoginForm(email, password);
        loginPage.submitLogin();
        loginPage.verifyLoginSuccess(email);
    });
    it('Login negative without password', () => {
        loginPage.visit();
        loginPage.dismissPopupsL();
        loginPage.goToLoginForm();
        loginPage.fillLoginForm(email, null);
        loginPage.checkLoginButtonIsDisabled();
    });

    it('Login negative without login', () => {
        loginPage.visit();
        loginPage.dismissPopupsL();
        loginPage.goToLoginForm();
        loginPage.fillLoginForm(null, password);
        loginPage.checkLoginButtonIsDisabled();
    });

    it('Login negative with incorrect credentials and check error message', () => {
        loginPage.visit();
        loginPage.dismissPopupsL();
        loginPage.goToLoginForm();
        loginPage.fillLoginForm('fhrfh', 'dgsvd');
        loginPage.submitLogin();
        loginPage.verifyLoginError();
    });
});
