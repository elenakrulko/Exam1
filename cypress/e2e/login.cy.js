import LoginPage from '../support/pages/loginPage';
import userData from '../fixtures/user.json';

describe('Login', () => {
    const email = userData.email;
    const password = userData.password;

    it('Login positive', () => {
        LoginPage.visit();
        LoginPage.dismissPopupsL();
        LoginPage.goToLoginForm();
        LoginPage.fillLoginForm(email, password);
        LoginPage.submitLogin();
        LoginPage.verifyLoginSuccess(email);
    });
    it('Login negative without password', () => {
        LoginPage.visit();
        LoginPage.dismissPopupsL();
        LoginPage.goToLoginForm();
        LoginPage.fillLoginForm(email, null);
        LoginPage.checkLoginButtonIsDisabled();
    });

    it('Login negative without login', () => {
        LoginPage.visit();
        LoginPage.dismissPopupsL();
        LoginPage.goToLoginForm();
        LoginPage.fillLoginForm(null, password);
        LoginPage.checkLoginButtonIsDisabled();
    });

    it('Login negative with incorrect credentials and check error message', () => {
        LoginPage.visit();
        LoginPage.dismissPopupsL();
        LoginPage.goToLoginForm();
        LoginPage.fillLoginForm('fhrfh', 'dgsvd');
        LoginPage.submitLogin();
        LoginPage.verifyLoginError();
    });
});
