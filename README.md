/

    -src/
        index.js //server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/

    -tests [later] we dont upload on server 
    -static/
    temp/






    

# here we are role based project development
(all the models in one folder, all the controllers in one folder ...)

# in feature based project development
-flights
    models
    controllers
    ...
-search
    models
    controllers
    ----

  # welcome to the flight service
  ## project setup

- clone the project on your local machine
- execute `npm install` on the same path as of your root directory of the download project
-create a `.env` file in the root directory and add the following environment variable
     - `PORT=3000`
-inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```

{
  "development": {
    "username": "<your db login name>",
    "password": "<your db p/w>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

```
