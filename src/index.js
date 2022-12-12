const express = require("express");
// require('dotenv').config() written in serverconfig file
const { PORT } = require('./config/serverConfig') ;


const setupAndStartServer = async () => {

    //create the express object
    const app = express();
    // const PORT = 3000;
    //now we are acceesing port var from env
    app.listen(PORT, () => {
        console.log(`server started as ${PORT}`);
        // console.log(process)
        // console.log(process.env)
    })

}

setupAndStartServer();