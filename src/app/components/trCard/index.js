import cardController from './cardController.js'
import cardTemplate from './card.html'

export default {
    bindings: {
        card: '=',
        cardKey: '<',
        listKey: '<'
    },
    controller: cardController,
    template: cardTemplate
}