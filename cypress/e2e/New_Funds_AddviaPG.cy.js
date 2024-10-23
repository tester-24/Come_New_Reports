/// <reference types="cypress"/>
/// <reference types="cypress-iframe" /> 

import 'cypress-iframe';
import { LoginPage } from "./comet_login.cy.js"
const lp = new LoginPage

it.only('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click({force:true})
    //Login Flow
    cy.wait(1000)
    cy.get('.userid_wrap > .input_wrap > .text_form').type('wa5320')
    cy.get('#LoginPassword').type('Neel@123')
    cy.xpath("//p[normalize-space()='Login Now']").click({ force: true });
    // pin page
    cy.wait(2000);
    cy.get('[formcontrolname="otp1"]').type('1');
    cy.get('[formcontrolname="otp2"]').type('2');
    cy.get('[formcontrolname="otp3"]').type('3');
    cy.get('[formcontrolname="otp4"]').type('4');
   // click on funds
   cy.get(':nth-child(3) > .nav-link').click()
   //click on add vai PG
   cy.wait(3000)
   // cy.get('.payin-btn > .ng-star-inserted').invoke("removeAttr", "target").click()
    cy.window().then((win) => {
        cy.stub(win, 'open').callsFake((url) => {
          win.location.href = url;
        });
      });
      cy.wait(2000)
      cy.get('.payin-btn > .ng-star-inserted').click()
      
      // Verify that the page or URL is updated
      cy.wait(4000)
      cy.url().should('include', 'https://cash.jainam.in/Payment/MakePayment');
      //verify image is visible 
      cy.get('.graphics-image > img').should('be.visible')
      // click on bhim upi 
      cy.wait(1000)
      cy.get(':nth-child(2) > .text-center > .tab-div > .title_icon').should('be.visible')
      cy.get(':nth-child(2) > .text-center > .tab-div > .title_icon').click()
            
      //verify bank details fetch 
      cy.get('#ddUPIBankDetails').invoke('val').then((value) => {
        // Log the text or perform assertions
        cy.log(value);
      })
       //verify upi details fetch 
       cy.get('#txtUIPINo').invoke('val').then((value) => {
        // Log the text or perform assertions
        cy.log(value);
      })
    //enter amount
    cy.get('#txtUPIAmount').clear().type(1)
    //Click on submit
    cy.get('.graphics-image > img').should('be.visible')
    cy.get('#UPI > .pt-4 > #btnSubmit').click()
    //verify pop up comes
   //cy.wait(5000)
   cy.get('body').should('be.visible')
   cy.wait(2000)
//    cy.frameLoaded("razorpay-checkout-frame")
//    cy.wait(1000)
//    cy.iframe('razorpay-checkout-frame').find('/html/body/div[1]/div[1]/div[2]/div[2]/div/div/div/div/div[2]/div/div/div[2]/div[2]/div/div/form/div/div/button')
//    .click({force:true})
    // cy.get("#UPI button").click();
  //  cy.get("/html/body/div[1]/div[1]/div[2]/div[2]/div/div/div/div/div[2]/div/div/div[2]/div[2]/div/div/form/div/div/button").click({force:true});

//   cy.iframe().xpath('/html[1]/body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/button[1]').click()
        //   cy.visit("https://cash.jainam.in/Payment/MakePayment")
         //  cy.findByRole("button",{"name":"Submit"}).click()
        //   //Accessed from a protected iframe with source https://api.razorpay.com/v1/checkout/public?traffic_env=baseline&build=93f84df8b76999357bd8c981b609d07c9fe85c96&checkout_v2=1&new_session=1&session_token=46E00FB0E8217640C91FAEBD5531066ABD012C4DF27C2F865BF6105186A740C6912320042A0E0695446F53AB0CEECE1D84F1291CCD59EC0249019829528C480FB2863063312380F1F11CD8AD42FDA21C231731B25A868D0B25A586DDF6D5A525C0C337715BF3F94C
      
        // // cy.get("div:nth-child(3)>div:nth-child(1)>button:nth-child(1)").click({force:true})
        // cy.get("#scroll-container").within(() => {
        //     cy.get("div:nth-child(3)>div:nth-child(1)>button:nth-child(1)").click();
        //   });
   

//  cy.frameLoaded("razorpay-checkout-frame")
//     cy.iframe().find('/html/body/div[1]/div[1]/div[2]/div[2]/div/div/div/div/div[2]/div/div/div[2]/div[2]/div/div/form/div/div/button').click({force:true})
//     cy.wait(1000)
    //cy.wait(500)
    //cy.get('body').should('be.visible')
    //cy.screenshot()
  // Assuming the iFrame has an ID of 'myIframe' and the button has a class of 'verify-and-pay'

})