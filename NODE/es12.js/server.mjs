import express from 'express'
import morgan from 'morgan'

import dotenv from 'dotenv'
dotenv.config()

const app = express()


app.use(express.json())
app.use(morgan('dev'))

let planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    }
]

app.use('/' , (req , res , next) => { 
    console.log(req.method)
    next()
})

app.get('/prova' , (req , res) => {
    res.status(200).json({msg : 'Tutto ok'})
})

app.get('/planet' , (req , res) => {
    res.status(200).json(planets)
})

app.listen(process.env.PORT , ()=>{
    console.log('Server running on http://localhost:3000');
})