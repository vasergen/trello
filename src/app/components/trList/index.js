import listController from './trListController.js'
import listHtml from './trList.html'

export default {
    bindings: {
        list: '=',
        listKey: '<'
    },
    controller: listController,
    template: listHtml
}