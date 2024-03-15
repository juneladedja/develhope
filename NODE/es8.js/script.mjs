import fs from 'node:fs'

const contenuto = 'il mio testo'

fs.writeFile('text.txt' , contenuto , (err) => {
    if(err){
        console.log('Attenzione errore');
        return
    }
    
    console.log('File creato con successo');
})