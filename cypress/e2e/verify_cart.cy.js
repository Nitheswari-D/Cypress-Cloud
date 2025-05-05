describe('Verify specific item in shopping cart', () => {
    it('Should log in and check if Black & White Diamond Heart is in the cart', () => {
      // Visit the login page
      cy.visit('https://demowebshop.tricentis.com/login');
  
      // login
      cy.login();
  
      // Navigate to the shopping cart
      cy.get('#topcartlink .cart-label').click();

      // Verify that "Black & White Diamond Heart" exists in the cart
      cy.get('.cart-item-row').should('contain.text', 'Black & White Diamond Heart');
    });
  });
  