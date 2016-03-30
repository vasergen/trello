(function() {
    "use strict"

    angular.module("trello")
        .factory("ServiceList", ServiceList)

    ServiceList.$inject = ['ServiceFirebase', 'ServiceHelper', '_']
    function ServiceList(ServiceFirebase, ServiceHelper, _) {
        return function(boardKey) {
            let ref = ServiceFirebase.ref.child("lists").child(boardKey)
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
                validate,
                push,
                onValue,
                remove
            }

            //Function Declaration Section
            function validate(item) { //TODO: add test
                if(!ServiceHelper.trimName(item))
                    return 'List Validate Error: Empty name'

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
        }
    }
})()