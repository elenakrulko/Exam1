import {faker} from '@faker-js/faker';
import registrationPage from '../support/pages/RegistrationPage';
import loginPage from "../support/pages/LoginPage";
import userData from "../fixtures/user.json";
import shoppingPage from '../support/pages/ShoppingPage';
import checkoutPage from '../support/pages/CheckoutPage';
import {findProduct} from "../support/helper";
import feedbackPage from '../support/pages/FeedbackPage';

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

    it('Login positive', () => {
        loginPage.regUser(userData.email, userData.password);
        loginPage.visit();
        loginPage.dismissPopupsL();
        loginPage.goToLoginForm();
        loginPage.fillLoginForm(emailR, passwordR);
        loginPage.submitLogin();
        loginPage.verifyLoginSuccess(emailR);
    });
    it('Login negative without password', () => {
        loginPage.visit();
        loginPage.dismissPopupsL();
        loginPage.goToLoginForm();
        loginPage.fillLoginForm(emailR, null);
        loginPage.checkLoginButtonIsDisabled();
    });

    it('Login negative without login', () => {
        loginPage.visit();
        loginPage.dismissPopupsL();
        loginPage.goToLoginForm();
        loginPage.fillLoginForm(null, passwordR);
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

    it('Shopping', () => {
        loginPage.visit();
        loginPage.dismissPopupsL();
        loginPage.goToLoginForm();
        loginPage.fillLoginForm(emailR, passwordR);
        loginPage.submitLogin();

        shoppingPage.selectSizeAndAddToCart();

        checkoutPage.navigate();
        checkoutPage.fillAddress(country, name, phone, zip, street, city, state);
        checkoutPage.selectPaymentAndConfirm(cardName, cardNumber);
        checkoutPage.verifyOrderConfirmation();
    })
    it('Shopping positive', () => {
        loginPage.visit();
        loginPage.dismissPopupsL();
        loginPage.goToLoginForm();
        loginPage.fillLoginForm(emailR, passwordR);
        loginPage.submitLogin();

        findProduct("Apple Pomace");
        shoppingPage.selectSizeAndAddToCart();
        checkoutPage.navigate();
        checkoutPage.fillAddress(country, name, phone, zip, street, city, state);
        checkoutPage.selectPaymentAndConfirm(cardName, cardNumber);
        checkoutPage.verifyOrderConfirmation();
    })

    it('Shopping negative', () => {
        loginPage.visit();
        loginPage.dismissPopupsL();
        loginPage.goToLoginForm();
        loginPage.fillLoginForm(emailR, passwordR);
        loginPage.submitLogin();

        findProduct("aaaaaa");
        shoppingPage.checkNoProduct();
    })
    it('Feedback', () => {
        loginPage.visit();
        loginPage.dismissPopupsL();
        loginPage.goToLoginForm();
        loginPage.fillLoginForm(emailR, passwordR);
        loginPage.submitLogin();
        feedbackPage.feedback();
    })
})

