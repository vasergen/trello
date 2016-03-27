"use strict"

describe("App Spec", () => {

    it("module trello should be defined", () => {
        expect(angular.module("trello")).toBeTruthy()
    })

    it("angular.mock should be defined", () => {
        expect(angular.mock).toBeTruthy()
    })
})