const express  = require('express');
const app =  express();
const port = process.env.PORT || 5000;
require('dotenv').config();

if (!process.env.PORT) { console.error('FATAL ERROR: App Port is not defined.'); process.exit(1); }
if (!process.env.JWT_SECRET) { console.error('FATAL ERROR: jwtPrivateKey is not defined.'); process.exit(1); }

app.set('view engine', 'pug');

// require('./startup/logging')();
require('./startup/securityPackages')(app);
require('./startup/db_connection');
require('./startup/router')(app);


require('./startup/pageNotFound')(app);

app.listen(port, () => console.log(`Listening on port ${port}...`));