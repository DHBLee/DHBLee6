export const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

export const calculateWinner = (squares) => {
    
    for (let line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
              winnerState: squares[a],
              winningLine: line
            };
        }
    }

    if (squares.every(square => square !== null)) {
        return { winnerState: "tie", winningLine: null};
    }

    return { winnerState: null, winningLine: null };
}

export const getComputerMove = (board, playerChoice) => {
    for (let line of lines) {
        const [a, b, c] = line;
        if (board[a] === board[b] && board[a] === playerChoice && !board[c]) return c;
        if (board[a] === board[c] && board[a] === playerChoice && !board[b]) return b;
        if (board[b] === board[c] && board[b] === playerChoice && !board[a]) return a;
    }


    if (!board[4]) return 4;

    const availableMoves = board.map((square, index) => !square ? index : null).filter(val => val !== null);

    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  }