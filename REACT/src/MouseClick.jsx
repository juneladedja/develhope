export function MouseClick(){
    function handleClick(event){
        console.log(`The button's name is: "${event.target.name}"`)
    }
    
    return <button name= "button" onClick={handleClick}> Click Me </button>
}