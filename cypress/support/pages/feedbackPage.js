class FeedbackPage {
    feedback() {
        cy.get('[aria-label="Open Sidenav"]').click();
        cy.get('.menu-text.truncate').contains("Customer Feedback").click();
        cy.get('#comment').type("Thanks");
        cy.get('#rating').then($element => {
            const elementWidth = $element.width();
            cy.get('#rating').click({force: true, x: elementWidth - 5, y: 10});
        });
        cy.get('#captcha').invoke('text').then(captchaText => {
            const captchaResult = eval(captchaText);
            cy.get('#captchaControl').type(captchaResult);
        });
        cy.get('#submitButton').click();
        cy.get('.cdk-overlay-pane').contains('Thank you so much for your amazing 5-star feedback!').should('be.visible');
    }
}

export default new FeedbackPage()