describe('Navigation', () => {
  it('should navigate to the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/home')

    // The page should contain the text "Home Page"
    cy.get('h1').contains('Home Page')
  })
})
