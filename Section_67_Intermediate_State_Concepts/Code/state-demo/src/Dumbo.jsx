import { useState } from "react";

function generateGameBoard(){
    console.log("MAKING THE INITIAL GAME BOARD");
    return Array(5000);
}
export default function Dumbo(){
    //Se ejecuta una vez
    const [board,setBoard] = useState(generateGameBoard);
    //Se ejecuta todas las veces
    //const [board,setBoard] = useState(generateGameBoard());
    return <button onClick={()=> setBoard("hello!")}>Click me to change state</button>
}