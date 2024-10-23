/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
const lp = new LoginPage

it.only('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click({force:true})
    //Login Flow
    lp.enterUsername()
    lp.enterPassword()
    lp.clickLogin()
    cy.wait(2000);
    cy.get('[formcontrolname="otp1"]').type('1');
    cy.get('[formcontrolname="otp2"]').type('2');
    cy.get('[formcontrolname="otp3"]').type('3');
    cy.get('[formcontrolname="otp4"]').type('4');
   
    // click on Reports
      cy.wait(6000)
      cy.get('#ReportDropdown').click({ force: true })
    cy.scrollTo('top')
    //Click on tax p&l
    cy.get('[href="#/tax"]').should('be.visible')
    cy.get('[href="#/tax"]').click()
    cy.scrollTo('top')
    //Click on 1st drop down
    cy.wait(1500)
    cy.xpath('/html/body/app-root/app-layout/div/app-tax/div/form/div[2]/div[1]/kendo-dropdownlist/button').click({force:true})
    //select equity option
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[1]').click()
    cy.scrollTo('top')

    //click on year dropdown
    cy.xpath('/html/body/app-root/app-layout/div/app-tax/div/form/div[2]/div[2]/kendo-dropdownlist/button').click()
    //Select year 2023-2024
    cy.wait(1000)
    cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]/span[1]').click()
    cy.scrollTo('top')
    cy.wait(500)
    cy.xpath('/html/body/app-root/app-layout/div/app-tax/div/form/div[2]/div[3]/input').type('wa5320')
    //Click on view button 
    cy.get('.btn').should('be.visible')
    cy.get('.btn').click()
    cy.scrollTo(300,300)
    
    //Click on Download excel
    cy.wait(5000)
    cy.get(':nth-child(2) > .download-summary-btn').should('be.visible')
    cy.get(':nth-child(2) > .download-summary-btn').click()

    //Click on Download PDF
   cy.wait(2000)
   cy.get(':nth-child(3) > .download-summary-btn').should('be.visible')
   cy.get(':nth-child(3) > .download-summary-btn').click()

   //Click on SEND excel MAIL
   cy.wait(2000)
   cy.get(':nth-child(4) > .download-summary-btn').should('be.visible')
   cy.get(':nth-child(4) > .download-summary-btn').click()
   
   //Click on SEND PDF MAIL
   cy.wait(2000)
   cy.get(':nth-child(5) > .download-summary-btn').should('be.visible')
   cy.get(':nth-child(5) > .download-summary-btn').click()
   cy.scrollTo('top')
})
