"use strict"

describe("Check Module lodash-fp", () => {
    let _

    beforeEach(() => {
        module("lodash-fp")

        inject((___) => {
            _ = ___
        })
    })

    it("lodashfp module should be defined", () => {
        expect(angular.module("lodash-fp")).toBeTruthy()
    })

    it("underscore should be defined ", () => {
        expect(_).toBeTruthy()
    })
})