describe('Browser actions', () => {
	it('Should load correct url', () => {
		cy.visit('http://example.com/')
	})

	it('should check correct url', () => {
		cy.url().should('include', 'example.com')
	})

	it('should check for content element on the page', () => {
		cy.get('h1').should('be.visible')
	})
})
