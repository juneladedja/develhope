// Crea una funzione chiamata runCallbacks 
// che accetta un array di funzioni di callback come argomento.
// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.


function runCallbacks(callbacks) {
  callbacks.forEach(callback => {
    callback()
  })
  return callbacks
}
function firstCallback() {
  console.log('prima');
}
function secondCallback() {
  console.log('seconda');
}

function thirdCallback() {
  console.log('terza');
}
const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);