export default class BoardScheme {
    constructor(ServiceHelper) {
        this.ServiceHelper = ServiceHelper
    }

    getScheme() {
        return {
            id: this.ServiceHelper.randomString(),
            timestamp: this.ServiceHelper.timestamp(),
            updated: this.ServiceHelper.timestamp(),
            name: '',
            slug: '',
            starred: false
        }
    }

    validate(item) {
        if(!this.ServiceHelper.trimName(item))
            return 'Board Validate Error: Empty name'

        return false
    }
}