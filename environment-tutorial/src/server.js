

// server that displays hello world
require('zone.js/dist/zone-node');
require('reflect-metadata');
const express = require('express');
const path = require('path');
const { ngExpressEngine } = require('@nguniversal/express-engine');
const { AppServerModule } = require('./main.bundle');

const app = express();

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModule
}));

app.set('view engine', 'html');

app.set('views', path.resolve(__dirname, '../dist'));

app.get('*.*', express.static(__dirname))

app.get('*', function(req, res, next) {
    // res.sendFile(path.resolve(__dirname, 'index.html'));
    res.render('index.html', {req});
});

app.listen(3000, function() {
    console.log('we are now listening to port 3000');
})