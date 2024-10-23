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

    //click on profile
    cy.wait(1000)
    cy.get('.user > [_ngcontent-ng-c2278619692=""] > #navbarDropdown').should('be.visible')
    cy.get('.user > [_ngcontent-ng-c2278619692=""] > #navbarDropdown').click()

    //click on my details
    cy.wait(1000)
    cy.xpath('/html/body/app-root/app-layout/app-headerpanel/div/div/nav/div/ul/li[5]/div/div/div/div[2]/ul/li[4]/a').click()
   
    // assertion for label
    cy.get('.row > .col-md-7').should('be.visible')
   
    //Assertion for image
    cy.get('.male-profile-new-img').should('be.visible')
   
    // //Assertion for personal details
    cy.get('#mydetails > :nth-child(1)').should('be.visible')
   
    //  //Assertion for personal details table 
    cy.get('#mydetails > .row.mb-4').should('be.visible')

   //assertion for bank details
   cy.scrollTo(0,300)
   cy.get('#BankIndicators > .carousel-inner > .active').should('be.visible')
  
   // //assertion for dp details
   cy.get('#DPIndicators > .carousel-inner > .active').should('be.visible')

   // Broker details
   cy.scrollTo(0,300)
   cy.get('#BrokerageIndicators > .carousel-inner > .active').should('be.visible')

   //Nominee details
   cy.scrollTo(0,300)
   cy.get('#NomineeIndicators').should('be.visible')
   cy.scrollTo('top')
})