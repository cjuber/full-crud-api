


const express = require('express')
const cors = require('cors')
const ctrl = require('./controllers/crudOperations')
const app = express()

app.use(express.json())
app,use(cors())

app.get('/user/:id', (req, res) => {

   const {id} = req.params
   for (let i = 0; i<users.length; i++){

    if (users[i].id == +id){
        res.status(200).send(users[i])
    }
   }
})

app.get('/user', (req, res) => {

    const {id} = req.query
    const foundUser = users.filter((user) =>{

        if(user.id == +id) return user
    })
    res.status(200).send(foundUser[0])
})

app.get('/users', (req, res) => {

res.status(200).send(users)
})

app.post('/user', (req,res) => {

   const newUser = {
    id: users.length+1,
    first_name: req.body.first_name || '',
    last_name: req.body.last_name || '',
    email: req.body.email || '',
    hobbies: req.body.hobbies || [],
    laptop: req.body.laptop || {}
   }

   users.push(newUser)

   res.status(200).send(users)
})

app.put('/users/:id', (req,response) => { 

    const {id} = req.params

    for (let i=0; i<users.length; i++){

        if (users[i].id === +id){
        users[i].first_name = "Kyle"

        }
    }
    res.status(200).send(users)
})

app.delete('/users/:id', (req, res) =>{

    const {id} = req.params
    users = users.flter((user) =>{
        if (user.id !== +id) return user
    })
    res.status(200).send(users)
})


app.listen(8081, () => console.log('server running'))