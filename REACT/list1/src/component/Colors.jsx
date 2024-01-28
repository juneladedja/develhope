import {Color} from "./Color"

export function Colors ({colors}){ 

    // creo lista non ordinata
    // faccio il map di colors, che è la prop di Colors
    // come par metto color e richiamo Color componente a cui assegno color di map come key e color come color
    return(
        <>
         <ul> 
          {colors.map((color) => 
          <Color key={color} color={color} />)}
        </ul>
        </>
    )
}
