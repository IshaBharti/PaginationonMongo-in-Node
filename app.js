const express = require('express')
const app = express()


const router=express.Router()

const db=require("./db/dataconnection")
const User=require("./models/user")
var bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/user",require("./routes/user"))
app.use("/user",require("./routes/user"))



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))