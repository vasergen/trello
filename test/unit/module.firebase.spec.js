"use strict"

describe("Check Module firebase", () => {
    let Firebase

    beforeEach(() => {
        module('firebase')

        inject((_Firebase_) => {
            Firebase = _Firebase_
        })
    })

    it("firebase module should be defined", () => {
        expect(angular.module("firebase")).toBeTruthy()
    })

    it("Firebase service should be defined", () => {
        expect(Firebase).toBeTruthy()
    })
})