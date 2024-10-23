export class LoginPage {

    enterUsername() {
        //cy.get(':nth-child(2) > .text_form').clear()
        cy.get('.userid_wrap > .input_wrap > .text_form').type('1126')
        
    }

    enterPassword() {
        cy.get('#LoginPassword').type('Jainam@123')
        
    }

    clickLogin() {
        cy.xpath("//p[normalize-space()='Login Now']").click({ force: true });
    }
}