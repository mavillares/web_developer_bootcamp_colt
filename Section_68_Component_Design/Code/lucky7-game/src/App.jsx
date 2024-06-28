import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LuckyN from './LuckyN'

import Dice from './Dice'
import { sum } from './utils'
import Box from './Box'
import BoxGrid from './BoxGrid'

function lessThan4(dice){
  return sum(dice) < 4;
}
function allSameValue(dice){
  return dice.every((v) => v === dice[0]);
}
function App() {
  

  return (
    <>
    {/*<LuckyN winCheck={lessThan4} title='Roll less than 4'></LuckyN>
    <LuckyN winCheck={allSameValue} numDice={3} title='Roll the same number'></LuckyN>*/}
  <BoxGrid></BoxGrid>
    </>
  )
}

export default App
