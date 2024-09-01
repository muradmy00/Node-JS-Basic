const express = require('express')
const app = express()
const port = 5000


const users = [

    {
        id: 0,
        name:" Murad",
        age: 23,
        Study:" CSE"
    },
    {

        id: 1,
        name: " Miraj",
        age: 22,
        Study: " EEE"

    },
    {

        id: 2,
        name: " Mohiuddin",
        age: 20,
        Study: " BBA"

    }

]


app.get('/',(req,res) => {res.send("Welcome Users API")})

// app.get('/user/murad', (req, res) => {

//     const user = {
//         id: 1,
//         name:" Murad",
//         age: 23,
//         Study:" CSE"
//     }

//     res.send(user)
// })
// app.get('/user/murad', (req, res) => {

//     const user = {
//         id: 2,
//         name:" Miraj",
//         age: 22,
//         Study:" EEE"
//     }

//     res.send(user)
// })


app.get('/users', (req, res) => { res.send(users) })

app.get('/users/:id',(req,res)=>{

    const id = req.params.id;
    //console.log(id); 
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`)
})