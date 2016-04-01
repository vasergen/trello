"use strict"

describe("Routes Spec", () => {
    beforeEach(() => {
        module("trello")
    })

    it("module ui.router should be defined", () => {
        expect(angular.module("ui.router")).toBeTruthy()
    })
})