async function fetchData (){
    try {
        const res = await fetch ("https://pokeapi.co/api/v2/pokemon/ditto") // faccio fetch
        const data = await res.json()
        console.log(data); // stampo per vedere se esce array o obj

        const div = document.querySelector ('.card') // punto al div che ho nell'html
        // creo elementi che si appendono al div in maniera dinamica
        div.innerHTML = `<h2> ${data.name} </h2>  
        <img src = "${data.sprites.front_default}">
        <p> Weight: ${data.weight} </p>
        <p> Height: ${data.height} </p>`


    } catch (error) { // gestisco errore

    }
}
 // richiamo funzione SEMRPE
fetchData()