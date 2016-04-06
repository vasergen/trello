import commentsHtml from './comments.html'
import commentsController from './commentsController.js'

export default {
    bindings: {
        keys: '<'
    },
    controller: commentsController,
    template: commentsHtml
}