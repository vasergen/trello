import iconController from './trIconController.js'
import iconTemplate from './trIcon.html'

export default {
    bindings: {
        icon:'@'
    },
    controller: iconController,
    template: iconTemplate
}