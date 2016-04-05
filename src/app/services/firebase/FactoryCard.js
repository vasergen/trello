export default function FactoryCard(FactoryCards) {
    return function(boardKey, listKey, cardKey) {
        if(!boardKey)
            throw new Error('Card Error! Does not provided boardKey')

        if(!listKey)
            throw new Error('Card Error! Does not provided listKey')

        if(!cardKey)
            throw new Error('Card Error! Does not provided cardKey')

        let self = new FactoryCards(boardKey, listKey)
        self.ref = self.ref.child(cardKey)

        return self
    }
}