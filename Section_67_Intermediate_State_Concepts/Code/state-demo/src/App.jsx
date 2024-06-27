import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'

function App() {

  const [scores, setScores] = useState({ p1Score:0, p2Score:0});
  return (
    <>
      {/*<h1>State Demo</h1>*/}
      {/*<Counter></Counter>}
      {<Dumbo></Dumbo>*/}
      <ScoreKeeper numPlayers={5} target={5}></ScoreKeeper>
      {/*<EmojiClicker></EmojiClicker>*/}
      
    </>
  )
}

export default App
