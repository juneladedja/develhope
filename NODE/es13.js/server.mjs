import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()
import Joi from 'joi'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

const schema = Joi.object({
    id : Joi.number().integer().required() ,
    name : Joi.string().required()
})


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

app.get('/api/planets' , (req , res) => {
    res.status(200).json(planets)
})

app.get('/api/planets/:id' , (req , res) => {
    const {id} = req.params
    const planet = planets.find(p => p.id === Number(id))
    res.status(200).json(planet)    
})

app.post('/api/planets' , (req , res) => {
    const {id , name} = req.body
    const newPlanet = {id , name}
    const validate = schema.validate(newPlanet)
    const planet = planets.find(p => p.id === Number(id))
    if(planet || validate.error){
        res.status(400).json({msg : 'Error during planet creation'})
    } else {
        planets = [...planets , newPlanet]
        res.status(201).json({msg : 'Planet added successfully'})
    }
})

app.put('/api/planets/:id' , (req , res) => {
    const { id } = req.params
    const { name } = req.body
    planets = planets.map((p) => (p.id === Number(id) ? {...p , name} : p))
    res.status(200).json({ msg : "Planet updated"})
})

app.delete('/api/planets/:id' , (req, res) => {
    const { id } = req.params
    planets = planets.filter((p) => (p.id !== Number(id)))
    res.status(200).json({ msg : 'Planet deleted!' })
})

app.listen(process.env.PORT , ()=>{
    console.log('Server running on http://localhost:3000');
})