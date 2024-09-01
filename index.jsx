const express = require('express')
const app = express()
const port = 5000

app.get('/about', (req, res) => {
    res.send('Author: Murad')
})

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`)
})