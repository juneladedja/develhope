// Lo scopo di questo task è di mostrare nella pagina una carta de "Il signore degli anelli" con:

// Nome del personaggio
// immagine del personaggio
// Prova a fetchare una card dal db del gioco di carte di Lord of the Rings, 
// la documentazione dell'API la puoi trovare a questo link: https://ringsdb.com/api/doc
// Fai in modo che nella tua pagina html spuntino il nome del personaggio della carta, la sua immagine

async function fetchData () {
    try {
        const response = await fetch ('')
        const responseJson = await response.json()
        const cardName = responseJson.data[0]
        const title = card.attributes.name
        const cover = card.attributes.cover 

        console.log(responseJson);
    } catch (error) {
        console.error (error)
    }
}

fetchData ()