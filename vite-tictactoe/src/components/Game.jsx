import { React, useState, useEffect } from 'react'
import Logo from './Icons/Logo'
import restartIcon from '../assets/icon-restart.svg';
import O from './Icons/O.jsx';
import X from './Icons/X.jsx';
import Ooutline from '../assets/icon-o-outline.svg';
import Xoutline from '../assets/icon-x-outline.svg';
import Portal from './Portal.jsx';
import Scores from './Scores.jsx';
import { useGameState } from '../useGameState.jsx';
import Modal from './Modal.jsx';

const Game = ({playerChoice, gameMode, setGameMode}) => {
  const { board, isNext, winner, scores, updateScores, handleClick, resetGame } = useGameState(playerChoice, gameMode);
  const [showWinDialog, setShowWinDialog] = useState(false);
  const [showRestartDialog, setShowRestartDialog] = useState(false);

  const isGameModeCPU = gameMode === "cpu";
  const isPlayerChoiceX = playerChoice === "X";



  function nextRound(winner) {
    updateScores(winner.winnerState)
    resetGame();
    setShowWinDialog(false)
  }

  function handleRestart() {
    setShowRestartDialog(true);
  }

  function confirmRestart() {
    resetGame();
    setShowRestartDialog(false);
    setShowWinDialog(false);
  }
  function cancelRestart() {
    setShowRestartDialog(false);
  }
  function handleQuit() {
    resetGame();
    setShowWinDialog(false);
    setGameMode("");
  }

  useEffect(() => {
    if (winner.winnerState) {
        setShowWinDialog(true);
    }
  }, [winner])


  return (
    <section>

        <div className='flex justify-between items-center mb-[65px] md:mb-0'>
            <Logo />
            <span className="mr-9 w-[30%] py-3 flex gap-2 items-center justify-center body uppercase text-Grey bg-LightBlack p-2 rounded-lg shadow-[0_4px_0_0_var(--color-BlackShadow)]">
                {isNext === "X" && <svg viewBox="0 0 64 64" className="w-3 h-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#a8bfc9" fill-rule="evenodd"/></svg>}
                {isNext === "O" && <svg viewBox="0 0 64 64" className='w-3 h-3' width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#a8bfc9"/></svg>}
                 Turn
            </span>
            <button onClick={handleRestart} className='bg-Grey p-2 rounded-md shadow-[0_6px_0_0_var(--color-GreyShadow)]'>
                <img src={restartIcon} alt="" />
            </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
            {board.map((value, index) => (
                <button
                    onClick={() => handleClick(index)}
                    key={index}
                    className={`aspect-square w-full  flex items-center justify-center bg-LightBlack rounded-md shadow-[0_8px_0_0_var(--color-BlackShadow)] ${winner?.winningLine?.includes(index) ? (value === "X" ? "bg-LightBlue" : "bg-Orange") : "bg-LightBlack"}`}
                >
                    {value === "X" && <X styling={`w-[40px] min-[465px]:w-[64px] h-[40px] min-[465px]:h-[64px] ${winner?.winningLine?.includes(index) ? "brightness-0" : ""}`}/>  }
                    {value === "O" && <O styling={`w-[40px] min-[465px]:w-[64px] h-[40px] min-[465px]:h-[64px] ${winner?.winningLine?.includes(index) ? "brightness-0" : ""}`}/> }

                    {value === null && (!isGameModeCPU || (isGameModeCPU && isNext === playerChoice)) && <img src={isNext === "X" ? Xoutline : Ooutline} alt="" className="opacity-0 hover:opacity-100" /> }
                </button>
            ))}

            <Scores text={`X ${!isGameModeCPU ? "(P2)" : (isPlayerChoiceX ? "(YOU)" : "(CPU)")} `} value={isPlayerChoiceX ? scores.player : scores.opponent} bgColor="bg-Blue"/>
            <Scores text="TIES" value={scores.ties} bgColor="bg-Grey"/>
            <Scores text={`O ${!isGameModeCPU ? "(P1)" : (!isPlayerChoiceX ? "(YOU)" : "(CPU)")} `} value={!isPlayerChoiceX ? scores.player : scores.opponent} bgColor="bg-Orange"/>
        </div>

        <Portal>
            {showWinDialog && (
                <Modal functionOne={handleQuit} functionTwo={() => nextRound(winner)} textOne="QUIT" textTwo="NEXT ROUND">
                    {winner.winnerState !== "tie" && (<div className="flex justify-center flex-col gap-2">
                        <p className="text-Grey text-lg mb-2">
                            {winner.winnerState === playerChoice ? (isGameModeCPU ? "YOU WON!" : "PLAYER 1 WINS!") : (isGameModeCPU ? "OH NO, YOU LOST..." : "PLAYER 2 WINS!")}
                        </p>
                        <h2 className=" flex items-center justify-center gap-2 headingM md:text-[40px] font-bold mb-6"
                            style={{color: winner.winnerState === "O" ? "var(--color-Orange)" : "var(--color-Blue)" }}
                        >
                            {winner.winnerState === "O" ? <O styling="w-[30px] h-[30px]" /> : <X styling="w-[30px] h-[30px]" />} TAKES THE ROUND
                        </h2>
                    </div>)
                    }

                    {winner.winnerState === "tie" && <h1 className="text-Grey headingM md:text-[40px] mb-6">ROUND TIED</h1> }
                </Modal>
                
            )}

            {showRestartDialog && (
                <Modal functionOne={cancelRestart} functionTwo={confirmRestart} textOne="NO, CANCEL" textTwo="YES, RESTART" >
                    <h2 className="text-2xl font-bold mb-6 text-Grey">
                            RESTART GAME?
                    </h2>
                </Modal>
            )}
        </Portal>
    </section>
  )
}

export default Game