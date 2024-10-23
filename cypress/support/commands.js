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
import 'cypress-iframe';
import '@testing-library/cypress/add-commands';



   Cypress.Commands.add('Login',(Username,password)=>{
     cy.session([Username,password] , () =>
     {
        cy.visit('https://comet.jainam.in/#/startup')
        cy.wait(1000)
        cy.get('.login-space-btn').click({force:true})
        cy.wait(4000)
        cy.get('.userid_wrap > .input_wrap > .text_form').clear().type('1126')
        cy.get('#LoginPassword').clear().type('Jainam@123')
        cy.xpath("//p[normalize-space()='Login Now']").click({ force: true });
        cy.wait(2000);
        cy.get('[formcontrolname="otp1"]').type('1');
        cy.get('[formcontrolname="otp2"]').type('2');
        cy.get('[formcontrolname="otp3"]').type('3');
        cy.get('[formcontrolname="otp4"]').type('4');

     })

    })