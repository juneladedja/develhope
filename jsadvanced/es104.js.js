// Convertire la seguente funzione basata
// su callback in una funzione basata su Promise.

// function callback_BasedFunction(arg1, arg2, callback) { 
 // setTimeout(() => { 
 // const result = arg1 + arg2; 
 // if (result % 2 !== 0) { 
 // callback(null, result); 
 // } else { 
 // callback(new Error('Result is not odd!'), null); } }, 1000);
 // }


  function callback_BasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        setTimeout (()=> {
            const result = arg1 + arg2; 
            if (result % 2 !== 0) {
                resolve ('ok')
            } else {
                reject ('Result is not odd!')
            }
        }, 1000);
    })
  }

  /* callback_BasedFunction (55,31)
  .then ((even) => console.log(even))
  .catch ((odd) => console.log(odd)) */


  async function callback_BasedFunction (){
    try {
        const result = await callback_BasedFunction(arg1, arg2)
        console.log(result);
    } catch (error) {
        console.log(error);
    }
  }

  callback_BasedFunction()