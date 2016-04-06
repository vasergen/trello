export default function FactoryComments(FactoryCard, CommentScheme) {
    return function(boardKey, listKey, cardKey) {
        let CommentsDB = new FactoryCard(boardKey, listKey, cardKey)
        CommentsDB.ref = CommentsDB.ref.child("comments")
        CommentsDB.getScheme = () => CommentScheme.getScheme()
        CommentsDB.validate = (item) => CommentScheme.validate(item)
        return CommentsDB
    }
}