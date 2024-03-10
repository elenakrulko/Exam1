import loginPage from '../support/pages/LoginPage';
import userData from '../fixtures/user.json';
import feedbackPage from '../support/pages/FeedbackPage';

describe('Feedback', () => {
    it('Feedback', () => {
        const email = userData.email;
        const password = userData.password;

        loginPage.visit();
        loginPage.dismissPopupsL();
        loginPage.goToLoginForm();
        loginPage.fillLoginForm(email, password);
        loginPage.submitLogin();
        feedbackPage.feedback();
    })
})