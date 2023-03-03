import { getUsers } from '../mocks/getUsers'

describe('test users', () => {
  let users = []
  beforeEach(function () {
    cy.fixture('users').then((data) => {
      users = data
    })
  })

  it('should show currect users list', () => {
    cy.visit('/dashboard/users', { failOnStatusCode: false })

    getUsers(200, users)
    cy.wait('@getUsers')

    cy.get('h4').contains('User')
    cy.get('tr#tr5').contains('Chelsey Dietrich')
    cy.get('button[aria-label="Go to next page"]').click()
    cy.get('tr#tr7').contains('Kurtis Weissnat')
  })
})
