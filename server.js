const express = require('express');
const bodyParser = require('body-parser');
const { appendFileSync } = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

require('./backend/Controller/RouterController')(app);

app.listen(3000, function () {
    console.log('listening on port 3000')
})