import { Uselocation } from "./UseLocation.jsx"

export function Location(){
    
    const [handlePos , latitude , longitude] = Uselocation()
    return (
        <>
            <button onClick={handlePos}>Show position</button>
            {latitude && <p>Longitude is: {longitude}</p>}
            {longitude && <p>Latitude is: {latitude}</p>}
        </>
    )
}