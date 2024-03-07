import { useRef , useEffect } from "react"

export function Message(){
    
    const inputRef = useRef(null)

    const componentRef = useRef(false)
    
    useEffect(()=>{
        
        if(!componentRef.current){
            componentRef.current = true
            console.log('Il componente è montato per la prima volta');
        } else {
            console.log('Il componente è stato montato per la seconda volta');
        }
        
        inputRef.current?.focus()    
    }, [])
    
    return (
        <>
            <h2>Input</h2>
            <input ref= {inputRef} name= 'myInput' type= 'text'/>
        </>
    )
}