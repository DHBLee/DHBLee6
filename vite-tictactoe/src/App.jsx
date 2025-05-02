import { useState } from 'react'
import Logo from './components/Icons/Logo';

import Game from './components/Game';


function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [gameMode, setGameMode] = useState("");

  function handleUserChoice(choice) {
      setPlayerChoice(choice);
  }
  function startGame(mode) {
    if (!playerChoice) {
      alert("Please choose X or O first")
      return
    }

    setGameMode(mode);
  }

  return (
    <>
      <main className='max-w-[460px] w-full absolute top-[50%] left-[50%] translate-[-50%] px-6'>

        {!gameMode &&  
          <section className='grid gap-8'>
            <Logo extraStyle="mx-auto"/>
            
            <div className='bg-LightBlack p-6 text-center rounded-2xl grid gap-6 shadow-[0_8px_0_0_var(--color-BlackShadow)]'>
              <h6 className='headingXS uppercase text-Grey'>Pick Player 1's mark</h6>
              <div className='grid grid-cols-2 gap-3  bg-Black p-[9px] rounded-2xl'>
                <button onClick={() => handleUserChoice("X")} className={`flex justify-center items-center rounded-2xl p-3 ${playerChoice === "X" ? "bg-Grey" : "hover:bg-[#21313b]"} w-full`}>
                  <svg viewBox="0 0 64 64" className="w-10 h-10" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill={playerChoice === "X" ? "hsl(202, 32%, 15%)" : "#a8bfc9"} fill-rule="evenodd"/></svg>
                </button>
                <button onClick={() => handleUserChoice("O")} className={`flex justify-center items-center rounded-2xl p-3 ${playerChoice === "O" ? "bg-Grey" : "hover:bg-[#21313b]"} w-full`}>
                  <svg viewBox="0 0 64 64" className='w-10 h-10' width="64" height="64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill={playerChoice === "O" ? "hsl(202, 32%, 15%)" : "#a8bfc9"}/></svg>
                </button>
              </div>
              <p className='body uppercase text-Grey'>remember : X goes first</p>
            </div>

            <div className='grid gap-6'>
              <button onClick={() => startGame("cpu")} className='hover:brightness-125 headingXS p-3 rounded-xl bg-Orange uppercase shadow-[0_8px_0_0_var(--color-OrangeShadow)] text-Black'>new game (vs cpu)</button>
              <button onClick={() => startGame("player")} className='hover:brightness-125 headingXS p-3 rounded-xl bg-Blue uppercase shadow-[0_8px_0_0_var(--color-BlueShadow)] text-Black'>new game (vs player)</button>
            </div>
          </section>
        }

        {gameMode && <Game playerChoice={playerChoice} setGameMode={setGameMode} gameMode={gameMode} /> }
      </main>
        
    </>
  )
}

export default App
