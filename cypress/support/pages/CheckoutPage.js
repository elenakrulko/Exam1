class checkoutPage {
    get checkoutNavigate() {
        return cy.get('#checkoutButton');
    }
    get addNewAddress() {
        return cy.get('.btn-new-address');
    }
    get addCountry() {
        return cy.get('[placeholder="Please provide a country."]');
    }
    get addName() {
        return cy.get('[placeholder="Please provide a name."]');
    }
    get addMobile() {
        return cy.get('[placeholder="Please provide a mobile number."]');
    }
    get addZip() {
        return cy.get('[placeholder="Please provide a ZIP code."]');
    }
    get addStreet() {
        return cy.get('[placeholder="Please provide an address."]');
    }
    get addCity() {
        return cy.get('[placeholder="Please provide a city."]');
    }
    get addState() {
        return cy.get('[placeholder="Please provide a state."]');
    }
    get submitButton() {
        return cy.get('#submitButton');
    }
    get choseAddr() {
        return cy.get('.mat-radio-label').first();
    }
    get goNext() {
        return cy.get('.btn-next');
    }
    get choseMet() {
        return cy.get('.mat-radio-container').first();
    }
    get goNext2() {
        return cy.get('.nextButton');
    }
    get addCard() {
        return cy.get('.mat-expansion-panel-header-title').contains('Add new card');
    }
    get addCardName() {
        return cy.get('.ng-star-inserted.mat-expanded').find('[type="text"]');
    }
    get addCardNumber() {
        return cy.get('.ng-star-inserted.mat-expanded').find('[type="number"]');
    }
    get setCardData() {
        return cy.get('.ng-star-inserted.mat-expanded').find('select');
    }
    get confirmation() {
        return cy.get('.confirmation');
    }
    navigate() {
        this.checkoutNavigate.click();
    }

    fillAddress(country, name, phone, zip, street, city, state) {
        this.addNewAddress.click();
        this.addCountry.type(country);
        this.addName.type(name);
        this.addMobile.type(phone);
        this.addZip.type(zip);
        this.addStreet.type(street);
        this.addCity.type(city);
        this.addState.type(state);
        this.submitButton.click();
    }

    selectPaymentAndConfirm(cardName, cardNumber) {
        this.choseAddr.click();
        this.goNext.click();
        this.choseMet.click();
        this.goNext2.click();
        this.addCard.click();
        this.addCardName.type(cardName);
        this.addCardNumber.type(cardNumber);
        this.setCardData.first().select('5');
        this.setCardData.last().select('2091');
        this.submitButton.click();
        this.choseMet.click();
        this.goNext2.click();
        this.checkoutNavigate.click();
    }

    verifyOrderConfirmation() {
        this.confirmation.should('have.text', 'Thank you for your purchase!');
    }
}

export default new checkoutPage()
