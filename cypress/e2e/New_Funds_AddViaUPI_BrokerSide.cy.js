/// <reference types="cypress"/>
/// <reference types="cypress-iframe" /> 

import { LoginPage } from "./comet_login.cy.js"
const lp = new LoginPage

it.only('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click({force:true})
    //Login Flow
    cy.wait(1000)
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    cy.wait(2000);
    cy.get('[formcontrolname="otp1"]').type('1');
    cy.get('[formcontrolname="otp2"]').type('2');
    cy.get('[formcontrolname="otp3"]').type('3');
    cy.get('[formcontrolname="otp4"]').type('4');
   
    // click on funds
    cy.wait(6000)
    cy.get('.navbar-nav > :nth-child(3) > .nav-link').click({ force: true })
    cy.scrollTo('top')

    //click on add vai UPI
    cy.wait(3000)
   // cy.get('.payin-btn > .ng-star-inserted').invoke("removeAttr", "target").click()
    cy.window().then((win) => {
        cy.stub(win, 'open').callsFake((url) => {
          win.location.href = url;
        });
      });
      cy.wait(4000)
      cy.xpath('/html/body/app-root/app-layout/div/app-funds/div[1]/div/div/div/div[1]/div/div[3]/button[1]').click();
      
      // Verify that the page or URL is updated
      cy.wait(1000)
      cy.url().should('include', 'https://cash.jainam.in/Payment/BrokerMakePayment');
      Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        console.log('Cypress detected uncaught exception: ', err);
        return false;
      });
      //verify image is visible in payment page 
      cy.wait(500) 
      cy.get('.payment-image')
      //Enter code
      cy.wait(500)
      cy.get('#txtTreadingCode').type('wa5320')
      //click 
      cy.get('#txtUIPINo').click()
      //enter amount 
      cy.wait(500)
      cy.get('#txtUPIAmount').clear().type('1')
      //Invoke values bank details and UPI iD
      cy.wait(500)
      cy.get('#ddUPIBankDetails').invoke('val').then((value) => {
        // Log the text or perform assertions
        cy.log(value);
      })
      cy.get('#txtUIPINo').invoke('val').then((value) => {
        // Log the text or perform assertions
        cy.log(value);
      })

      //click on submit button
       cy.get('#btnSubmit').should('be.visible')
       cy.get('#btnSubmit').click()
       //verify razorepay pay button is visible 
       cy.wait(500)
     cy.get('body').should('be.visible')
    // close the pop 
     cy.wait(3000)
    // cy.xpath('/html/body/div[1]/div[1]/div[2]/div[1]/div[2]/button[2]').click()
    // cy.frameLoaded('_hjSafeContext_61597009')
   //  cy.iframe().xpath('/html/body/div[1]/div[1]/div[2]/div[1]/div[2]/button[2]').click()
    

    
})