import listController from './listController.js'
import listHtml from './list.html'

export default {
    bindings: {
        list: '=',
        listKey: '<'
    },
    controller: listController,
    template: listHtml
}