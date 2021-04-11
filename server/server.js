
const { PORT } = require('./config/constant')
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const constant = require('./config/constant')
const db = require('./config/db')
const app = express()


db(); 
app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({
    extended: true 
}))  


app.use(cors()); 
require('./routes/urlShorten')(app);


app.listen(PORT, () => {
    console.log(`https://biki:${PORT}`)
})