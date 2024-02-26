import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/log";

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSqaure(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'))
    setGameTurns(prevTurns => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
      ...prevTurns,];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id='players' className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}></Player>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}></Player>
        </ol>
        <GameBoard onSelectSquare={handleSelectSqaure}
          turns={gameTurns}></GameBoard>
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  )
}

export default App
