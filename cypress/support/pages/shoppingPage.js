class ShoppingPage {
    get SelectMoreObg() {
        return cy.get('.mat-select-arrow-wrapper');
    }

    get Select36() {
        return cy.get('.mat-option-text').contains('36');
    }

    get SelectProd() {
        return cy.get('.mat-grid-tile');
    }

    get GoToBasket() {
        return cy.get('[routerlink="/basket"]');
    }

    get SearchEmpty() {
        return cy.get('.noResultText');
    }

    selectSizeAndAddToCart() {
        this.SelectMoreObg.click()
        this.Select36.click()
        this.SelectProd.first().find('button').click()
        this.SelectProd.last().find('button').click()
        this.GoToBasket.click()
    }

    CheckNoProduct() {
        this.SearchEmpty.should('contain.text', ' No results found ');
    }
}

export default new ShoppingPage()