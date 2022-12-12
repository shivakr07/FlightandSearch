const dotenv = require('dotenv');

//from this file we will be accessing our code

dotenv.config();

module.exports = {
    PORT : process.env.PORT
}