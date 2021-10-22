const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Iam learning node yooo !')
})
const users = [
    { id: 0, name: 'Dhoni', email: 'msd@gmail.com' },
    { id: 1, name: 'Shakib', email: 'Shakib@gmail.com' },
    { id: 2, name: 'Kohli', email: 'kohli@gmail.com' },
    { id: 3, name: 'Messi', email: 'messi@gmail.com' },
    { id: 4, name: 'Ab d villiers', email: 'abd@gmail.com' },
    { id: 5, name: 'Rohit', email: 'rs@gmail.com' },


]
// post method
app.post('/users',(req,res)=>{
    const newUser=req.body
    newUser.id=users.length
    users.push(newUser)
    console.log('hitting the post',req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
// query
app.get('/users', (req, res) => {
    const search = req.query.search
    if (search) {
        const result = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(result)
    }
    else {
        res.send(users)
    }


})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.get('/users', (req, res) => {
    res.send(users)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})