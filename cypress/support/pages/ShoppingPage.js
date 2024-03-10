class shoppingPage {
    get selectMoreObg() {
        return cy.get('.mat-select-arrow-wrapper');
    }

    get select36() {
        return cy.get('.mat-option-text').contains('36');
    }

    get selectProd() {
        return cy.get('.mat-grid-tile');
    }

    get goToBasket() {
        return cy.get('[routerlink="/basket"]');
    }

    get searchEmpty() {
        return cy.get('.noResultText');
    }

    selectSizeAndAddToCart() {
        this.selectMoreObg.click()
        this.select36.click()
        this.selectProd.first().find('button').click()
        this.selectProd.last().find('button').click()
        this.goToBasket.click()
    }

    checkNoProduct() {
        this.searchEmpty.should('contain.text', ' No results found ');
    }
}

export default new shoppingPage()