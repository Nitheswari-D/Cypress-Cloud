describe('Visit Webpage and Title Check', () => {
  it('Should load the website and have the correct page title', () => {
    cy.visit('https://demowebshop.tricentis.com/desktops'); 
    cy.title().should('include', 'Demo Web Shop. Desktops');
  });
});
