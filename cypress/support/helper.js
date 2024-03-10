export function FindProduct(ProductName) {
    cy.get('#searchQuery').type(`${ProductName} {enter}`);
    cy.get('body').then(($body) => {
        if ($body.find('.mat-grid-tile').length > 0) {
            cy.get('.mat-grid-tile').find('button').click();
        } else {
            cy.log('No result found');
        }
    });
}