import cardController from './trCardController.js'
import cardTemplate from './trCard.html'

export default {
    bindings: {
        card: '=',
        cardKey: '<',
        listKey: '<'
    },
    controller: cardController,
    template: cardTemplate
}