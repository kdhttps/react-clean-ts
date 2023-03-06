import {
  Given,
  When,
  Then,
  Before,
  defineParameterType,
} from '@badeball/cypress-cucumber-preprocessor'
import { getUsers } from '../../mocks/getUsers'

let users = []

defineParameterType({
  name: 'name',
  regexp: /^[a-zA-Z]*$/,
  transformer: function (value: string): string {
    return value
  },
})

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

Then('User table should show user name {string}', (name) => {
  cy.get('h4').contains('User')
  cy.get('table').contains('Chelsey')
})
