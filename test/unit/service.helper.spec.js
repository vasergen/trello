"use strict"

describe("ServiceHelper Spec", () => {
    let ServiceHelper

    beforeEach(() => {
        module("trello")

        inject((_ServiceHelper_) => {
            ServiceHelper = _ServiceHelper_
        })
    })

    //trimName
    describe("Check trimName Function", () => {
        it("should have a ServiceHelper", () => {
            expect(ServiceHelper).toBeTruthy()
        })

        it("should have a trimName function", () => {
            expect(angular.isFunction(ServiceHelper.trimName)).toBe(true)
        })

        it("trimName should trim property name in object", () => {
            let obj = {
                name: ' Vasyl '
            }

            let name = ServiceHelper.trimName(obj)
            expect(name).toBe('Vasyl')
        })

        it("if property does not exist return empty string", () => {
            let name = ServiceHelper.trimName({})
            expect(name).toBe('')
        })
    })

    //timestamp
    describe("Check timestamp Function", () => {

        it("should have timestamp function", () => {
            expect(angular.isFunction(ServiceHelper.timestamp)).toBe(true)
        })

        it("timestamp should be a number", () => {
            let isNumber = angular.isNumber(ServiceHelper.timestamp())
            expect(isNumber).toBe(true)
        })
    })

    //randomString
    describe("Check randomString Function", () => {
        it("should have randomString function", () => {
            let isFunction = angular.isFunction(ServiceHelper.randomString)
            expect(isFunction).toBe(true)
        })

        it("should return a string", () => {
            let isString = angular.isString(ServiceHelper.randomString())
            expect(isString).toBe(true)

        })

        it("should generate random string", () => {
            let count = 10
            let strArr = []
            _.times(() => {
                strArr.push(ServiceHelper.randomString())
            }, count)
            expect(_.uniq(strArr).length).toBe(count)
        })
    })
})