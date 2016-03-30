"use strict"

angular.module("trello")
    .factory("ServiceCard", function(ServiceFirebase, ServiceList, ServiceHelper) {
        return function(boardKey, listKey) {
            let refList = new ServiceList(boardKey).ref
            let ref = refList.child(listKey).child('cards')

            let getScheme = () => {
                return {
                    id: ServiceHelper.randomString(),
                    name: '',
                    slug: '',
                    timestamp: ServiceHelper.timestamp(),
                    updated: ServiceHelper.timestamp()
                }
            }

            //Public API
            return {
                ref,
                getScheme,
                push,
                onValue,
                remove,
                update
            }

            //Function Declaration Section
            function validate(item) { //TODO: add test
                if(!ServiceHelper.trimName(item))
                    return 'Card Validate Error: Empty name'

                return false
            }

            function push(item) { //TODO: add test
                let predefinedItem = { //TODO: move this section to ServiceFirebase, func beforePush
                    slug: ServiceHelper.slug(item.name),
                    updated: ServiceHelper.timestamp()
                }
                let itemScheme = Object.assign({}, getScheme(), item, predefinedItem)
                return ServiceFirebase.push(ref, itemScheme, validate)
            }

            function onValue(fn, fnErr) { //TODO: add test
                return ServiceFirebase.onValue(ref, fn, fnErr)
            }

            function remove(key, fn) { //TODO: add test
                return ServiceFirebase.remove(ref, key, fn)
            }

            function update(key, item) { //TODO: add test
                let itemPredefined = {
                    slug: ServiceHelper.slug(item.name),
                    updated: ServiceHelper.timestamp()
                }
                let itemScheme = Object.assign({}, item, itemPredefined)
                return ServiceFirebase.update(ref, key, itemScheme, validate)
            }

        }
    })