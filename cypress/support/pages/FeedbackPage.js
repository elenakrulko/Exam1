class feedbackPage {
    get openPanel() {
        return cy.get('[aria-label="Open Sidenav"]');
    }

    get goToFeedback() {
        return cy.get('.menu-text.truncate').contains("Customer Feedback");
    }

    get setComment() {
        return cy.get('#comment');
    }

    get submitButton() {
        return cy.get('#submitButton');
    }

    get checkFeedback() {
        return cy.get('.cdk-overlay-pane');
    }

    setRating(ratingValue) {
        cy.get('#rating').then($element => {
            const elementWidth = $element.width();
            // Here you can adjust the calculation for x based on the specific rating value if needed
            cy.get('#rating').click({force: true, x: elementWidth - 5, y: 10});
        });
    }

    solveCaptcha() {
        cy.get('#captcha').invoke('text').then(captchaText => {
            const captchaResult = eval(captchaText);
            cy.get('#captchaControl').type(captchaResult.toString());
        });
    }

    feedback(ratingValue) {
        this.openPanel.click();
        this.goToFeedback.click();
        this.setComment.type("Thanks");
        this.setRating(ratingValue);
        this.solveCaptcha();
        this.submitButton.click();
        this.checkFeedback.contains('Thank you so much for your amazing 5-star feedback!').should('be.visible');
    }
}

export default new feedbackPage()