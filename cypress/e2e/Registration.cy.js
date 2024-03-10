import {faker} from '@faker-js/faker';
import registrationPage from '../support/pages/RegistrationPage';

describe('Exam', () => {
    const userEmail = faker.internet.email();
    const password = faker.internet.password();
    const secAns = faker.animal.dog();

    it('Registration positive', () => {
        registrationPage.visit();
        registrationPage.dismissPopupsR();
        registrationPage.goToRegistrationForm();
        registrationPage.fillRegistrationForm(userEmail, password, secAns);
        registrationPage.submitRegistration();
        registrationPage.verifyRegistrationSuccess();
    });

    it('Registration negative without email ', () => {
        registrationPage.visit();
        registrationPage.dismissPopupsR();
        registrationPage.goToRegistrationForm();
        registrationPage.fillRegistrationForm('not email', password, secAns);
        registrationPage.checkSubmitButtonIsDisabled();
    });
    it('Registration negative low password', () => {
        registrationPage.visit();
        registrationPage.dismissPopupsR();
        registrationPage.goToRegistrationForm();
        registrationPage.fillRegistrationForm(userEmail, '1', secAns);
        registrationPage.checkSubmitButtonIsDisabled();
    });
    it('Registration negative without Security Answer', () => {
        registrationPage.visit();
        registrationPage.dismissPopupsR();
        registrationPage.goToRegistrationForm();
        registrationPage.fillRegistrationForm(userEmail, password, null);
        registrationPage.checkSubmitButtonIsDisabled();
    });
});

