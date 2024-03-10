class CheckoutPage {
    get checkoutNavigate() {
        return cy.get('#checkoutButton');
    }
    get AddNewAddress() {
        return cy.get('.btn-new-address');
    }
    get AddCountry() {
        return cy.get('[placeholder="Please provide a country."]');
    }
    get AddName() {
        return cy.get('[placeholder="Please provide a name."]');
    }
    get AddMobile() {
        return cy.get('[placeholder="Please provide a mobile number."]');
    }
    get AddZip() {
        return cy.get('[placeholder="Please provide a ZIP code."]');
    }
    get AddStreet() {
        return cy.get('[placeholder="Please provide an address."]');
    }
    get AddCity() {
        return cy.get('[placeholder="Please provide a city."]');
    }
    get AddState() {
        return cy.get('[placeholder="Please provide a state."]');
    }
    get submitButton() {
        return cy.get('#submitButton');
    }
    get ChoseAddr() {
        return cy.get('.mat-radio-label').first();
    }
    get GoNext() {
        return cy.get('.btn-next');
    }
    get ChoseMet() {
        return cy.get('.mat-radio-container').first();
    }
    get GoNext2() {
        return cy.get('.nextButton');
    }
    get AddCard() {
        return cy.get('.mat-expansion-panel-header-title').contains('Add new card');
    }
    get AddCardName() {
        return cy.get('.ng-star-inserted.mat-expanded').find('[type="text"]');
    }
    get AddCardNumber() {
        return cy.get('.ng-star-inserted.mat-expanded').find('[type="number"]');
    }
    get SetCardData() {
        return cy.get('.ng-star-inserted.mat-expanded').find('select');
    }
    get Confirmation() {
        return cy.get('.confirmation');
    }
    navigate() {
        this.checkoutNavigate.click();
    }

    fillAddress(country, name, phone, zip, street, city, state) {
        this.AddNewAddress.click();
        this.AddCountry.type(country);
        this.AddName.type(name);
        this.AddMobile.type(phone);
        this.AddZip.type(zip);
        this.AddStreet.type(street);
        this.AddCity.type(city);
        this.AddState.type(state);
        this.submitButton.click();
    }

    selectPaymentAndConfirm(cardName, cardNumber) {
        this.ChoseAddr.click();
        this.GoNext.click();
        this.ChoseMet.click();
        this.GoNext2.click();
        this.AddCard.click();
        this.AddCardName.type(cardName);
        this.AddCardNumber.type(cardNumber);
        this.SetCardData.first().select('5');
        this.SetCardData.last().select('2091');
        this.submitButton.click();
        this.ChoseMet.click();
        this.GoNext2.click();
        this.checkoutNavigate.click();
    }

    verifyOrderConfirmation() {
        this.Confirmation.should('have.text', 'Thank you for your purchase!');
    }
}

export default new CheckoutPage()
