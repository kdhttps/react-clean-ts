export const getUsers = (responseCode: number, responseData = [], delay = 0) => {
  cy.intercept('GET', `${Cypress.env('REACT_APP_API_URL')}/users`, {
    statusCode: responseCode,
    body: responseData,
    delay,
  }).as('getUsers')
}
