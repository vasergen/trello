import newCardTemplate from './newCard.html'
import newCardController from './newCardController.js'

export default {
    bindings: {
        listKey: '<'
    },
    controller: newCardController,
    template: newCardTemplate
}