/*
Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

ongoing
*/

function doneOrNot(board) {
    const checkValidityOfBoard = (board) => {
        for (let i = 0; i < 9; i++) {
            let set = new Set()
            for (let k = 0; k < 9; k++) {
                set.add(board[i][k])
            }
            if (set.size === 9) continue
            else return false
        }
        return true
    }

    const transpose = board => board[0].map((x, i) => board.map(x => x[i]))
    const transposedBoard = transpose(board)

    if (checkValidityOfBoard(board) && checkValidityOfBoard(transposedBoard)) {
        return 'Finished!'
    } else return 'Try again!'
}