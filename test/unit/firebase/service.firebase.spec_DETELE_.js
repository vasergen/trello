"use strict"

xdescribe("Service Firebase", () => { //TODO: remove x
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
                'onValue',
                'update'
            ]

            for(let property in ServiceFirebase) {
                let index = _.indexOf(property, properties)

                expect(index).toBeGreaterThan(-1)
            }
        })
    })

    describe("Check push", () => {
        let ref

        beforeEach(() => {
            ref = {
                push: function() {}
            }

            spyOn(ref, 'push').and.callFake(() => {
                let deffered = $q.defer()
                deffered.resolve('remote result')
                return deffered.promise
            })
        })

        it("should execute ref.push", () => {
            let item = {}
            ServiceFirebase.push(ref, item)
            expect(ref.push).toHaveBeenCalledWith(item)
        })

        it("should not execute ref.push", () => {
            ServiceFirebase.push(ref, {}, () => "something")
            expect(ref.push).not.toHaveBeenCalled()
        })
    })

    describe("Check remove", () => {
        let ref

        beforeEach(() => {
            ref = {
                child: function() {}
            }
            let remove = jasmine.createSpy('remove')
            spyOn(ref, 'child').and.returnValue({remove: remove})
        })

        it("should execute child", () => {
            ServiceFirebase.remove(ref, 'key')
            expect(ref.child).toHaveBeenCalledWith('key')
        })

        it("should execute remove", () => {
            let fn = () => {}
            ServiceFirebase.remove(ref, 'key', fn)
            expect(ref.child().remove).toHaveBeenCalledWith(fn)
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

    describe("Check Update", () => {
        let ref
        let update


        beforeEach(() => {
            update = jasmine.createSpy('update').and.callFake(() => {
                let deffered = $q.defer()
                deffered.resolve('remote result')
                return deffered.promise
            })

            ref = {
                child: function() {
                    return {
                        update: update
                    }
                }
            }

            spyOn(ref, 'child').and.callThrough()
        })

        it("ref.child should be executed", () => {
            let key = 'key'
            let item = {}
            let fn = () => {}
            ServiceFirebase.update(ref, key, item, fn)

            expect(ref.child).toHaveBeenCalledWith(key)
        })

        it("ref.child.update should be executed", () => {
            let key = 'key'
            let item = {}
            let validateFn = () => {}
            ServiceFirebase.update(ref, key, item, validateFn)

            expect(update).toHaveBeenCalledWith(item)
        })

        it("ref.child.update should not be executed", () => {
            let key = 'key'
            let item = {}
            let validateFn = () => {return 'something'}
            ServiceFirebase.update(ref, key, item, validateFn)
            expect(update).not.toHaveBeenCalled()
        })
    })
})