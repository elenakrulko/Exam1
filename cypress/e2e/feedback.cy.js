import LoginPage from '../support/pages/loginPage';
import userData from '../fixtures/user.json';
import FeedbackPage from '../support/pages/feedbackPage';

describe('Feedback', () => {
    it('Feedback', () => {
        const email = userData.email;
        const password = userData.password;

        LoginPage.visit();
        LoginPage.dismissPopupsL();
        LoginPage.goToLoginForm();
        LoginPage.fillLoginForm(email, password);
        LoginPage.submitLogin();
        FeedbackPage.feedback();
    })
})