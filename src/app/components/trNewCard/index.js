import newCardTemplate from './trNewCard.html'
import newCardController from './trNewCardController.js'

export default {
    bindings: {
        listKey: '<'
    },
    controller: newCardController,
    template: newCardTemplate
}