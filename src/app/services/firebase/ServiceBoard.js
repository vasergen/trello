    "use strict"

    angular.module("trello")
        .service("ServiceBoard", ServiceBoard)

    function ServiceBoard(ServiceFirebase, ServiceHelper, _) {
        let ref = ServiceFirebase.ref.child("boards")
        let getScheme = () => {
            return {
                id: ServiceHelper.randomString(),
                timestamp: ServiceHelper.timestamp(),
                updated: ServiceHelper.timestamp(),
                name: '',
                slug: '',
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
            validate,
            onBoard
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
            let itemPredefined = { //TODO: move this section to ServiceFirebase, func beforePush
                slug: ServiceHelper.slug(item.name),
                updated: ServiceHelper.timestamp()
            }
            let itemScheme = Object.assign({}, getScheme(), item, itemPredefined)
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
         * onBoard
         * @param key
         * @param fn
         * @param fnErr
         * @returns {*}
         */
        function onBoard(key, fn, fnErr) {
            let refBoard = ref.child(key)
            return ServiceFirebase.onValue(refBoard, fn, fnErr)
        }

        /**
         * Update
         * @param key
         * @param item
         * @param fn
         * @returns {*}
         */
        function update(key, item) {
            let itemPredefined = {
                slug: ServiceHelper.slug(item.name),
                updated: ServiceHelper.timestamp()
            }
            let itemScheme = _.assign(itemPredefined, item) //TODO: check it
            return ServiceFirebase.update(ref, key, itemScheme, validate)
        }
    }