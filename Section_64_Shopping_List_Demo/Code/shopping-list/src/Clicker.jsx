function handleClick(){
    console.log("CLICKED THE BUTTON!!!");
}
function handleHover(){
    console.log("HOVEREDDD!!!");
}
export default function Clicker({buttonText,message}){
    const handleClick = () =>{
        alert(message);
    }
    return (
        <button onClick={handleClick}>{buttonText}</button>
        
    )
}