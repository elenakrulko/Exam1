class loginPage {
    get dismissButton() {
        return cy.contains('Dismiss');
    }

    get ccDismissButton() {
        return cy.get('.cc-dismiss');
    }

    get navbarAccountButton() {
        return cy.get('#navbarAccount');
    }

    get navbarLoginButton() {
        return cy.get('#navbarLoginButton');
    }

    get loginFill() {
        return cy.get('#email');
    }

    get passwordFill() {
        return cy.get('#password');
    }

    get loginButton() {
        return cy.get('#loginButton');
    }

    get textNotCorrect() {
        return cy.get('.error.ng-star-inserted');
    }

    get accountForm() {
        return cy.get('.mat-menu-content');
    }


    visit() {
        cy.visit('/');
    }

    dismissPopupsL() {
        this.dismissButton.click();
        this.ccDismissButton.click();
    }

    goToLoginForm() {
        this.navbarAccountButton.click();
        this.navbarLoginButton.click();
    }

    fillLoginForm(email, password) {
        if (email) this.loginFill.type(email);
        if (password) this.passwordFill.type(password);
    }

    submitLogin() {
        this.loginButton.click();
    }

    verifyLoginSuccess(email) {
        this.navbarAccountButton.click();
        this.accountForm.should('contain', email);
    }

    checkLoginButtonIsDisabled() {
        this.loginButton.should('be.disabled');
    }

    verifyLoginError() {
        this.textNotCorrect.should('contain.text', 'Invalid email or password.');
    }
    regUser(email, password) {
        cy.request({
            method: 'POST',
            url: '/api/Users/',
            body: {
                email: email,
                password: password
            },
            failOnStatusCode: false
        });
    }
}

export default new loginPage()
