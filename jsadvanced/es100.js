// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 
//utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati 
// e rifiutare con un messaggio di errore.

function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("Errore: dati non disponibili");
        }
      }, 1000);
  })
}


fetchDataFromAPI()
    .then((result) => console.log("Dati ricevuti:", result))
      .catch((error) => console.error("Errore durante il recupero dei dati:", error));



// async fetchDataFromAPI (){
//    try {
//    const result = await firstPromise()        
//    console.log(result); 
//    } catch (error) {
//        console.log(error);
//    }
// }

// fetchDataFromAPI()