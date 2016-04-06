export default function FactoryCard(FactoryCards) {
    return function(boardKey, listKey, cardKey) {
        if(!boardKey)
            throw new Error('Card Error! Does not provided boardKey')

        if(!listKey)
            throw new Error('Card Error! Does not provided listKey')

        if(!cardKey)
            throw new Error('Card Error! Does not provided cardKey')

        let CardDB = new FactoryCards(boardKey, listKey)
        CardDB.ref = CardDB.ref.child(cardKey)
        return CardDB
    }
}