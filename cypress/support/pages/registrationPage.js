class RegistrationPage {
    get dismissButtonR() {
        return cy.contains('Dismiss');
    }

    get ccDismissButtonR() {
        return cy.get('.cc-dismiss');
    }

    get navbarAccountButton() {
        return cy.get('#navbarAccount');
    }

    get navbarLoginButton() {
        return cy.get('#navbarLoginButton');
    }

    get newCustomerLink() {
        return cy.get('#newCustomerLink');
    }

    get emailInput() {
        return cy.get('#emailControl');
    }

    get privacySlider() {
        return cy.get('.mat-slide-toggle-thumb');
    }

    get passwordInput() {
        return cy.get('#passwordControl');
    }

    get repeatPasswordInput() {
        return cy.get('#repeatPasswordControl');
    }

    get securityQuestionDropdown() {
        return cy.get('#mat-select-2');
    }

    get securityQuestionOption() {
        return cy.get('#mat-option-9');
    }

    get securityAnswerInput() {
        return cy.get('#securityAnswerControl');
    }

    get registerButton() {
        return cy.get('#registerButton');
    }

    get registrationSuccessMessage() {
        return cy.contains('Registration completed successfully. You can now log in.');
    }

    visit() {
        cy.visit('/');
    }

    dismissPopupsR() {
        this.dismissButtonR.click();
        this.ccDismissButtonR.click();
    }

    goToRegistrationForm() {
        this.navbarAccountButton.click();
        this.navbarLoginButton.click();
        this.newCustomerLink.click();
    }

    fillRegistrationForm(email, password, secAns) {
        this.emailInput.type(email);
        this.privacySlider.click();
        this.passwordInput.type(password);
        this.repeatPasswordInput.type(password);
        this.securityQuestionDropdown.click();
        this.securityQuestionOption.click();
        if (secAns) this.securityAnswerInput.type(secAns);
    }

    submitRegistration() {
        this.registerButton.click();
    }

    verifyRegistrationSuccess() {
        this.registrationSuccessMessage.should('be.visible');
    }

    checkSubmitButtonIsDisabled() {
        this.registerButton.should('be.disabled');
    }
}

export default new RegistrationPage()
