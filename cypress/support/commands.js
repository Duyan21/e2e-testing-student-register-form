// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload'
Cypress.Commands.add('emailEmpty', () => { 
    cy.get('#userEmail').clear()
})

Cypress.Commands.add('hobbiesEmpty', () => { 
    cy.get('#hobbies-checkbox-1').click('center', {force:true})
})

Cypress.Commands.add('addressEmpty', () => { 
    cy.get('#currentAddress').clear()
})

Cypress.Commands.add('firstNameEmpty', () => {
    cy.get('#firstName').clear()   
})

Cypress.Commands.add('lastNameEmpty', () => {
    cy.get('#lastName').clear()   
})

Cypress.Commands.add('mobileEmpty', () => {
    cy.get('#userNumber').clear()   
})