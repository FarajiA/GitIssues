const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var controllers = require('./controllers');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000))
controllers.init(app);
app.use(express.static(path.join(__dirname, './public')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//var port = app.get('env') !== 'development' ? 80 : 3000;
var server = app.listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});