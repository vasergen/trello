export default function(ServiceHelper, FactoryBoards) {
    let obj = {
        name: '   Vasyl   '
    }

    let Boards = new FactoryBoards()

    this.newBoard = function() {
        Boards.push({
            name: 'MyNew Board'
        })

    }

    this.trimName = () => {
        console.log('trim name')
        let res = ServiceHelper.trimName(obj)
        console.log('res:' + res);
    }
}