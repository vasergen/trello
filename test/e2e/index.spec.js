"use strict"

function indexPage() {
    this.getTitle = () => {
        return browser.getTitle()
    }

    this.getNavBarBrandText = () => element(by.css('.navbar-brand')).getText()
}

describe("Index Page", () => {
    let page = new indexPage()

    beforeEach(() => {
        browser.get('/#/')
    })

    it("check title", () => {
        expect(page.getTitle()).toBe('Trello')
    })

    it("check nav bar brand", () => {
        expect(page.getNavBarBrandText()).toBe('Trello')
    })
})