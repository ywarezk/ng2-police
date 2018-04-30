const express = require('express');
const path = require('path');

const app = express();

app.get('*.*', express.static(__dirname));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(3000);