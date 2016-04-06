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
        let actual = !!ServiceHelper
        let expected = true

        expect(actual).toEqual(expected)
    })

    it("check API is defined", () => {
        let properties = [
            'trimName',
            'timestamp',
            'randomString',
            'slug',
            'logError'
        ]
        let keys = Object.keys(ServiceHelper)

        let actual = _.difference(properties, keys)
        let expected = []

        expect(actual).toEqual(expected)
    })

    describe("Check trimName Function", () => {
        it("should have a trimName function", () => {
            let actual = angular.isFunction(ServiceHelper.trimName)
            let expected = true

            expect(actual).toEqual(expected)
        })

        it("trimName should trim property name in object", () => {
            let obj = { name: ' Bob ' }
            let actual = ServiceHelper.trimName(obj)
            let expected = 'Bob'

            expect(actual).toEqual(expected)
        })

        it("if property does not exist return empty string", () => {
            let actual = ServiceHelper.trimName({})
            let expected = ''

            expect(actual).toBe(expected)
        })
    })

    describe("Check timestamp Function", () => {

        it("should have timestamp function", () => {
            let actual = angular.isFunction(ServiceHelper.timestamp)
            let expected = true
            expect(actual).toEqual(expected)
        })

        it("timestamp should be a number", () => {
            let actual = angular.isNumber(ServiceHelper.timestamp())
            let expected = true

            expect(actual).toEqual(expected)
        })
    })

    describe("Check randomString Function", () => {
        it("should have randomString function", () => {
            let actual = angular.isFunction(ServiceHelper.randomString)
            let expected = true

            expect(actual).toEqual(expected)
        })

        it("should return a string", () => {
            let actual = angular.isString(ServiceHelper.randomString())
            let expected = true

            expect(actual).toBe(expected)
        })

        it("should generate n times different result", () => {
            let strArr = []
            _.times(() => {
                strArr.push(ServiceHelper.randomString())
            }, 10)

            let actual = _.uniq(strArr).length
            let expected = 10

            expect(actual).toBe(expected)
        })
    })

    describe("Check slug function", () => {
        it("slug should not have spaces", () => {
            let slug = ServiceHelper.slug(' asd ASD ')
            let actual = slug.indexOf(' ')
            let expected = -1

            expect(actual).toBe(expected)
        })

        it("should return '' for undefined", () => {
            let actual = ServiceHelper.slug(undefined)
            let expected = ''

            expect(actual).toBe(expected)
        })

        it("should return '' for false", () => {
            let actual = ServiceHelper.slug(false)
            let expected = ''

            expect(actual).toBe(expected)
        })

        it("should return '' for true", () => {
            let actual = ServiceHelper.slug(true)
            let expected = ''

            expect(actual).toBe(expected)
        })

        it("should return '' for null", () => {
            let actual = ServiceHelper.slug(null)
            let expected = ''

            expect(actual).toBe(expected)
        })

        it("should return '' for object", () => {
            let actual = ServiceHelper.slug({})
            let expected = ''

            expect(actual).toBe(expected)
        })
    })

    describe("Check function logError", () => {
        beforeEach(() => {
            spyOn(console, 'error')
        })

        it("should execute console.error", () => {
            let err = new Error('Something wrong happened!')
            ServiceHelper.logError(err)

            expect(console.error).toHaveBeenCalledWith(err)
        })
    })
})