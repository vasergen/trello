import commentTemplate from './comment.html'
import commentController from './commentController.js'

export default {
    bindings: {
        keys: '<',
        commentKey: '=',
        comment: '='
    },
    controller: commentController,
    template: commentTemplate
}