//we need to require the cors and express modules
const express = require("express");
const cors = require("cors");
const {db} = require('./db/db');
const {readdirSync} = require('fs');
// const { route } = require("./routes/transactions");

//we will make a app
const app = express();

//we will require the dotenv module
require('dotenv').config()

//getting the port number from env file
const PORT = process.env.PORT

//middlewares
//we need to print data in json format 
app.use(express.json());
//using cors so that their will be no cross functional error
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)));

//what will print on the screen
// app.get('/', (req,res) => {
//     res.send('Hello World')
// })

//making a simple server
const server = () => {
    db()
    //listening the app
    app.listen(PORT, () => {
        console.log("listening to port:", PORT); 
    })
}

server() //calling