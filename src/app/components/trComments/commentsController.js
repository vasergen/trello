export default class CommentsController {
    constructor(FactoryComments) {
        this.CommentsDB = new FactoryComments(this.keys.boardKey, this.keys.listKey, this.keys.cardKey)
        this.comments = null

        this.activate()
        console.log('CommentsController' + this.keys);
    }

    activate() {
        this.CommentsDB.onValue((snapshot) => {
            this.comments = snapshot.val()
        })
    }
}