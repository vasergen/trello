"use strict"

describe("Service Firebase", () => {
    let ServiceFirebase
    let Firebase
    let _
    let ServiceHelper
    let $q

    beforeEach(() => {
        module("trello")

        inject((_ServiceFirebase_, _Firebase_, ___, _ServiceHelper_, $injector) => {
            ServiceFirebase = _ServiceFirebase_
            Firebase = _Firebase_
            _ = ___
            ServiceHelper = _ServiceHelper_
            $q = $injector.get('$q')
        })
    })

    describe("Check API Is Defined", () => {
        it("check API is defined", () => {
            let properties = [
                'ref',
                'push',
                'remove',
                'onValue'
            ]

            for(let property in ServiceFirebase) {
                let index = _.indexOf(property, properties)

                expect(index).toBeGreaterThan(-1)
            }
        })
    })

    describe("Check push", () => {
        let refMock

        beforeEach(() => {
            refMock = {
                push: function() {}
            }

            spyOn(refMock, 'push').and.callFake(() => {
                let deffered = $q.defer()
                deffered.resolve('remote result')
                return deffered.promise
            })
        })

        it("should execute ref.push", () => {
            ServiceFirebase.push(refMock, {})
            expect(refMock.push).toHaveBeenCalled()
        })

        it("should not execute ref.push", () => {
            ServiceFirebase.push(refMock, {}, () => "something")
            expect(refMock.push).not.toHaveBeenCalled()
        })
    })

    describe("Check remove", () => {
        let refMock

        beforeEach(() => {
            refMock = {
                child: function() {}
            }
            let remove = jasmine.createSpy('remove')
            spyOn(refMock, 'child').and.returnValue({remove: remove})
        })

        it("should execute child", () => {
            ServiceFirebase.remove(refMock, 'key')
            expect(refMock.child).toHaveBeenCalledWith('key')
        })

        it("should execute remove", () => {
            let fn = () => {}
            ServiceFirebase.remove(refMock, 'key', fn)
            expect(refMock.child().remove).toHaveBeenCalledWith(fn)
        })
    })

    describe("Check onValue", () => {
        let ref

        beforeEach(() => {
            ref = {
                on: function() {}
            }

            spyOn(ref, 'on')
        })

        it("should execute on function", () => {
            ServiceFirebase.onValue(ref)
            expect(ref.on).toHaveBeenCalled()
        })

        it("should execute on with first parameter value", () => {
            let fn = () => {}
            let fnErr = () => {}
            ServiceFirebase.onValue(ref, fn, fnErr)

            let arg0 = ref.on.calls.mostRecent().args[0]
            let arg1 = ref.on.calls.mostRecent().args[1]
            let arg2 = ref.on.calls.mostRecent().args[2]

            expect(arg0).toBe('value')
            expect(angular.isFunction(arg1)).toBe(true)
            expect(arg2).toBe(fnErr)
        })
    })

})










