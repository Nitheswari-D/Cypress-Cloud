describe('Demo Web Shop - Login Test', function () {
  beforeEach(function () {
    cy.fixture('logindata').then((data) => {
      this.data = data;
    });
  });

  it('should navigate to login page and log in with valid credentials', function () {
    // Visit the homepage
    cy.visit('https://demowebshop.tricentis.com');

    // Click the "Log in" link (anchor tag)
    cy.get('a.ico-login').click(); 

    // Verify we're on the login page
    cy.url().should('include', '/login'); 

    // Fill in the email
    cy.get('#Email').type(this.data.email); 

    // Fill in the password
    cy.get('#Password').type(this.data.password); 

    // Click the login button
    cy.get('input.login-button').click();

    // Ensures "Log out" text is present anywhere on the page
    cy.contains('Log out').should('exist');  

    //logout
    cy.get('a.ico-logout').click();

  });
});
  