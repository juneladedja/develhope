const fig = require('figlet')

fig('Hello World' , function(data, err){
    if(err){
        console.log(err);
    }
    console.log(data);
})