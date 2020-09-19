# nodejs-boilerplate

<h3> Installation guides </h3>

1. run `npm install` to install dependencies.<br>

2. create a `.env` file and add values for the following fields according to your environment <br>
    `NODE_ENV=development` <br>
    `PORT=5000` <br>
    `JWT_SECRET=`

    `DB_USERNAME=root` <br>
    `DB_PASSWORD=` <br>
    `DB_NAME=boilerplate` <br>
    `DB_PORT=3306` <br>
    `DB_HOST=127.0.0.1` <br>

3. create a database on your MySQL and name it `boilerplate` <br>
    NB: please change this to reflect your database name (dont forget to change the value of `database` in `config/config.json`)<br>

4. run `npm run migrate` <br>

5. Start your MySQL database.

6. run `nodemon` or `npm start` to serve with hot reload at `localhost:5000`
