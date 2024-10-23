beforeEach(() =>{

  cy.Login('1126','Jainam@123')
  cy.wait(3000)
  cy.visit('https://comet.jainam.in/#/ledger')
})

it('Test 1: Access the dashboard page', () => {
   cy.log("test1")
   cy.wait(3000)
   
  })
it('Test 2: Access the dashboard page', () => {
  cy.log("test2")
}) 
