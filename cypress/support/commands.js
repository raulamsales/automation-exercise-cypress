Cypress.Commands.add('createTestUser', () => {
  cy.get('#slider').should('be.visible')
  cy.get('a[href="/login"]').click()

  cy.contains('h2', 'New User Signup!').should('be.visible')

  cy.get('[data-qa="signup-name"]').type('uFNc~a36n2')
  cy.get('[data-qa="signup-email"]').type('uFNc~a36n2@mail.com')
  cy.get('[data-qa="signup-button"]').click()

  cy.contains('h2', 'Enter Account Information').should('be.visible')

  cy.get('#id_gender1').check()
  cy.get('[data-qa="password"]').type('uFNc~a36n2')
  cy.get('[data-qa="days"]').select('10')
  cy.get('[data-qa="months"]').select('5')
  cy.get('[data-qa="years"]').select('1995')

  cy.get('[data-qa="first_name"]').type('Test')
  cy.get('[data-qa="last_name"]').type('User')
  cy.get('[data-qa="company"]').type('Test Company')
  cy.get('[data-qa="address"]').type('123 Test Street')
  cy.get('[data-qa="address2"]').type('Apartment 1')
  cy.get('[data-qa="country"]').select('Canada')
  cy.get('[data-qa="state"]').type('Ontario')
  cy.get('[data-qa="city"]').type('Toronto')
  cy.get('[data-qa="zipcode"]').type('M5V1A1')
  cy.get('[data-qa="mobile_number"]').type('1234567890')

  cy.get('[data-qa="create-account"]').click()

  cy.get('[data-qa="account-created"]').should('be.visible')
  cy.get('[data-qa="continue-button"]').click()

  cy.contains('Logged in as').should('be.visible')

  cy.get('a[href="/logout"]').click()

  cy.get('a[href="/login"]').should('be.visible')
})
