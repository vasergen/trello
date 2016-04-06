export default function FactoryList(FactoryLists) {
    return function(boardKey, listKey) {
        if(!boardKey)
            throw new Error('Lists Error! Does not provided boardKey')

        if(!listKey)
            throw new Error('Lists Error! Does not provided listKey')

        let ListDB = new FactoryLists(boardKey)
        ListDB.ref = ListDB.ref.child(listKey)

        return ListDB
    }
}