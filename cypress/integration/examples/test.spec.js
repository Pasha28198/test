/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('test flow', () => {
    // https://on.cypress.io/type
    cy.get('.ui.green.button').first().click();
  })

})
