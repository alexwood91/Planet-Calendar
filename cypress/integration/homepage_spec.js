describe('Home page', function() {
  it('has a title', function() {
    cy.visit('/');
    cy.contains('Planet');
  });
});
