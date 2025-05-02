import { useState, useEffect, useCallback } from 'react';
import { calculateWinner, getComputerMove } from './gameLogic';

export const useGameState = (playerChoice, gameMode) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isNext, setIsNext] = useState("X");
    const [winner, setWinner] = useState({ winnerState: null, winningLine: null });

    const [scores, setScores] = useState({
        player: 0,
        opponent: 0,
        ties: 0,
    });

    const isGameModeCPU = gameMode === "cpu";

     useEffect(() => {
        const currentWinner = calculateWinner(board);
        setWinner(currentWinner);
    
        if (isGameModeCPU && !currentWinner.winnerState && isNext !== playerChoice) {
            const timer = setTimeout(() => {
                const computerMove = getComputerMove(board, playerChoice);
                if (computerMove !== undefined) {
                    const newBoard = [...board];
                    newBoard[computerMove] = isNext;
                    setBoard(newBoard);
                    setIsNext(prev => prev === "X" ? "O" : "X")
                }
            }, 500)
    
            return () => clearTimeout(timer);
        }
      }, [board, isNext, isGameModeCPU, playerChoice]);

    const handleClick = (index) => {
        if (board[index] || winner.winnerState) return;

        const newBoard = board.slice();
        newBoard[index] = isNext;
        setBoard(newBoard);
        setIsNext(prev => prev === "X" ? "O" : "X");
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsNext("X");
        setWinner({ winnerState: null, winningLine: null});
    };

    const updateScores = useCallback((roundWinner) => {
        setScores(prev => ({
            ...prev,
            player: roundWinner === playerChoice ? prev.player + 1 : prev.player,
            opponent: roundWinner!== "tie" && roundWinner !== playerChoice ? prev.opponent + 1 : prev.opponent,
            ties: roundWinner === "tie" ? prev.ties + 1 : prev.ties
        }));
    }, [playerChoice])

    return { board, isNext, winner, scores, handleClick, resetGame, updateScores };
}