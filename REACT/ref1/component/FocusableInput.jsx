export function FocusableInput(){
    const [username, setUsername] = useState ('')
    
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus()
        // current è l'oggetto che ci viene dato da useRef
        // quando io richiamo inputRef, richiamo il current, che in questo caso è null
        // se è null o undefined, non viene eseguito nente, quindi metto ? 
        // cosi da dire che quando non è null/undefined, allora esegue l'operazione
    }, [])

    function handleUsernameInput(e){
        const name = e.target.name
        const value = e.target.value
     }

    return (
        <label htmlFor="username"> Username: </label>,
        <input type="text" ref={myRef} onChange={handleUsernameInput} />
    )
}