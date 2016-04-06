import boardController from './boardController.js'
import boardTemplate from './board.html'

export default {
    bindings: {
        board: '=',
        boardKey: '<'
    },
    controller: boardController,
    template: boardTemplate
}