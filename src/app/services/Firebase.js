(function() {
    "use strict"

    angular.module("trello")
        .service('ServiceFirebase', ServiceFirebase)

    ServiceFirebase.$inject = ['$timeout', 'ServiceConfig', 'Firebase', '$q']

    function ServiceFirebase($timeout, ServiceConfig, Firebase, $q) {
        let ref = new Firebase(ServiceConfig.getFirebaseBaseUrl())

        //Public API
        return {
            ref,
            push,
            remove,
            onValue,
            update
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

            return $q(function(resolve, reject) {
                if(validateMessage = _validateFn(item)) {
                    return reject(validateMessage)
                }

                ref.push(item).then((response) => {
                    return resolve(response)
                }).catch((err) => {
                    return reject(err)
                })
            })
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

        /**
         * Update
         * @param ref
         * @param key
         * @param item
         * @param fn
         * @returns {*}
         */
        function update(ref, key, item, validateFn) {
            let _validateFn = validateFn || function() {}
            let validateMessage

            return $q((resolve, reject) => {
                if(validateMessage = _validateFn(item)) {
                    return reject(new Error(validateMessage))
                }

                ref.child(key).update(item)
                    .then((response) => {
                        return resolve(response)
                    })
                    .catch((err) => {
                        return reject(err)
                    })
            })
        }
    }
})()