describe('Custom Commands', () => {
	it('should login to application using cypress command', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.login('username', 'password')
	})

	it('should login to application using cypress command 2', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.login('Sanela', 'SanelaSanela')
	})
})
