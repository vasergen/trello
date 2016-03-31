"use strict"

xdescribe("Check ServiceBoard", () => { //TODO: remove x
    let ServiceBoard
    let ServiceFirebase

    beforeEach(() => {
        module("trello")

        inject((_ServiceBoard_, _ServiceFirebase_) => {
            ServiceBoard = _ServiceBoard_
            ServiceFirebase = _ServiceFirebase_
        })
    })

    it("ServiceBoard should be defined", () => {
        expect(ServiceBoard).toBeTruthy()
    })

    it("check API", () => {
        let properties = [
            "ref",
            "getScheme",
            "push",
            "remove",
            "onValue"
        ]

        properties.forEach((property) => {
            expect(ServiceBoard[property]).toBeDefined()
        })
    })

    describe("Check push", () => {
        beforeEach(() => {
            spyOn(ServiceFirebase, "push")
        })

        it("ServiceFirebase.push should be called", () => {
            ServiceBoard.push({name: 'item'})
            expect(ServiceFirebase.push).toHaveBeenCalled()
        })

        it("push should take item with all keys that is in getSchema", () => {
            ServiceBoard.push({})
            let itemScheme = ServiceFirebase.push.calls.mostRecent().args[1]
            let itemKeys = Object.keys(itemScheme)
            let schemeKeys = Object.keys(ServiceBoard.getScheme())
            let difference = _.difference(itemKeys, schemeKeys)

            expect(difference).toEqual([])
        })
    })

    describe("check ServiceBoard.remove", () => {
        beforeEach(() => {
            spyOn(ServiceFirebase, 'remove')
        })

        it("should execute ServiceFirebase.remove", () => {
            let ref = ServiceBoard.ref
            let key = 'key'
            let fn = () => {}

            ServiceBoard.remove(key, fn)
            expect(ServiceFirebase.remove).toHaveBeenCalledWith(ref, key, fn)
        })
    })

    describe("check ServiceBoard.onValue", () => {
        beforeEach(() => {
            spyOn(ServiceFirebase, 'onValue')
        })

        it("should execute ServiceFirebase.onValue", () => {
            let ref = ServiceBoard.ref
            let fn = () => {}
            let fnErr = () => {}
            ServiceBoard.onValue(fn, fnErr)
            expect(ServiceFirebase.onValue).toHaveBeenCalledWith(ref, fn, fnErr)
        })
    })

    describe("Check ServiceBoard.update", () => {
        beforeEach(() => {
            spyOn(ServiceFirebase, 'update')
        })

        it("ServiceFirebase.update should be executed", () => {
            let key = 'key'
            let item = {name: 'item'}

            ServiceBoard.update(key, item)
            expect(ServiceFirebase.update).toHaveBeenCalled()
        })
    })

    describe("Check validate", () => {
        it("validate should return string error for item without name", () => {
            let res = ServiceBoard.validate({})
            let isString = angular.isString(res)
            expect(isString).toBe(true)
        })

        it("validate should return string error for item with empty name", () => {
            let res = ServiceBoard.validate({name: ''})
            let isString = angular.isString(res)
            expect(isString).toBe(true)
        })

        it("validate should return false for item with not empty name", () => {
            let res = ServiceBoard.validate({name: 'item'})
            let isString = angular.isString(res)
            expect(isString).toBe(false)
        })
    })
})








