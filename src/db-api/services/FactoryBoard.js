export default function FactoryBoard(FactoryBoards) {
    return function(boardKey) {
        if(!boardKey)
            throw new Error('Board Error! Not provided boardKey')

        let BoardDB = new FactoryBoards()
        BoardDB.ref = BoardDB.ref.child(boardKey)
        return BoardDB
    }
}