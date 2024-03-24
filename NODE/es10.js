
async function getResults(){
    try {
        const tina = await luckyDraw('tina')
        console.log(tina)
        const jorge = await luckyDraw('jorge')
        console.log(jorge) 
        const julien = await luckyDraw('julien')   
        console.log(julien) 
    } catch (error) {
        console.log(error);
    }
}

getResults()