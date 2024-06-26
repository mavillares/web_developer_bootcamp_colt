import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'
import Counter from './Counter'
import Toggler from './Toggler'
import TogglerCounter from './ToggleCounter'
import ColorBoxGrid from './ColorBoxGrid'

const data = [
  {id:1,item:'eggs',quantity:12,completed: false},
  {id:2,item:'milk',quantity:1, completed :true},
  {id:3,item:'chicken breasts', quantity:4,completed:false},
  {id:4,item:'carrots', quantity:6,completed : true}
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
  const colors = [
    "#E53935",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
  ];

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ColorBoxGrid colors={colors}></ColorBoxGrid>
        {/*<TogglerCounter></TogglerCounter>*/}
        {/*<Toggler></Toggler>*/}
        {/*<Counter></Counter>*/}
        {/*<Clicker message="HI!!" buttonText="Click Me"></Clicker>
        <Clicker message="Please Stop Clicking Me!" buttonText="do not click"></Clicker>*/}
        {/*<Form></Form>*/}
        {/*<Clicker></Clicker>*/}
       {/* <PropertyList properties={properties}></PropertyList>*/}
        {/*<ShoppingList items={data}></ShoppingList>*/}
        {/*<a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
  </p>*/}
      </div>
      {/*<p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </>
  )
}

export default App
