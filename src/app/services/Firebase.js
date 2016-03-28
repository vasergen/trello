(function() {
    "use strict"

    angular.module("trello")
        .service('ServiceFirebase', ServiceFirebase)

    ServiceFirebase.$inject = ['$timeout', 'ServiceConfig', 'Firebase']

    function ServiceFirebase($timeout, ServiceConfig, Firebase) {
        let ref = new Firebase(ServiceConfig.getFirebaseBaseUrl())

        //Public API
        return {
            ref,
            push,
            remove,
            onValue
        }

        //Function Declaration Section
        /**
         * Push
         * @param ref
         * @param item
         * @param validateFn
         * @returns {*}
         */
        function push(ref, item, validateFn) {
            let _validateFn = validateFn || function() {}
            let validateMessage
            let deffered = $q.defer()
            let promise = deffered.promise

            if(validateMessage = _validateFn(item)) {
                deffered.reject(validateMessage)
                return promise
            }

            ref.push(item).then((response) => {
                deffered.resolve(response)
            }).catch((err) => {
                deffered.reject(err)
            })

            return promise
        }

        /**
         *
         * @param ref
         * @param key
         * @param fn(onComplete)
         * @returns {*}
         */
        function remove(ref, key, fn) {
            return ref.child(key).remove(fn)
        }

        /**
         * onValue
         * @param ref
         * @param fn
         * @param fnErr
         */
        function onValue(ref, fn, fnErr) {
            let _fn = fn || function() {}
            let _fnError = fnErr || function(err) {console.error(err)}

            ref.on("value", (snapshot) => {
                $timeout(() => _fn(snapshot), 0)
            }, _fnError)
        }
    }
})()