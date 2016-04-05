import EditedElementController from './../_shared/EditedElementController.js'

export default class NewCardController extends EditedElementController {
    constructor(FactoryCards, ServiceHelper, ServiceEvents, $state) {
        super(ServiceEvents, ServiceHelper)

        this.boardKey = $state.params.boardKey
        this.CardsDB = new FactoryCards(this.boardKey, this.listKey)
        this.elementId = ServiceHelper.randomString()
        this.inputId = ServiceHelper.randomString()
        this.isEdited = false
        this.cardName = ''
    }

    resetState() {
        super.resetState()
        this.cardName = ''
    }

    save() {
        let item = {
            name: this.cardName
        }

        return this.CardsDB
            .push(item)
            .then(this.resetState.bind(this))
            .catch(this.ServiceHelper.logError)
    }
}