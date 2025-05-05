describe('Visit Google Homepage', () => {
  it('should open Google and check the title', () => {
    cy.visit('https://www.google.com');
    cy.title().should('include', 'Google');
  });
});
