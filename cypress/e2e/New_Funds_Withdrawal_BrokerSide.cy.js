/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
const lp = new LoginPage

it.only('Comet_Jainam', () => {
  cy.viewport(1500, 1000);

    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click({force:true})
    //Login Flow
    cy.wait(2000)
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    cy.wait(2000);
    cy.get('[formcontrolname="otp1"]').type('1');
    cy.get('[formcontrolname="otp2"]').type('2');
    cy.get('[formcontrolname="otp3"]').type('3');
    cy.get('[formcontrolname="otp4"]').type('4');
   
    // click on funds
    cy.wait(10000)
    cy.get('.navbar-nav > :nth-child(3) > .nav-link').click({ force: true })
    cy.scrollTo('top')
    //click on withdraw
    cy.wait(5000)
    cy.get('.mt-5 > .pay-in > .payin-btn > .submit-btn').should('be.visible')
    cy.get('.mt-5 > .pay-in > .payin-btn > .submit-btn').click({force:true})
    Cypress.on('uncaught:exception', (err) => {
        // returning false here prevents Cypress from
        // failing the test
        console.log('Cypress detected uncaught exception: ', err);
        return false;
      });

    //enter code 
    cy.wait(1000)
    cy.get('.col-lg-4 > .ng-untouched').type('m3903')
    //click on submit button
    cy.get('.col-lg-2 > .btn').should('be.visible')
    cy.get('.col-lg-2 > .btn').click({force:true})

    //if data is there it cheks 
    cy.wait(3000)
    if(cy.xpath('/html/body/app-root/app-layout/div/app-withdrawal/section/div/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr').its('length').should('be.greaterThan', 0))
      {
        cy.wait(3000)       
       // cy.xpath('/html/body/app-root/app-layout/div/app-withdrawal/section/div/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table').scrollTo(500,0)
       // cy.xpath('/html/body/app-root/app-layout/div/app-withdrawal/section/div/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr/td[6]/div/kendo-numerictextbox/input').should('be.visible')
        cy.xpath('/html/body/app-root/app-layout/div/app-withdrawal/section/div/div[2]/kendo-grid/div/kendo-grid-list/div/div[1]/table/tbody/tr[1]/td[6]/div/kendo-numerictextbox/input').clear().type(1)
        //click on submit button
        cy.get('.text-end > .btn').should('be.visible')
        cy.get('.text-end > .btn').click()
        // check for sucess message 
        cy.wait(2000)
        cy.get('.ng-trigger').should('be.visible')

        //delete request
        cy.get('[data-kendo-grid-item-index="1"] > [data-kendo-grid-column-index="0"] > .icon-button > img').click()
        //click on delete option
        cy.get('.k-actions > .btn-primary').click()
        //requst wa sdelete sucessufully
        cy.wait(1000)
        cy.get('.ng-trigger').should('be.visible')
 }
    else{
      cy.log('no data found')
    }

    
})
