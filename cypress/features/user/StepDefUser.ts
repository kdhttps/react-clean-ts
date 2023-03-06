import { Given, When, Then, Before } from 'cypress-cucumber-preprocessor/steps'
import { getUsers } from '../../mocks/getUsers'

let users = []

Before(() => {
  cy.fixture('users').then((data) => {
    users = data
  })
})

Given('Navigate users page', () => {
  cy.visit('/dashboard/users', { failOnStatusCode: false })
})

When('User list is featched', () => {
  getUsers(200, users)
  cy.wait('@getUsers')
})

Then('User table should show user name', () => {
  cy.get('h4').contains('User')
  cy.get('table').contains('Chelsey Dietrich')
})
