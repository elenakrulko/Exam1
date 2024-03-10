import ShoppingPage from '../support/pages/shoppingPage'
import CheckoutPage from '../support/pages/checkoutPage'
import LoginPage from "../support/pages/loginPage";
import userData from "../fixtures/user.json";
import {faker} from '@faker-js/faker';
import {FindProduct} from "../support/helper";

describe('Shopping and Order', () => {
    const email = userData.email;
    const password = userData.password;
    const country = faker.location.country();
    const name = faker.person.firstName();
    const phone = faker.number.int({min: 1000000, max: 1000000000});
    const zip = faker.number.int({min: 10000, max: 99999});
    const street = faker.location.street();
    const city = faker.location.city();
    const state = faker.location.state();
    const cardName = faker.finance.accountName();
    const cardNumber = faker.number.int({min: 1000000000000000, max: 9999999999999999});

    it('Shopping positive', () => {
        LoginPage.visit();
        LoginPage.dismissPopupsL();
        LoginPage.goToLoginForm();
        LoginPage.fillLoginForm(email, password);
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
        LoginPage.fillLoginForm(email, password);
        LoginPage.submitLogin();

        FindProduct("aaaaaa");
        ShoppingPage.CheckNoProduct();
    })
})

