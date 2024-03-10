import {faker} from '@faker-js/faker';
import RegistrationPage from '../support/pages/registrationPage';
import LoginPage from "../support/pages/loginPage";
import userData from "../fixtures/user.json";
import ShoppingPage from '../support/pages/shoppingPage';
import CheckoutPage from '../support/pages/checkoutPage';
import {FindProduct} from "../support/helper";
import FeedbackPage from '../support/pages/feedbackPage';

describe('Exam', () => {
    const emailR = userData.email;
    const passwordR = userData.password;
    const userEmail = faker.internet.email();
    const password = faker.internet.password();
    const secAns = faker.animal.dog();
    const country = faker.location.country();
    const name = faker.person.firstName();
    const phone = faker.number.int({min: 1000000, max: 1000000000});
    const zip = faker.number.int({min: 10000, max: 99999});
    const street = faker.location.street();
    const city = faker.location.city();
    const state = faker.location.state();
    const cardName = faker.finance.accountName();
    const cardNumber = faker.number.int({min: 1000000000000000, max: 9999999999999999});

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

    it('Login positive', () => {
        LoginPage.visit();
        LoginPage.dismissPopupsL();
        LoginPage.goToLoginForm();
        LoginPage.fillLoginForm(emailR, passwordR);
        LoginPage.submitLogin();
        LoginPage.verifyLoginSuccess(emailR);
    });
    it('Login negative without password', () => {
        LoginPage.visit();
        LoginPage.dismissPopupsL();
        LoginPage.goToLoginForm();
        LoginPage.fillLoginForm(emailR, null);
        LoginPage.checkLoginButtonIsDisabled();
    });

    it('Login negative without login', () => {
        LoginPage.visit();
        LoginPage.dismissPopupsL();
        LoginPage.goToLoginForm();
        LoginPage.fillLoginForm(null, passwordR);
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

    it('Shopping', () => {
        LoginPage.visit();
        LoginPage.dismissPopupsL();
        LoginPage.goToLoginForm();
        LoginPage.fillLoginForm(emailR, passwordR);
        LoginPage.submitLogin();

        ShoppingPage.selectSizeAndAddToCart();

        CheckoutPage.navigate();
        CheckoutPage.fillAddress(country, name, phone, zip, street, city, state);
        CheckoutPage.selectPaymentAndConfirm(cardName, cardNumber);
        CheckoutPage.verifyOrderConfirmation();
    })
    it('Shopping positive', () => {
        LoginPage.visit();
        LoginPage.dismissPopupsL();
        LoginPage.goToLoginForm();
        LoginPage.fillLoginForm(emailR, passwordR);
        LoginPage.submitLogin();

        FindProduct("Apple Pomace");
        ShoppingPage.selectSizeAndAddToCart();
        CheckoutPage.navigate();
        CheckoutPage.fillAddress(country, name, phone, zip, street, city, state);
        CheckoutPage.selectPaymentAndConfirm(cardName, cardNumber);
        CheckoutPage.verifyOrderConfirmation();
    })

    it('Shopping negative', () => {
        LoginPage.visit();
        LoginPage.dismissPopupsL();
        LoginPage.goToLoginForm();
        LoginPage.fillLoginForm(emailR, passwordR);
        LoginPage.submitLogin();

        FindProduct("aaaaaa");
        ShoppingPage.CheckNoProduct();
    })
    it('Feedback', () => {
        LoginPage.visit();
        LoginPage.dismissPopupsL();
        LoginPage.goToLoginForm();
        LoginPage.fillLoginForm(emailR, passwordR);
        LoginPage.submitLogin();
        FeedbackPage.feedback();
    })
})

