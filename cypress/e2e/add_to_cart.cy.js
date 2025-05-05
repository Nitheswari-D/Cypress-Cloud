describe('Add a specific Jewelry product to cart', () => {
    it('should add product ID 14 to the cart', () => {
      // Visit homepage (or wherever you’re starting from)
      cy.visit('https://demowebshop.tricentis.com');
  
      // login to website using custom commands
      cy.login();

      // Click on the 'Jewelry' menu link
      cy.get('.block-category-navigation ul.list').contains('Jewelry').click();

  
      // Wait for product grid to load
      cy.get('.product-grid').should('exist');
  
      // Find the product with data-productid="14" and click its Add to cart button
      cy.get('.product-item[data-productid="14"]')
        .find('input[value="Add to cart"]')
        .click();
  
      // Assert that the product was added to the cart (check notification bar or cart quantity)
      cy.get('.bar-notification.success')
        .should('be.visible')
        .and('contain', 'The product has been added to your shopping cart');
    });
  });
  