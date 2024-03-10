import {faker} from '@faker-js/faker';
import RegistrationPage from '../support/pages/registrationPage';

describe('Exam', () => {
    const userEmail = faker.internet.email();
    const password = faker.internet.password();
    const secAns = faker.animal.dog();

    it('Registration positive', () => {
        RegistrationPage.visit();
        RegistrationPage.dismissPopupsR();
        RegistrationPage.goToRegistrationForm();
        RegistrationPage.fillRegistrationForm(userEmail, password, secAns);
        RegistrationPage.submitRegistration();
        RegistrationPage.verifyRegistrationSuccess();
    });

    it('Registration negative without email ', () => {
        RegistrationPage.visit();
        RegistrationPage.dismissPopupsR();
        RegistrationPage.goToRegistrationForm();
        RegistrationPage.fillRegistrationForm('not email', password, secAns);
        RegistrationPage.checkSubmitButtonIsDisabled();
    });
    it('Registration negative low password', () => {
        RegistrationPage.visit();
        RegistrationPage.dismissPopupsR();
        RegistrationPage.goToRegistrationForm();
        RegistrationPage.fillRegistrationForm(userEmail, '1', secAns);
        RegistrationPage.checkSubmitButtonIsDisabled();
    });
    it('Registration negative without Security Answer', () => {
        RegistrationPage.visit();
        RegistrationPage.dismissPopupsR();
        RegistrationPage.goToRegistrationForm();
        RegistrationPage.fillRegistrationForm(userEmail, password, null);
        RegistrationPage.checkSubmitButtonIsDisabled();
    });
});

