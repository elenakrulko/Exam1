import shoppingPage from '../support/pages/ShoppingPage'
import checkoutPage from '../support/pages/CheckoutPage'
import loginPage from "../support/pages/LoginPage";
import userData from "../fixtures/user.json";
import {faker} from '@faker-js/faker';
import {findProduct} from "../support/helper";

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
        loginPage.visit();
        loginPage.dismissPopupsL();
        loginPage.goToLoginForm();
        loginPage.fillLoginForm(email, password);
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
        loginPage.fillLoginForm(email, password);
        loginPage.submitLogin();

        findProduct("aaaaaa");
        shoppingPage.checkNoProduct();
    })
})

