import { AlertClock } from "./AlertClock"


function handleShowTime (){
    const actualTime = new Date()
    alert(`The current time is: ${actualTime.toLocaleTimeString()}`)
}


export function App (){
    
    return (
        <div>
            <AlertClock event = {handleShowTime} text='Click me to show the time!'/>
        </div>
        
    )
}