export default function FactoryCard(FactoryCards) {
    return function(boardKey, listKey, cardKey) {
        if(!cardKey)
            throw new Error('Card Error! Does not provided cardKey')

        let CardDB = new FactoryCards(boardKey, listKey)
        CardDB.ref = CardDB.ref.child(cardKey)
        return CardDB
    }
}