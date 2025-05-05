Cypress.Commands.add('login', () => {
    cy.visit('https://demowebshop.tricentis.com/login');
    cy.get('#Email').type('user.3@example.com');
    cy.get('#Password').type('Password123');
    cy.get('input[value="Log in"]').click();
});
  