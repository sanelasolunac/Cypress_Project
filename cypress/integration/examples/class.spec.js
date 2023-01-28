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
	before(function () {
		// runs before all tests inside describe
		// setup test data or test context
		// seed or reset the database
		HomePage.loadHomePage()
	})

	after(function () {
		// runs after all tests inside describe block are done
		// test clean up
		// clean cookies or LocalStorage
	})

	beforeEach(function () {
		// runs before each it blocks in the describe
		// if you have 5 it, it will run 5 times before each it
	})

	afterEach(function () {
		// runs after each it block in the describe
	})

	it('should scroll down and up on the page', () => {
		// homePage inherits a BasePage, so we can call functions from BasePage
		HomePage.scrollToBottom()
		HomePage.wait(5000)
		HomePage.scrollToTop()
		HomePage.wait(3000)
	})
})
