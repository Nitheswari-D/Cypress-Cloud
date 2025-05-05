describe('Demo Web Shop - Registration Test', function () {
  //fixture data
  beforeEach(function () {
    cy.fixture('RegistrationData').then(function (data) {
      this.data = data;
    });
  });

  it('should register a new user successfully', function () {
    // Visit the homepage
    cy.visit('https://demowebshop.tricentis.com');

    // Click the "Register" link (anchor tag)
    cy.get('a.ico-register').click(); 

    // Select gender (Male)
    cy.get('#gender-male').check(); 

    // Fill in the first name
    cy.get('#FirstName').type(this.data.firstName);

    // Fill in the last name
    cy.get('#LastName').type(this.data.lastName);

    // Fill in the email address
    cy.get('#Email').type(this.data.email); // Use a valid email for the test

    // Fill in the password
    cy.get('#Password').type(this.data.password); // Replace with a valid test password

    // Fill in the confirm password
    cy.get('#ConfirmPassword').type(this.data.confirmPassword); // Must match the password

    // Click the Register button
    cy.get('#register-button').click();

    cy.contains(this.data.email).should('exist'); 
    
    cy.get('a.ico-logout').click();

  });
});
  