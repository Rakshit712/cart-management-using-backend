const express = require("express");
const server = express();
const port =8000;

const router = require("./router/router.js")

server.use(express.json());
const cors = require("cors");
server.use(cors());




const mongoose = require("mongoose");
const url = "mongodb+srv://rakshitudp:Agrim122@mongocluster.xggpcnu.mongodb.net/mydb";

mongoose.connect(url).then(()=>{console.log('connected to the database')}
).catch((err)=> console.log(err));

server.use('/api',router);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)});