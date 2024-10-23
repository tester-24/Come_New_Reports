/// <reference types="cypress"/>

import { LoginPage } from "./login_1.cy";
const lp= new LoginPage 

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
    //Select Tradelog
    cy.get('[href="#/tradelog"]').click()
    cy.wait(1000)
    cy.scrollTo('top')
   //Reports for Year 2023-2024
     //Click on year dropdown
     cy.wait(1000)
     cy.xpath('/html/body/app-root/app-layout/div/app-tradelog/div/form/div[2]/div[1]/kendo-dropdownlist/button').click()
     //Select year 2023-2024
     cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').should('be.visible')
     cy.wait(500)
     cy.xpath('/html[1]/body[1]/app-root[1]/kendo-popup[1]/div[1]/kendo-list[1]/div[1]/ul[1]/li[2]').click()
     //Click on Download Button
     cy.get('.btn').should('be.visible')
     cy.get('.btn').click()
     cy.wait(3000)





})