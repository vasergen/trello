"use strict"

describe("Check Config Service", () => {
    let ServiceConfig

    beforeEach(() => {
        module("trello")

        inject((_ServiceConfig_) => {
            ServiceConfig = _ServiceConfig_
        })
    })

    it("ServiceConfig should be defined", () => {
        expect(ServiceConfig).toBeTruthy()
    })

    it("should have function getFirebaseBaseUrl", () => {
        let isFunction = angular.isFunction(ServiceConfig.getFirebaseBaseUrl)
        expect(isFunction).toBe(true)
    })

    it("function getFirebaseBaseUrl should return url ", () => {
        let firebaseUrl = ServiceConfig.getFirebaseBaseUrl()
        expect(firebaseUrl).toMatch(/^https?:\/\//)
    })
})