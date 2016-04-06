export default function FactoryBoard(FactoryBoards) {
    return function(boardKey) {
        if(!boardKey)
            throw new Error('Board Error! Not provided boardKey')

        let self = new FactoryBoards()
        self.ref = self.ref.child(boardKey)
        return self
    }
}