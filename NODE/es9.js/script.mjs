function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
  
  luckyDraw('Joe')
  .then((joeData) => console.log(joeData))
  .then(() => luckyDraw('Caroline'))
  .then((carolineData) => console.log(carolineData))
  .then(() => luckyDraw('Sabrina'))
  .then((sabrinaData) => console.log(sabrinaData))
  .catch((error) => console.log(error))