"use strict"

describe("ServiceHelper Spec", () => {
    let ServiceHelper

    beforeEach(() => {
        module("trello")

        inject((_ServiceHelper_) => {
            ServiceHelper = _ServiceHelper_
        })
    })

    it("should have a ServiceHelper", () => {
        expect(ServiceHelper).toBeTruthy()
    })

    it("check API is defined", () => {
        let properties = [
            'trimName',
            'timestamp',
            'randomString',
            'slug'
        ]

        for(let property in ServiceHelper) {
            let index = _.indexOf(property, properties)
            expect(index).toBeGreaterThan(-1)
        }
    })

    describe("Check trimName Function", () => {
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

    describe("Check timestamp Function", () => {
        it("should have timestamp function", () => {
            let isFunction = angular.isFunction(ServiceHelper.timestamp)
            expect(isFunction).toBe(true)
        })

        it("timestamp should be a number", () => {
            let isNumber = angular.isNumber(ServiceHelper.timestamp())
            expect(isNumber).toBe(true)
        })
    })

    describe("Check randomString Function", () => {
        it("should have randomString function", () => {
            let isFunction = angular.isFunction(ServiceHelper.randomString)
            expect(isFunction).toBe(true)
        })

        it("should return a string", () => {
            let isString = angular.isString(ServiceHelper.randomString())
            expect(isString).toBe(true)

        })

        it("should generate n times different result", () => {
            let count = 10
            let strArr = []
            _.times(() => {
                strArr.push(ServiceHelper.randomString())
            }, count)
            expect(_.uniq(strArr).length).toBe(count)
        })
    })

    describe("Check slug function", () => {
        it("slug should not have spaces", () => {
            let slug = ServiceHelper.slug(' asd ASD ')
            expect(slug.indexOf(' ')).toBe(-1)
        })

        it("should return '' for undefined", () => {
            let slug = ServiceHelper.slug(undefined)
            expect(slug).toBe('')
        })

        it("should return '' for false", () => {
            let slug = ServiceHelper.slug(false)
            expect(slug).toBe('')
        })

        it("should return '' for true", () => {
            let slug = ServiceHelper.slug(true)
            expect(slug).toBe('')
        })

        it("should return '' for null", () => {
            let slug = ServiceHelper.slug(null)
            expect(slug).toBe('')
        })

        it("should return '' for object", () => {
            let slug = ServiceHelper.slug({})
            expect(slug).toBe('')
        })
    })
})