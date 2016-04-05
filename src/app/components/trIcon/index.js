import iconController from './iconController.js'
import iconTemplate from './icon.html'

export default {
    bindings: {
        icon:'@'
    },
    controller: iconController,
    template: iconTemplate
}