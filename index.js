const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

// Index Route
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('serving app at port 3000');
});
