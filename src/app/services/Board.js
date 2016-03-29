(function() {
    "use strict"

    angular.module("trello")
        .service("ServiceBoard", ServiceBoard)

    ServiceBoard.$inject = ['ServiceFirebase', 'ServiceHelper', '_']

    function ServiceBoard(ServiceFirebase, ServiceHelper, _) {
        let ref = ServiceFirebase.ref.child("boards")
        let getScheme = () => {
            return {
                id: ServiceHelper.randomString(),
                timestamp: ServiceHelper.timestamp(),
                updated: ServiceHelper.timestamp(),
                name: '',
                starred: false
            }
        }

        //Public API
        return {
            ref,
            getScheme,
            push,
            remove,
            onValue,
            update,
            validate
        }

        //Function Declaration Section
        /**
         * Validate
         * @param item
         * @returns {*}
         */
        function validate(item) {
            if(!ServiceHelper.trimName(item))
                return 'Board Validate Error: Empty name'

            return false
        }

        /**
         * Push
         * @param item
         * @returns {*}
         */
        function push(item) {
            let itemScheme = _.assign(item, getScheme())
            return ServiceFirebase.push(ref, itemScheme, validate)
        }

        /**
         * Remove
         * @param key
         * @param fn
         * @returns {*}
         */
        function remove(key, fn) {
            return ServiceFirebase.remove(ref, key, fn)
        }

        /**
         * onValue
         * @param fn(snapshot)
         * @param fnErr(err)
         * @returns {*}
         */
        function onValue(fn, fnErr) {
            return ServiceFirebase.onValue(ref, fn, fnErr)
        }

        /**
         *
         * @param key
         * @param item
         * @param fn
         * @returns {*}
         */
        function update(key, item) {
            return ServiceFirebase.update(ref, key, item, validate)
        }
    }
})()