export function Clock (){
    const [date, setDate] = useState(newDate())

    useEffect (() => {
        const intervalID = setInterval(() => {  // serve per impostare orario che ogni tot, si aggiorna
            setDate(newDate())
        }, 1000)
        
      return ()=> { 
         clearInterval (intervalID)
      }
    }, [])

    return <div> <p>  Current time: {date.toLocaleTimeString()} </p> </div>
}