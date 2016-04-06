import EditedElementController from './../_shared/EditedElementController.js'
import cardModalTemplate from './cardModal/cardModal.html'
import cardModalController from './cardModal/cardModalController.js'

export default class CardController extends EditedElementController{
    constructor(ServiceEvents, ServiceHelper, FactoryCard, $state, $uibModal) {
        super(ServiceEvents, ServiceHelper)
        this.elementId = this.cardKey
        this.boardKey = $state.params.boardKey
        this.CardDB = new FactoryCard(this.boardKey, this.listKey, this.cardKey)
        this.$uibModal = $uibModal
    }

    markDone () {
        this.card.isDone = !this.card.isDone

        this.CardDB
            .update(this.card)
            .then(this.resetState.bind(this))
            .catch(this.ServiceHelper.logError)
    }

    remove() {
        return this.CardDB
            .remove()
            .catch(this.ServiceHelper.logError)
    }

    save() {
        return this.CardDB
            .update(this.card)
            .then(this.resetState.bind(this))
            .catch(this.ServiceHelper.logError)
    }

    showModal(size) {
        let self = this

        this.$uibModal.open({
            template: cardModalTemplate,
            controller: cardModalController,
            size: size,
            resolve: {
                card: function() { return self.card },
                keys: function() {
                  return {
                      listKey: self.listKey,
                      cardKey: self.cardKey,
                      boardKey: self.boardKey
                  }
                }
            }
        })
    }
}