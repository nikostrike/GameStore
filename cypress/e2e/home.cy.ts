describe('Home Page UI Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8100/home');
    });
  
    it('should render the home page correctly', () => {
      cy.contains('h1', 'GameStore').should('be.visible');
      cy.contains('p', 'La Store Digital 👾').should('be.visible');
      cy.contains('h1', 'Bienvenido').should('be.visible');
      cy.contains('h1', '🎮 Elíge una categoría para comenzar:').should('be.visible');
      cy.contains('ion-button', 'CATEGORIAS').should('be.visible');
      cy.contains('p', 'Te gustaría conocer todo acerca de los Agentes de Valorant?');
      cy.contains('ion-button', 'Agentes de Valorant');
      cy.contains('ion-title', 'Ubicanos aquí 📍');
      cy.contains('ion-button', 'Nuestra tienda');
    });
  });
  

  describe('Home Page Navigation Tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8100/home');
    });
  
    it('should navigate to Valorant API page on button click', () => {
      cy.contains('ion-button', 'Agentes de Valorant').click();
      cy.url().should('include', '/api-valorant');
    });
  
    it('should navigate to Maps page on button click', () => {
      cy.contains('ion-button', 'Nuestra tienda').click();
      cy.url().should('include', '/maps');
    });
  
    it('should navigate to category pages on category card click', () => {
        cy.get('ion-card').contains('Deportes').click({ force: true });
        cy.url().should('include', '/categorias/deportes');
        
        cy.get('ion-card').contains('RPG').click({ force: true });
        cy.url().should('include', '/categorias/rpg');

        cy.get('ion-card').contains('Carreras').click({ force: true });
        cy.url().should('include', '/categorias/carreras');
        
        cy.get('ion-card').contains('Disparos').click({ force: true });
        cy.url().should('include', '/categorias/disparos');

        cy.get('ion-card').contains('Arcade').click({ force: true });
        cy.url().should('include', '/categorias/arcade');
        
        cy.get('ion-card').contains('Aventura').click({ force: true });
        cy.url().should('include', '/categorias/aventura');
      });
  });