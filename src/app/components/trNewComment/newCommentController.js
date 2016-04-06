export default class NewCommentController{
    constructor(FactoryComments, ServiceHelper) {
        this.comment = ''
        this.ServiceHelper = ServiceHelper
        this.CommentsDB = new FactoryComments(this.keys.boardKey, this.keys.listKey, this.keys.cardKey)
    }

    resetState() {
        this.comment = ''
    }

    add() {
        let item = {
            name: this.comment
        }

        this.CommentsDB
            .push(item)
            .then(this.resetState.bind(this))
            .catch(this.ServiceHelper.logError)
    }
}