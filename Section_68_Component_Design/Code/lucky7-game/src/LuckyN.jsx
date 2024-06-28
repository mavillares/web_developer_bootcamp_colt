import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";
import Button from "./Button";
export default function LuckyN({title = "Dice Game",numDice=2,winCheck}) {

    const [dice,setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = () => {
        setDice(getRolls(numDice));
    }
    return (
        <main className="LuckyN">
            <h1>{title} {isWinner && "You Win!"}</h1>
            <Dice dice={dice}></Dice>
            <Button clickFunc={roll} label="Re-Roll"></Button>
        </main>
    )
}
