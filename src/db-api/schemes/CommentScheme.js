export default class CommentScheme {
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
            return 'Comment Validate Error: Empty name'

        return false
    }
}