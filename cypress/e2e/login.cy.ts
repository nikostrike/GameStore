describe('Login Page UI Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100/login');
  });

  it('should render the login page correctly', () => {
    cy.contains('h1', 'GameStore').should('be.visible');
    cy.contains('p', 'La Store Digital 👾').should('be.visible');
    cy.contains('h1', 'Inicie sesión para comenzar la aventura!').should('be.visible');
    cy.contains('ion-button', 'Ingresar').should('be.visible');
    cy.contains('ion-button', 'Registrarse').should('be.visible');
  });
});


describe('Navigation to Register Page Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8100/login');
  });

  it('should navigate to the register page on click', () => {
    cy.contains('ion-button', 'Registrarse').click();
    cy.url().should('include', '/registrar');
  });
});
