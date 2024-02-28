import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext ";


export function Clock(){

    const lenguage = useContext(LanguageContext); //context (formula che si scrive cosi)

    const [date, setDate] = useState(new Date()); //use state perche lo stato cambia di continuo e ci deve essere rendering
  
    useEffect(() => {
    const intervalID = setInterval(() => { //ogni secondo, quindi 1000
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID); // per farlo fermare se no conttinua all'infinito
    }; 
  });

    return(
        <>
      
        <div className="clock-container">

          <div className="clock-content">
            {language == `en` && `current time`} 
            {language == `it` && `ora corrente`} 
            {language == `es` && `tiempo actual`} 
            {language == 'fr' && 'heure actuelle'}
            
            <br />
            {date.toLocaleTimeString()}
          </div>

        </div>
      
    </>
    )
}