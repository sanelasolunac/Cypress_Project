class BasePage {
	static loadHomePage() {
		cy.visit('https://devexpress.github.io/testcafe/example/')
	}
	// it is parametrised, and you are sending how much time you want wait
	static wait(number) {
		cy.wait(number)
	}
}

class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('#submit-button').scrollIntoView()
	}

	static scrollToTop() {
		cy.get('header').scrollIntoView()
	}
}

describe('Abstraction With Classes', () => {
	it('should scroll down and up on the page', () => {
		// homePage inherits a BasePage, so we can call functions from BasePage
		HomePage.loadHomePage()
		HomePage.scrollToBottom()
		HomePage.wait(5000)
		HomePage.scrollToTop()
		HomePage.wait(3000)
	})
})
