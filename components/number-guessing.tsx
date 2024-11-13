"use client"
import { useState , useEffect, ChangeEvent } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"



export default function NumberGuessing(){

const [gameStart , setGameStarted] = useState<boolean>(false);
const [gameOver ,setGameOver] = useState<boolean>(false);
const [isPaused , setIsPaused] = useState<boolean>(false);
const [targetNumer , setTargetNumber] = useState<number>(0);
const [userGuess , setUserGuess] = useState<number | string>("");
const [ attempts , setAttempts] = useState<number>(0);

useEffect(()=>{
    if (gameStart && !isPaused) {
        const randomNumber : number = Math.floor(Math.random()*10) +1;
        setTargetNumber(randomNumber)
        
    }
},[gameStart , isPaused])

const handleStartGame = ():void =>{

    setGameStarted(true);
    setGameOver(false);
    setAttempts(0);
    setIsPaused(false);

}

const handlePauseGame = ():void =>{
    setIsPaused(true);
} 

const handleResumeGame = ():void =>{setIsPaused(false)}

const handleGuess = ():void =>{
if (typeof userGuess == "number" && userGuess ===targetNumer ) {
    setGameOver(true)
}else{setAttempts(attempts + 1)}

}



const handleTryAgain = () :void =>{
    setGameStarted(false)
    setGameOver(false);
    setUserGuess("")
    setAttempts(0);
}

const handleUserGuessChange = (e:ChangeEvent<HTMLInputElement>):void => {
setUserGuess(parseInt(e.target.value))
}

return (
  <div className="flex flex-col items-center justify-center h-screen z-50  ">
    <div className="bg-green-400/30 backdrop:blur-md  rounded-lg shadow-lg border-2 border-emerald-600 p-8 w-full max-w-md">
      <h1 className="text-3xl font-bold text-center mb-2 text-white">
        Number Guessing Game
      </h1>
      <p className="text-center text-gray-300 mb-4">
        Try to guess the number between 1 and 10!
      </p>
      {!gameStart && (
        <div className="flex justify-center mb-4">
          <Button
            onClick={handleStartGame}
            className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded"
          >
            Start Game
          </Button>
        </div>
      )}
      {gameStart && !gameOver && (
        <div>
          <div className="flex justify-center mb-4">
            {isPaused ? (
              <Button
                onClick={handleResumeGame}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
              >
                Resume
              </Button>
            ) : (
              <Button
                onClick={handlePauseGame}
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded"
              >
                Pause
              </Button>
            )}
          </div>
          <div className="flex justify-center mb-4">
            <Input
              type="number"
              value={userGuess}
              onChange={handleUserGuessChange}
              className="bg--100 border border-gray-300 rounded-lg py-2 px-4 w-full max-w-xs"
              placeholder="Enter your guess"
            />
            <Button
              onClick={handleGuess}
              className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded ml-4"
            >
              Guess
            </Button>
          </div>
          <div className="text-center text-black">
            <p className=" text-gray-200">Attempts: {attempts}</p>
          </div>
        </div>
      )}
      {gameOver && (
        <div>
          <div className="text-center mb-4 text-black">
            <h2 className="text-2xl font-bold">Game Over!</h2>
            <p>You guessed the number in {attempts} attempts.</p>
          </div>
          <div className="flex justify-center">
            <Button
              onClick={handleTryAgain}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Try Again
            </Button>
          </div>
        </div>
      )}
    </div>
  </div>
);

}


