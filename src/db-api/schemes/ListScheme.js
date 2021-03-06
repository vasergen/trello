export default class ListScheme {
    constructor(ServiceHelper) {
        this.ServiceHelper = ServiceHelper
    }

    getScheme() {
        return {
            id: this.ServiceHelper.randomString(),
            timestamp: this.ServiceHelper.timestamp(),
            updated: this.ServiceHelper.timestamp(),
            name: '',
            slug: ''
        }
    }

    validate(item) {
        if(!this.ServiceHelper.trimName(item))
            return 'List Validate Error: Empty name'

        return false
    }
}