import newCommentTemplate from './newComment.html'
import newCommentController from './newCommentController.js'

export default {
    bindings: {
        keys: '<'
    },
    controller: newCommentController,
    template: newCommentTemplate
}