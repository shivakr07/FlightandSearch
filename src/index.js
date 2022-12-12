const express = require("express");
// require('dotenv').config() written in serverconfig file

const bodyparser = require("body-parser");
const { PORT } = require('./config/serverConfig') ;


const setupAndStartServer = async () => {

    //create the express object
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended : true}));
    // const PORT = 3000;
    //now we are acceesing port var from env
    app.listen(PORT, () => {
        console.log(`server started as ${PORT}`);
        // console.log(process)
        // console.log(process.env)
    })

}

setupAndStartServer();